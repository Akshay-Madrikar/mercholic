import CollectionActionTypes from './collection.types';

export const updateCollections = collectionsMap => ({
    type: CollectionActionTypes.UPDATE_COLLECTIONS,
    payload: collectionsMap
});