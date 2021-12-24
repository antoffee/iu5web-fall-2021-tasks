import axios from 'api/axios';
import { COFFEE_ROUTES } from 'api/routes';
import { AxiosResponse } from 'axios';
import { Coffee } from 'types/coffee.types';

export const fetchDeleteCoffee = async (coffee: Coffee): Promise<Coffee> => {
    return await axios
        .delete<Coffee, AxiosResponse<Coffee>>(`${COFFEE_ROUTES.update(coffee.pk)}`)
        .then((response) => response?.data);
};
