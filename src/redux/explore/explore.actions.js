import CategoryActionTypes from './explore.types';

export const updateCategory = ( categoryMap ) => ({
    type: CategoryActionTypes.UPDATE_CATEGORY,
    payload: categoryMap
});