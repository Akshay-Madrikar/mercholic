import CollectionActionTypes from './collection.types'

const INTIAL_STATE = {
    collections: null
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