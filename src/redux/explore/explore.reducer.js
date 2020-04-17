import EXPLORE_DATA from './explore.data';

const INTIAL_STATE = {
    categories: EXPLORE_DATA
};

const exploreReducer = ( state = INTIAL_STATE, action ) => {
    switch( action.type ) {
        default:
            return state;
    }
};

export default exploreReducer;