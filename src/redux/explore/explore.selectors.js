import { createSelector } from 'reselect';

const selectExplore = state => state.explore;

const CATEGORY_ID_MAP = {
    rapper: 1,
    youtuber: 2,
    blogger: 3,
    contentcreator: 4,
    influencer: 5,
    popartist: 6
};

export const selectExploreCategory = createSelector(
    [selectExplore],
    explore => explore.categories
);

export const selectCategory = categoryUrlParam => createSelector(
    [selectExploreCategory],
    categories => categories.find( category => category.id === CATEGORY_ID_MAP[categoryUrlParam] )
);
