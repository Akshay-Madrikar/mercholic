import COLLECTION_DATA from './collection.data'

const INTIAL_STATE = {
    collections: COLLECTION_DATA
};

const collectionReducer = ( state = INTIAL_STATE, action ) => {
    switch( action.type ) {
        default:
            return state;
    }
};

export default collectionReducer;