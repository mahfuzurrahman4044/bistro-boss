import React from 'react';
import DashboardSectionTitle from '../../../../Shared/Dashboard Section Title/DashboardSectionTitle';
import { Helmet } from 'react-helmet';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from '../Checkout Form/CheckoutForm';
import UseCarts from '../../../../UseQuery/Use Carts/UseCarts';

const PaymentGateway = () => {
    const stripePromise = loadStripe('pk_test_51NryOGFvMe0j8d9xd11moHGiRLfXbrFTvcJUKerxwoVFLJ7NTuDN1XutYS80CHjKQhFS9KSMisApc32diV5yitWX00o0MBJibN');

    const [isLoading, carts, refetch] = UseCarts()
    // console.log(carts)

    const total = carts.reduce((sum, item) => item.price + sum, 0)
    const price = parseFloat(total).toFixed(2);
    console.log(price)

    return (
        <div>
            <Helmet>
                <title>Payment Gateway || Dashboard || Bistro Boss</title>
            </Helmet>

            <div>
                <DashboardSectionTitle title={"PAYMENT GATEWAY"} subtitle={"---Stripe---"}></DashboardSectionTitle>
            </div>

            <div className='my-6'>
                <Elements stripe={stripePromise}>
                    <CheckoutForm carts={carts} price={price}></CheckoutForm>
                </Elements>
            </div>
        </div>
    );
};

export default PaymentGateway;