import axios from 'api/axios';
import { COFFEE_ROUTES } from 'api/routes';
import { AxiosResponse } from 'axios';
import { Coffee } from 'types/coffee.types';

export const fetchCreateCoffee = async (coffee: Coffee): Promise<boolean> => {
    return await axios
        .post<Coffee, AxiosResponse<Coffee>>(`${COFFEE_ROUTES.create()}`, coffee)
        .then((response) => response.status === 200);
};
