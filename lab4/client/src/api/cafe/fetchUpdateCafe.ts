import axios from 'api/axios';
import { CAFE_ROUTES } from 'api/routes';
import { AxiosResponse } from 'axios';
import { Cafe } from 'types/cafe.types';

export const fetchUpdateCafe = async (cafe: Cafe): Promise<Cafe> => {
    return await axios
        .put<Cafe, AxiosResponse<Cafe>>(`${CAFE_ROUTES.update(cafe.pk)}`, cafe)
        .then((response) => response.data);
};
