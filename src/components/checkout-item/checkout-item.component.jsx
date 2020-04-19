import React from 'react';
import { connect } from 'react-redux';

import { clearItemFromCart, addItem, removeItem } from '../../redux/cart/cart.actions';
import './checkout-item.styles.scss';

const CheckoutItem = ({ cartItem, clearItem, addItem, removeItem }) => {
   const { name, imageUrl, price, quantity } = cartItem;
        return(   
                <tbody>
                    <tr>
                        <td>
                            <div className="product-item">
                                <div className="product-thumb" ><img src={imageUrl} alt="Product"/></div>
                                <div className="product-info">
                                    <h4 className="product-title">{name}</h4>
                                </div>
                            </div>
                        </td>
                        <td className="text-center">
                            <div className="quantity">
                                <div className="arrow" onClick={() => removeItem(cartItem)}>&#10096;</div>
                                    <span className="value">{quantity}</span>
                                <div className="arrow" onClick={() => addItem(cartItem)}>&#10097;</div>
                            </div>
                        </td>
                        <td className="text-center text-lg text-medium">&#x20b9;{price}</td>
                    
                        <td className="text-center"><div className="remove-from-cart" data-toggle="tooltip" title="" data-original-title="Remove item" onClick={() => clearItem(cartItem)}><i class="fa fa-trash" ></i></div></td>
                    </tr>
                </tbody>
        )
};

const mapDispatchToProps = dispatch => ({
    clearItem: item => dispatch( clearItemFromCart( item ) ),
    addItem: item => dispatch( addItem( item ) ),
    removeItem: item => dispatch( removeItem( item ) )
});

export default connect(null,mapDispatchToProps)(CheckoutItem);