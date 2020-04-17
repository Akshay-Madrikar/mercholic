import React from 'react';

import './checkout-item.styles.scss';

const CheckoutItem = ({ cartItem: { name, imageUrl, price, quantity } }) => (
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
                            <div className="count-input">
                                {quantity}
                            </div>
                        </td>
                        <td className="text-center text-lg text-medium">{price}</td>
                    
                        <td className="text-center"><div className="remove-from-cart" data-toggle="tooltip" title="" data-original-title="Remove item"><i class="fa fa-trash"></i></div></td>
                    </tr>
                </tbody>
);

export default CheckoutItem;