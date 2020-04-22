import React from 'react';
import { Route } from 'react-router-dom';

import CategoryOverview from '../../components/category-overview/category-overview.component';
import CategoryPage from '../category/category.component';
import CollectionPage from '../collection/collection.component';
import WithSpinner from '../../components/with-spinner/with-spinner.component';

const CategoryOverviewWithSpinner = WithSpinner(CategoryOverview);
const CategoryPageWithSpinner = WithSpinner(CategoryPage);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

const ExplorePage = ({ match }) => {

    //componentDidMount() {
    //     const { updateCategory } = this.props;
    //     const categoryRef = firestore.collection('explore');

    //     categoryRef.get().then( snapShot => {
    //       const categoryMap = convertCategorySnapshotToMap(snapShot);
    //       updateCategory(categoryMap);
    //       this.setState({ loading: false });
    //     });

    //};
        return (
            <div>
                <Route exact path={`${match.path}`} 
                render={props => (<CategoryOverviewWithSpinner {...props}/>)} />
                <Route exact path={`${match.path}/:categoryId`} 
                render={props => (<CategoryPageWithSpinner {...props}/>)} />
                <Route path={`${match.path}/:categoryId/:collectionId`}
                render={props => (<CollectionPageWithSpinner  {...props}/>)} />
            </div>
        );
};


export default ExplorePage;