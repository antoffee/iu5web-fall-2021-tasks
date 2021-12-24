import React from 'react';
import { useParams } from 'react-router';
import { useAppContext } from 'hooks/useAppContext';

import { CoffeeCard } from 'components/CoffeeCard';

export const Details = () => {
    const { id } = useParams<{ id: string }>();

    const coffee = useAppContext().coffee.find(({ pk: _id }) => _id === Number(id));

    return <div>{coffee ? <CoffeeCard coffee={coffee} large/> : 'not found'}</div>;
};
