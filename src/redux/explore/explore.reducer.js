import CategoryActionTypes from './explore.types';
import EXPLORE_DATA from './explore.data';

const INTIAL_STATE = {
    categories: EXPLORE_DATA
};

const exploreReducer = ( state = INTIAL_STATE, action ) => {
    switch( action.type ) {
        // case CategoryActionTypes.UPDATE_CATEGORY:
        //     return {
        //         ...state,
        //         categories: action.payload
        //     }
        default:
            return state;
    }
};

export default exploreReducer;