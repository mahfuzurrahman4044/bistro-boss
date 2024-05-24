import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useContext, useEffect, useState } from 'react';
import UseAxiosSecure from '../../../../Account/Axios Secure/UseAxiosSecure';
import { AuthContext } from '../../../../Account/Provider/AuthProvider';
import Swal from 'sweetalert2';

const CheckoutForm = ({ carts, price }) => {
    const stripe = useStripe();
    const elements = useElements()
    const [cardError, setCardError] = useState("");
    const [clientSecret, setClientSecret] = useState("");
    const [processing, setProcessing] = useState(false);
    const [transactionId, setTransactionId] = useState("");
    const { user } = useContext(AuthContext);
    const [axiosSecure] = UseAxiosSecure();

    useEffect(() => {
        axiosSecure.post("/create-payment-intent", { price })
            .then((res) => {
                // console.log(res.data.clientSecret)
                setClientSecret(res.data.clientSecret)
            });
    }, []);

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);

        if (card == null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {
            // console.log('[error]', error);
            setCardError(error.message)
        } else {
            // console.log('[PaymentMethod]', paymentMethod);
            setCardError("")
        }

        setProcessing(true)

        const { paymentIntent, error: confirmError } = await stripe
            .confirmCardPayment(clientSecret, {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: user?.displayName || "",
                        email: user?.email || "Unknown User",
                    },
                },
            })

        if (confirmError) {
            // console.log(confirmError)
        }

        // console.log(paymentIntent)

        if (paymentIntent.status === "succeeded") {
            const transactionId = paymentIntent.id;
            setTransactionId(transactionId);

            const paymentInfo = {
                email: user?.email,
                transactionId,
                price,
                quantity: carts.length,
                // items: carts.map(cart => cart.name)
            }

            axiosSecure.post("/purchaseHistory", { paymentInfo })
                .then(res => {
                    console.log(res.data)

                    if (res.data.insertedId) {
                        Swal.fire({
                            title: "Greetings",
                            icon: "warning",
                            html: `
                            Payment successful. Transaction ID is: <span class="text-2xl text-yellow-600 underline"> ${transactionId}</span>
                            `,
                            focusConfirm: false,
                            confirmButtonText: `<i class="fa fa-thumbs-up"></i>`,
                        });
                    }
                })
        }

        setProcessing(false)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
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
                <button type="submit" className='btn btn-ghost border border-amber-700 my-2' disabled={!stripe || !clientSecret}>
                    Pay
                </button>
            </form>
            {
                cardError ? <p className='text-red-600'>{cardError}</p> : <></>
            }
        </div>
    );
};

export default CheckoutForm;