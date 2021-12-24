import axios from 'api/axios';
import { CAFE_ROUTES } from 'api/routes';
import { AxiosResponse } from 'axios';
import { Cafe } from 'types/cafe.types';

export const fetchDeleteCafe = async (cafe: Cafe): Promise<Cafe> => {
    return await axios
        .delete<Cafe, AxiosResponse<Cafe>>(`${CAFE_ROUTES.update(cafe.pk)}`)
        .then((response) => response?.data);
};
