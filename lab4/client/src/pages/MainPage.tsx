import React from 'react';
import { useAppContext } from 'hooks/useAppContext';

import { CoffeeCard } from 'components/CoffeeCard';

export const MainPage = () => {
    const { coffee } = useAppContext();

    return (
        <div className='list'>
            {coffee.map((coffee) => (
                <CoffeeCard key={`${coffee.pk}`} coffee={coffee} />
            ))}
        </div>
    );
};
