import axios from 'api/axios';
import { CAFE_ROUTES } from 'api/routes';
import { AxiosResponse } from 'axios';
import { Cafe } from 'types/cafe.types';

export const fetchCreateCafe = async (cafe: Cafe): Promise<Cafe> => {
    return await axios
        .post<Cafe, AxiosResponse<Cafe>>(`${CAFE_ROUTES.create()}`, cafe)
        .then((response) => response.data);
};
