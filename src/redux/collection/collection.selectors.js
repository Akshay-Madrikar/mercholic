import { createSelector } from 'reselect';

const selectCollection = state => state.collection;

export const selectExploreCollection = createSelector(
    [selectCollection],
    collection => collection.collections
);

export const selectCollectionItems = collectionUrlParam => createSelector(
    [selectExploreCollection],
    collections => collections ? collections[collectionUrlParam] : null
);

export const selectCollectionItemsOverview = createSelector(
    [selectExploreCollection],
    collections => collections ? Object.keys(collections).map(key => collections[key]) : []
);