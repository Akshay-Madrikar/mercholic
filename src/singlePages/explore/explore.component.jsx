import React from 'react';
import { Route } from 'react-router-dom';

import CategoryPreview from '../../components/category-preview/category-preview.component';
import CategoryPage from '../category/category.component';
import CollectionPage from '../collection/collection.component';
import EXPLORE_DATA from './explore.data';

class ExplorePage extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            collections: EXPLORE_DATA
        }
    }


    CategoryPreviewData = () => (
        this.state.collections.map( ({ id, ...otherCollectionProps }) => (
            <CategoryPreview key={id} {...otherCollectionProps}/>
        ))
    )

    render() {
        
        const { match } = this.props;
        return (
            <div>
                <Route exact path={`${match.path}`} component={this.CategoryPreviewData}/>
                <Route exact path={`${match.path}/:categoryId`} component={CategoryPage}/>
                <Route path={`${match.path}/:categoryId/:collectionId`} component={CollectionPage}/>
            </div>
        );
    }
};

export default ExplorePage;