import COLLECTION_DATA from './collection.data';
import CollectionActionTypes from './collection.types'

const INTIAL_STATE = {
    collections: COLLECTION_DATA
};

const collectionReducer = ( state = INTIAL_STATE, action ) => {
    switch( action.type ) {
        case CollectionActionTypes.UPDATE_COLLECTION:
            return {
                ...state,
                collections: action.payload
            };
        default:
            return state;
    }
};

export default collectionReducer;