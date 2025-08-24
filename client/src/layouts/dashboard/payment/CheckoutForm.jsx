import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useEffect, useState } from "react";
import useAuthData from "../../../hooks/useAuthData";
import useCart from "../../../hooks/useCart";
import Swal from "sweetalert2";
import { Navigate, useNavigate } from "react-router";

const CheckoutForm = () => {

    const [clientSecret, setClientSecret] = useState('')
    const [stripeError, setStripeError] = useState('')
    const [payLoading, setPayLoading] = useState(false)
    const navigate = useNavigate()

    const stripe = useStripe();
    const elements = useElements();
    const axiosSecure = useAxiosSecure()
    const { user } = useAuthData()
    const { cart } = useCart()
    const totalPrice = cart.reduce((total, current) => total + Number(current.price), 0)

    useEffect(() => {
        if (totalPrice > 0) axiosSecure.post('/payment-intent', { totalPrice })
            .then(res => {
                setClientSecret(res.data.clientSecret)
            })
    }, [axiosSecure, totalPrice])

    const handleSubmit = async (event) => {
        event.preventDefault();

        setPayLoading(true)
        if (!stripe || !elements) return setPayLoading(false);
        const card = elements.getElement(CardElement);
        if (card === null) return setPayLoading(false);
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
            billing_details: {
                email: user?.email,
                name: user?.displayName
            }
        });
        if (error) {
            console.log(error)
            setStripeError(error.message)
            setPayLoading(false)
        } if (paymentMethod) {
            // console.log(paymentMethod)
            setStripeError('')
            setPayLoading(false)
        }
        const { paymentIntent, error: paymentError } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: card,
                billing_details: {
                    name: user?.displayName,
                    email: user?.email,
                }
            }
        })

        setPayLoading(false)
        if (paymentIntent.status === 'succeeded') {
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Your payment is successfull",
                showConfirmButton: false,
                timer: 1500
            });
            console.log(paymentIntent)
            const menuId = {}
            const cartId = cart.map(item => item._id)
            const paymentInfo = {
                payId: paymentIntent.id,
                name: user?.displayName,
                email: user?.email,
                totalPrice,
                currency: paymentIntent.currency,
                cartId,
                menuId,

            }
            //todo: save the payment info and order list to history list , delete the cart and update list 
            // axiosSecure.post('/payment', paymentInfo)
            navigate('/')
        }
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-3">
            <h3>amount to pay : {totalPrice}</h3>
            <CardElement
                options={{
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
                }}
            />
            <p className="text-red-500">{stripeError}</p>
            <button className="btn btn-md" type="submit" disabled={!stripe || payLoading}>
                Pay
            </button>
        </form>
    );
};

export default CheckoutForm;