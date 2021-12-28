import React, { createContext, SetStateAction } from 'react';
import { Cafe } from 'types/cafe.types';
import { Coffee } from 'types/coffee.types';

export type AppContext = {
    coffee: Coffee[];
    cafe: Cafe[];
    loaded: boolean;
    setLoaded: React.Dispatch<SetStateAction<boolean>>;
};

export const AppContext = createContext<AppContext>({
    coffee: [],
    loaded: false,
    cafe: [],
    setLoaded: () => undefined,
});
