import React from 'react';
import { Route } from 'react-router-dom';

import CategoryOverview from '../../components/category-overview/category-overview.component';
import CategoryPage from '../category/category.component';
import CollectionPage from '../collection/collection.component';
import WithSpinner from '../../components/with-spinner/with-spinner.component';

const CategoryOverviewWithSpinner = WithSpinner(CategoryOverview);
const CategoryPageWithSpinner = WithSpinner(CategoryPage);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ExplorePage extends React.Component {

    state = {
        loading: false
    }
    componentDidMount() {
    //     const { updateCategory } = this.props;
    //     const categoryRef = firestore.collection('explore');

    //     categoryRef.get().then( snapShot => {
    //       const categoryMap = convertCategorySnapshotToMap(snapShot);
    //       updateCategory(categoryMap);
    //       this.setState({ loading: false });
    //     });

    };

    render(){
        const { match } = this.props;
        const { loading } = this.state;
        return (
            <div>
                <Route exact path={`${match.path}`} 
                render={props => (<CategoryOverviewWithSpinner isLoading={loading} {...props}/>)} />
                <Route exact path={`${match.path}/:categoryId`} 
                render={props => (<CategoryPageWithSpinner isLoading={loading} {...props}/>)} />
                <Route path={`${match.path}/:categoryId/:collectionId`}
                render={props => (<CollectionPageWithSpinner isLoading={loading} {...props}/>)} />
            </div>
        );
    }
};

export default ExplorePage;