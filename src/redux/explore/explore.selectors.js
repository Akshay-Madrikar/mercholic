import { createSelector } from 'reselect';

const selectExplore = state => state.explore;

export const selectExploreCategory = createSelector(
    [selectExplore],
    explore => explore.categories
);

export const selectCategory = categoryUrlParam => createSelector(
    [selectExploreCategory],
    categories => (categories ? categories[categoryUrlParam] : null)
);

export const selectExploreCategoryOverview = createSelector(
    [selectExploreCategory],
    categories => categories ? Object.keys(categories).map(key => categories[key]) : []
);