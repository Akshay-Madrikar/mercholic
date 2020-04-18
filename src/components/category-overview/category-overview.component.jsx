import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectExploreCategory } from '../../redux/explore/explore.selectors'
import CategoryPreview from '../category-preview/category-preview.component';

import './category-overview.styles.scss';

const CategoryOverview = ({ categories }) => (
     
        categories.map( ({ id, ...otherCollectionProps }) => (
            <CategoryPreview key={id} {...otherCollectionProps}/>
        ))
);

const mapStateToProps = createStructuredSelector({
    categories: selectExploreCategory
});

export default connect(mapStateToProps)(CategoryOverview);