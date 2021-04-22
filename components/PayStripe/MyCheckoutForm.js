import React, { useState } from 'react';
import {CardElement, useStripe, useElements} from '@stripe/react-stripe-js';
import paymentFormStyle from './payStripe.module.css';

const MyCheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [customerEmail, setCustomerEmail] = useState("")
  const [customerName, setCustomerName] = useState("")
  // const [country, setCountry] = useState("")

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const cardElement = elements.getElement(CardElement);

    // Use your card Element with other Stripe.js APIs
    const {error, paymentMethod} = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
      billing_details: {name: customerName, email: customerEmail,},
    });

    if (error) {
      console.log('[error]', error);
    } else {
      console.log('[PaymentMethod]', paymentMethod);
    }
  };

  return (
    <form className={paymentFormStyle.FormGroup} onSubmit={handleSubmit}>
        <div>
          <input onChange={ (e) => setCustomerEmail(e.target.value)} className={paymentFormStyle.inputField} type="email" placeholder="Email..." required />
        </div>
        <label className={paymentFormStyle.Label} htmlFor="card-info">Card Information</label>
        <div id="card-info" className={paymentFormStyle.FormRow}>
            <CardElement options={{
              style: {
                base: {
                  fontSize: '16px',
                  color: '#424770',
                  '::placeholder': {
                    color: '#aab7c4',
                  },
                },
                invalid: {
                  color: '#9e2146',
                },
              },
            }} className={paymentFormStyle.stripeForm} />
        </div>
        <label className={paymentFormStyle.Label} htmlFor="card-name">Name on card</label>
        <div>
          <input onChange={ (e) => setCustomerName(e.target.value)} className={paymentFormStyle.inputField} type="text" placeholder="Name..." required />
        </div>
        {/* <label className={paymentFormStyle.Label} htmlFor="country-name">Country </label>
        <div>
          <input onChange={ (e) => setCountry(e.target.value)} className={paymentFormStyle.inputField} type="text" placeholder="USA..." required />
        </div> */}
        <button className={paymentFormStyle.paymentBtn} type="submit" disabled={!stripe}>  Pay BDT {"34.00"} </button>
    </form>
  );
};

export default MyCheckoutForm;