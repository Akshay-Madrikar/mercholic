import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectExploreCategory } from '../../redux/explore/explore.selectors';
import CategoryPreview from '../../components/category-preview/category-preview.component';
import CategoryPage from '../category/category.component';
import CollectionPage from '../collection/collection.component';

const ExplorePage = ({ categories, match }) => {

    
      const CategoryPreviewData = () => (
        categories.map( ({ id, ...otherCollectionProps }) => (
            <CategoryPreview key={id} {...otherCollectionProps}/>
        )));
    
        
    return (
        <div>
            <Route exact path={`${match.path}`} component={CategoryPreviewData}/>
            <Route exact path={`${match.path}/:categoryId`} component={CategoryPage}/>
            <Route path={`${match.path}/:categoryId/:collectionId`} component={CollectionPage}/>
        </div>
    );
};

const mapStateToProps = createStructuredSelector({
    categories: selectExploreCategory
});

export default connect(mapStateToProps)(ExplorePage);