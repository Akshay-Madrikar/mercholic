import React from 'react';
import { Route } from 'react-router-dom';

import CategoryOverview from '../../components/category-overview/category-overview.component';
import CategoryPage from '../category/category.component';
import CollectionPage from '../collection/collection.component';

const ExplorePage = ({ match }) => {

    return (
        <div>
            <Route exact path={`${match.path}`} component={CategoryOverview}/>
            <Route exact path={`${match.path}/:categoryId`} component={CategoryPage}/>
            <Route path={`${match.path}/:categoryId/:collectionId`} component={CollectionPage}/>
        </div>
    );
};


export default ExplorePage;