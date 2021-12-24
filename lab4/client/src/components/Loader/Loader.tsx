import React from 'react';
import { HeartIcon } from 'assets';
import cnBind, { Argument } from 'classnames/bind';

import styles from './Loader.module.css';

const cx = cnBind.bind(styles) as (...args: Argument[]) => string;

export const Loader = () => {
    return (
        <div className={cx('spinner')}>
            <HeartIcon />
            <HeartIcon />
            <HeartIcon />
        </div>
    );
};
