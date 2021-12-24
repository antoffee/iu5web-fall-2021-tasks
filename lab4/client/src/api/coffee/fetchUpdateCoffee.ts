import axios from 'api/axios';
import { COFFEE_ROUTES } from 'api/routes';
import { AxiosResponse } from 'axios';
import { Coffee } from 'types/coffee.types';

export const fetchUpdateCoffee = async (coffee: Coffee): Promise<Coffee> => {
    return await axios
        .put<Coffee, AxiosResponse<Coffee>>(`${COFFEE_ROUTES.update(coffee.pk)}`, coffee)
        .then((response) => response.data);
};
