import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import CategoryOverview from '../../components/category-overview/category-overview.component';
import CategoryPage from '../category/category.component';
import CollectionPage from '../collection/collection.component';
import { firestore, convertCategorySnapshotToMap } from '../../firebase/firebase.util';
import { updateCategory } from '../../redux/explore/explore.actions';

class ExplorePage extends React.Component {
    unsubscribeFromSnapshot = null;

    componentDidMount() {
        const { updateCategory } = this.props;
        const categoryRef = firestore.collection('explore');

        this.unsubscribeFromSnapshot = categoryRef.onSnapshot(async snapShot => {
          const categoryMap = convertCategorySnapshotToMap(snapShot);
          updateCategory(categoryMap);
        });
    };

    render(){
        const { match } = this.props;
        return (
            <div>
                <Route exact path={`${match.path}`} component={CategoryOverview}/>
                <Route exact path={`${match.path}/:categoryId`} component={CategoryPage}/>
                <Route path={`${match.path}/:categoryId/:collectionId`} component={CollectionPage}/>
            </div>
        );
    }
};

const mapDispatchToProps = dispatch => ({
    updateCategory: categoryMap => dispatch( updateCategory( categoryMap ) )
});

export default connect(null,mapDispatchToProps)(ExplorePage);