import CollectionActionTypes from './collection.types';

export const updateCollection = collection => ({
    type: CollectionActionTypes.UPDATE_COLLECTION,
    payload: collection
});