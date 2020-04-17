import { createSelector } from 'reselect';

const selectExplore = state => state.explore;

export const selectExploreCategory = createSelector(
    [selectExplore],
    explore => explore.categories
);