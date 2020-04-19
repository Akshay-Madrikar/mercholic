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
    categories => categories[categoryUrlParam]
);

export const selectExploreCategoryOverview = createSelector(
    [selectExploreCategory],
    categories => Object.keys(categories).map(key => categories[key])
);