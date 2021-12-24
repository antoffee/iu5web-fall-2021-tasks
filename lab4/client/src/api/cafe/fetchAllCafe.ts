import axios from 'api/axios';
import { CAFE_ROUTES } from 'api/routes';
import { Cafe } from 'types/cafe.types';

export const fetchAllCafe = async (): Promise<Cafe[]> => {
    return await axios.get<Cafe[]>(`${CAFE_ROUTES.getAll()}`).then((response) => response.data);
};
