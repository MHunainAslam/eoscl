import React, { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

const StripeModal = () => {
    const stripe = useStripe();
    const elements = useElements();
    const [error, setError] = useState(null);

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const cardElement = elements.getElement(CardElement);

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card: cardElement,
        });

        if (error) {
            setError(error.message);
            console.error(error);
        } else {
            // Send paymentMethod.id to your server to complete the payment
            console.log('Payment Method:', paymentMethod);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <CardElement className='form-control py-3' />
            <div className="d-flex">
                <button className='btn primary-btn  mt-3 ms-auto' type="submit" disabled={!stripe}>
                    Pay
                </button>
            </div>
            {error && <div>{error}</div>}
        </form>
    );
};

export default StripeModal;
