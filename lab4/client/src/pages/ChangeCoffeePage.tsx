import React, { useCallback, useMemo } from 'react';
import { Field, Form } from 'react-final-form';
import { useHistory, useParams } from 'react-router-dom';
import { fetchCreateCoffee } from 'api/coffee/fetchCreateCoffee';
import { fetchUpdateCoffee } from 'api/coffee/fetchUpdateCoffee';
import { useAppContext } from 'hooks/useAppContext';
import { Coffee } from 'types/coffee.types';

export const ChangeCoffeePage: React.FC = () => {
    const { id } = useParams<{ id?: string }>();
    const { cafe, coffee } = useAppContext();
    const history = useHistory();

    const coffeeItem = useMemo(() => (id ? coffee.find((item) => item.pk === Number(id)) : undefined), [coffee, id]);

    const handleSubmit = useCallback(
        (values) => {
            void (coffeeItem ? fetchUpdateCoffee({ ...coffeeItem, ...values }) : fetchCreateCoffee(values));
            history.push('/');
        },
        [coffeeItem, history],
    );

    if (id && !coffeeItem) return <div>not found</div>;

    return (
        <div>
            <Form<Omit<Coffee, 'pk'>> onSubmit={handleSubmit} initialValues={{ ...coffeeItem, main_image: undefined }}>
                {({ handleSubmit, values }) => (
                    <form onSubmit={handleSubmit} className="form">
                        <p>Name</p>
                        <Field name="name" component="input" />
                        <p>Price</p>
                        <Field name="price" component="input" />
                        <p>Description</p>
                        <Field name="description" component="input" />
                        <p>Score</p>
                        <Field name="score" component="input" />
                        <p>Country</p>
                        <Field name="country" component="input" />
                        <p>Cafe</p>
                        <Field name="cafe" component="select">
                            {cafe.map((item) => (
                                <option key={item.pk} value={item.pk}>
                                    {item.name}
                                </option>
                            ))}
                        </Field>

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
