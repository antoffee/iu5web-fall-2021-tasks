const COFFEE_PREFIX = '/coffee';
const CAFE_PREFIX = '/cafe';

export const COFFEE_ROUTES = {
    create: (prefix = COFFEE_PREFIX) => `${prefix}/`,
    update: (id: number, prefix = COFFEE_PREFIX) => `${prefix}/${id}/`,
    delete: (id: number, prefix = COFFEE_PREFIX) => `${prefix}/${id}/`,
    getAll: (prefix = COFFEE_PREFIX) => `${prefix}/`,
};

export const CAFE_ROUTES = {
    create: (prefix = CAFE_PREFIX) => `${prefix}/`,
    update: (id: number, prefix = CAFE_PREFIX) => `${prefix}/${id}/`,
    delete: (id: number, prefix = CAFE_PREFIX) => `${prefix}/${id}/`,
    getAll: (prefix = CAFE_PREFIX) => `${prefix}/`,
};
