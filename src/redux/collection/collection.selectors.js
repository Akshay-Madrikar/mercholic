import { createSelector } from 'reselect';

const selectCollection = state => state.collection;

export const selectExploreCollection = createSelector(
    [selectCollection],
    collection => collection.collections
);

export const selectCollectionItems = collectionUrlParam => createSelector(
    [selectExploreCollection],
    collections => collections[collectionUrlParam]
);

export const selectCollectionItemsOverview = createSelector(
    [selectExploreCollection],
    collections => Object.keys(collections).map(key => collections[key])
);