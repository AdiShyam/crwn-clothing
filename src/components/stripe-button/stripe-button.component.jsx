import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_1koOy4iL42XIFQKWwB9TkmZc00ugGecGbE';

    const onToken = token => {
        // console.log("Payment successful", token);
        alert("Payment successful");
    }
    return(
        <StripeCheckout 
            label='Pay now'
            name='CRWN clothing Ltd.'
            billingAddress
            shippingAddress
            image = 'https://svgshare.com/i/CUz.svg'
            description= {`Your totla value is ${price}`}
            amount = {priceForStripe}
            panelLabel= 'pay now'
            token= {onToken}
            stripeKey={publishableKey}
            />
    )
}

export default StripeCheckoutButton