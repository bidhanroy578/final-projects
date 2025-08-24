import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';

//todo: give a publishable key of stripe here 
const stripePromise = loadStripe(import.meta.env.VITE_stripe_pk);

const Payment = () => {
    return (
        <div className='p-16 bg-white text-black min-h-screen'>
            <h1 className=' text-2xl mb-6 text-center'>Payment</h1>
            <Elements stripe={stripePromise}>
                <CheckoutForm />
            </Elements>
        </div>
    );
};

export default Payment;