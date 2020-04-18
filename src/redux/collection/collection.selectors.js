import { createSelector } from 'reselect';

const selectCollection = state => state.collection;

const COLLECTION_ID_MAP = {
    divine: 1,
    naezy: 2,
    seedhemaut: 3,
    prabhdeep: 4,

};

export const selectExploreCollection = createSelector(
    [selectCollection],
    collection => collection.collections
);



export const selectCollectionItems = collectionUrlParam => createSelector(
    [selectExploreCollection],
    collections => collections.find( collection => collection.id === COLLECTION_ID_MAP[collectionUrlParam] )
);