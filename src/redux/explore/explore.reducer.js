import CategoryActionTypes from './explore.types';

const INTIAL_STATE = {
    categories: null
};

const exploreReducer = ( state = INTIAL_STATE, action ) => {
    switch( action.type ) {
        case CategoryActionTypes.UPDATE_CATEGORY:
            return {
                ...state,
                categories: action.payload
            }
        default:
            return state;
    }
};

export default exploreReducer;