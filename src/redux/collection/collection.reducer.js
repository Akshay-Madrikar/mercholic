import CollectionActionTypes from './collection.types';
import COLLECTION_DATA from './collection.data';

const INTIAL_STATE = {
    collections: COLLECTION_DATA
};

const collectionReducer = ( state = INTIAL_STATE, action ) => {
    switch( action.type ) {
        // case CollectionActionTypes.UPDATE_COLLECTIONS:
        //     return {
        //         ...state,
        //         collections: action.payload
        //     };
        default:
            return state;
    }
};

export default collectionReducer;