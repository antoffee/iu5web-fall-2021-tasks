import React, { useCallback, useMemo } from 'react';
import { Field, Form } from 'react-final-form';
import { useHistory, useParams } from 'react-router-dom';
import { fetchCreateCafe } from 'api/cafe/fetchCreateCafe';
import { fetchUpdateCafe } from 'api/cafe/fetchUpdateCafe';
import { useAppContext } from 'hooks/useAppContext';
import { Cafe } from 'types/cafe.types';

export const ChangeCafePage: React.FC = () => {
    const { id } = useParams<{ id?: string }>();
    const { cafe, setLoaded } = useAppContext();
    const history = useHistory();

    const cafeItem = useMemo(() => (id ? cafe.find((item) => item.pk === Number(id)) : undefined), [cafe, id]);

    const handleSubmit = useCallback(
        (values) => {
            void (cafeItem ? fetchUpdateCafe({ ...cafeItem, ...values }) : fetchCreateCafe(values));
            history.push('/cafe');
            setLoaded(false);
        },
        [cafeItem, history, setLoaded],
    );

    if (id && !cafeItem) return <div>not found</div>;

    return (
        <div>
            <Form<Omit<Cafe, 'pk'>> onSubmit={handleSubmit} initialValues={{ ...cafeItem }}>
                {({ handleSubmit, values }) => (
                    <form onSubmit={handleSubmit} className="form">
                        <p>Name</p>
                        <Field name="name" component="input" />
                        <p>Country</p>
                        <Field name="address" component="input" />

                        <button type="button" onClick={handleSubmit}>
                            Submit
                        </button>
                        <pre>{JSON.stringify(values, null, 2)}</pre>
                    </form>
                )}
            </Form>
        </div>
    );
};
