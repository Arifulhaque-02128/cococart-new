import {CardElement, useStripe, useElements} from '@stripe/react-stripe-js';
import paymentFormStyle from './payStripe.module.css';

const MyCheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();

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
          <input className={paymentFormStyle.inputField} type="email" placeholder="Email..." required />
        </div>
        <label className={paymentFormStyle.Label} for="card-info">Card Information</label>
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
        <label className={paymentFormStyle.Label} for="card-name">Name on card</label>
        <div>
          <input className={paymentFormStyle.inputField} type="text" placeholder="Name..." required />
        </div>
        <button className={paymentFormStyle.paymentBtn} type="submit" disabled={!stripe}>  Pay BDT {"34.00"} </button>
    </form>
  );
};

export default MyCheckoutForm;