import React from 'react';
import { connect } from 'react-redux';

import CustomButton from '../custom-button/custom-button.component';
import  { addItem } from '../../redux/cart/cart.actions'

import './collection-item-category.styles.scss';

const CollectionItemCategory = ({item,  addItem  }) => {
    
    const { name, imageUrl, price  } = item;

    return (
      
        <div>
            <div className="collection card-group">
                <div className="container align-items-center d-flex justify-content-center m-3 p-1">
                    <div className="collection-item-card card" style={{ 
                        backgroundImage: `url(${imageUrl})`
                    }}>
                        <div className="card-body align-items-center d-flex flex-column">
                            <CustomButton onClick={() => addItem(item)} inverted>ADD TO CART</CustomButton>
                        </div>
                    </div>     
                </div>
            </div>
            <div className="collection-item-footer text-center">
                <p className="collection-item-title">{name}</p>
                <p className="collection-item-price">&#x20b9;{price}</p>
            </div>
        </div>
    );
};

const mapDispatchToProps = ( dispatch ) => ({
    addItem: item => dispatch( addItem( item ) )
});

export default connect(null,mapDispatchToProps)(CollectionItemCategory);