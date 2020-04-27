import React from 'react';
import { connect } from 'react-redux';

import { selectCollectionItems } from '../../redux/collection/collection.selectors';
import CollectionItemCategory from '../../components/collection-item-category/collection-item-category.component';
import { updateCollections } from '../../redux/collection/collection.actions';
import './collection.styles.scss';

const CollectionPage = ({ collections }) => {

        const { name, items } = collections;
        return(
  
            <div>
                <div className="container mt-3 p-3">
                <h1 className="text-center">{name.toUpperCase()}</h1>
                    <div className="row">
                        {
                            items.map( (item) => 
                            (   
                            <div key={item.id}  className="col-md-3">
                                {
                                <CollectionItemCategory  item={item} />
                                }
                            </div>
                            
                            ))
                        }
                    </div> 
                </div> 
            </div>
        );
};

const mapStateToProps = ( state, ownProps ) => ({
    collections: selectCollectionItems(ownProps.match.params.collectionId)(state)
});


export default connect(mapStateToProps)(CollectionPage);