import React from 'react';
import { connect } from 'react-redux';

import { selectCategory } from '../../redux/explore/explore.selectors';
import CollectionPreview from '../../components/collection-preview/collection-preview.component';

import './category.styles.scss';

const CategoryPage = ({ categories }) => {
     console.log(categories)
    const { title, data } = categories;
 
    return(
        <div className="category-page">
            <h1 className="text-center">{title.toUpperCase()}</h1>
            {
                data.map( ({ id,...otherCollectionProps }) => 
                (<CollectionPreview key={id} {...otherCollectionProps}/>)
                )
            }
     </div>
    );
};

const mapStateToProps = ( state, ownProps ) => ({
    categories: selectCategory(ownProps.match.params.categoryId)(state)
});

export default connect(mapStateToProps)(CategoryPage);