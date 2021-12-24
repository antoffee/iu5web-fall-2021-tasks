import axios from 'api/axios';
import { COFFEE_ROUTES } from 'api/routes';
import { Coffee } from 'types/coffee.types';

export const fetchAllCoffee = async (): Promise<Coffee[]> => {
    return await axios.get<Coffee[]>(`${COFFEE_ROUTES.getAll()}`).then((response) => response.data);
};
