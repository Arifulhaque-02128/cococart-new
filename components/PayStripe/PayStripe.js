import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import MyCheckoutForm from './MyCheckoutForm';
import styles from './payStripe.module.css';

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe('pk_test_51IhvoILSmAUPjakNt5UgZx6PFu2wi4fTEDo8cRcqem37050l3M4xZQKVRwmT5CnwmCqhJVaWw57gEC7BirA5qdmr00ZtXZ0Uz0');

const PayStripe = () => {
  return (
    <Elements stripe={stripePromise}>
      <div className={styles.stripeContainer}> 
        <div className={styles.titleDiv}>
            <h2>Pay with card</h2>
          </div>
          <div>
            <MyCheckoutForm />
          </div>
      </div>
    </Elements>
  );
};

export default PayStripe;