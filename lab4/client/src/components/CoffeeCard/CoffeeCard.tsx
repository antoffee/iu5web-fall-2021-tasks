import React, { useCallback, useMemo } from 'react';
import { useHistory } from 'react-router';
import { fetchDeleteCoffee } from 'api/coffee/fetchDeleteCoffee';
import { CoffeeDefault } from 'assets';
import cnBind, { Argument } from 'classnames/bind';
import { useAppContext } from 'hooks/useAppContext';

import { CoffeeCardProps } from './CoffeeCard.types';

import styles from './CoffeeCard.module.css';

const cx = cnBind.bind(styles) as (...args: Argument[]) => string;

export const CoffeeCard = ({ coffee, large }: CoffeeCardProps): JSX.Element => {
    const history = useHistory();
    const { cafe } = useAppContext();

    const itemCafeName = useMemo(() => cafe.find((item) => item.pk === coffee.cafe)?.name, [cafe, coffee.cafe]);

    const onClick = useCallback(() => history.push(`/${coffee.pk}`), [coffee.pk, history]);

    const rating = useMemo(() => '♥♥♥♥♥♥♥♥♥♥'.slice(0, coffee.score), [coffee.score]);

    const handleDelete = useCallback(() => {
        void fetchDeleteCoffee(coffee);
        history.push('/');
    }, [coffee, history]);

    const handleEdit = useCallback(() => {
        history.push(`/update-coffee/${coffee.pk}`);
    }, [coffee.pk, history]);

    return (
        <div className={cx('container', { large })}>
            <img className={cx('image')} src={coffee.main_image || CoffeeDefault} alt={coffee.name} onClick={onClick} />
            <div className={cx('info')}>
                <h1>{coffee.name}</h1>
                <p>{itemCafeName}</p>
                <p>{coffee.country}</p>
                <p className={cx('description')}>{coffee.description}</p>
                <p>{coffee.price} RUB</p>
                <p className={cx('score')}>{rating}</p>
                {large && (
                    <>
                        <button type="button" onClick={handleDelete} className={cx('button')}>
                            Delete
                        </button>
                        <button type="button" onClick={handleEdit} className={cx('button')}>
                            Edit
                        </button>
                    </>
                )}
            </div>
        </div>
    );
};
