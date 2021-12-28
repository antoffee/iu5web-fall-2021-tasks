import React, { useCallback } from 'react';
import { useHistory } from 'react-router';
import { fetchDeleteCafe } from 'api/cafe/fetchDeleteCafe';
import cnBind, { Argument } from 'classnames/bind';

import { CafeCardProps } from './CafeCard.types';

import styles from './CafeCard.module.css';

const cx = cnBind.bind(styles) as (...args: Argument[]) => string;

export const CafeCard = ({ cafe }: CafeCardProps): JSX.Element => {
    const history = useHistory();

    const handleDelete = useCallback(() => {
        void fetchDeleteCafe(cafe);
        history.push('/');
    }, [cafe, history]);

    const handleEdit = useCallback(() => {
        history.push(`/update-cafe/${cafe.pk}`);
    }, [cafe.pk, history]);

    return (
        <div className={cx('container')}>
            <div className={cx('info')}>
                <h1>{cafe.name}</h1>
                <p>{cafe.address}</p>
                <button type="button" onClick={handleDelete} className={cx('button')}>
                    Delete
                </button>
                <button type="button" onClick={handleEdit} className={cx('button')}>
                    Edit
                </button>
            </div>
        </div>
    );
};
