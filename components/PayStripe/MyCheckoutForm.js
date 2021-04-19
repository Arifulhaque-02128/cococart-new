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
        <div className={paymentFormStyle.FormRow}>
            <CardElement className={paymentFormStyle.stripeForm} />
            <button className="btn btn-dark my-4" type="submit" disabled={!stripe}>  Pay </button>
        </div>
    </form>
  );
};

export default MyCheckoutForm;