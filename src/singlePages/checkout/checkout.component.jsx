import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component';
import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selectors';

import './checkout.styles.scss';

const CheckoutPage = ({ cartItems, total, history }) => {

return(
    <div className="container padding-bottom-3x mb-1">
        <div className="table-responsive shopping-cart">
            <table className="table">
                <thead>
                    <tr>
                        <th>Product Name</th>
                        <th className="text-left">Quantity</th>
                        <th className="text-center">Subtotal</th>
                        <th className="text-center">Delete</th>
                        {/* <th className="text-center"><button className="clear-btn btn btn-sm btn-danger">Clear Cart</button></th> */}
                    </tr>
                </thead>
                {
                    cartItems.map( cartItem => (
                        <CheckoutItem key={cartItem.id} cartItem={cartItem}/>
                    ))
                }
            </table>
        </div>
        <div className="shopping-cart-footer">
            <div className="column">
                <form className="coupon-form" method="post">
                    <input className="form-control form-control-sm" type="text" placeholder="Coupon code" required=""/>
                    <button className="btn btn-outline-primary btn-sm" type="submit">Apply Coupon</button>
                </form>
            </div>
            <div className="column text-lg">Subtotal: <span class="text-medium">&#x20b9;{total}</span></div>
        </div>
        <div className="shopping-cart-footer">
            <div className="column"><button onClick={() => history.push("/explore")}><i class="icon-arrow-left"></i>&nbsp;Back to Shopping</button></div>
            <div className="warning">
                *Please use the following test credit card for payments*
                <br />
                4242 4242 4242 4242 - Exp: 01/24 - CVV:420
            </div>
            <div className="column"><StripeCheckoutButton className="btn" price={total}/></div>
        </div>
    </div>
    )
};

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal
})

export default connect(mapStateToProps)(CheckoutPage);