import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_ROCu6npcv9T5BOXpzuxJxnam00NDCL7OYq';

    const onToken = token => {
        console.log(token);
        alert('Payment Successful!');
    }
    return (
        <StripeCheckout 
            label='Pay Now'
            name='Mercholic Ltd.'
            billingAddress
            shippingAddress
            image=''
            description={`Your total price is Rs.${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            currency='INR'
            stripeKey={publishableKey}
            allowRememberMe
        />
    );
};

export default StripeCheckoutButton;