import React from 'react';
import { useAppContext } from 'hooks/useAppContext';

import { CafeCard } from 'components/CafeCard';

export const CafePage = () => {
    const { cafe } = useAppContext();

    return (
        <div className="list">
            {cafe.map((cafe) => (
                <CafeCard key={`${cafe.pk}`} cafe={cafe} />
            ))}
        </div>
    );
};
