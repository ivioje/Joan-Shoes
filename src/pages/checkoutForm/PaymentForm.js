import React from 'react'
import { Typography, Button, Divider } from '@material-ui/core';
import Review from './Review';
import FlutterPayment from './checkout/FlutterPayment';

const PaymentForm = ({ cart,checkoutToken, backStep }) => {

    return (
        <>
        <Review checkoutToken={checkoutToken} />
        <Divider />
        <FlutterPayment checkoutToken={checkoutToken} cart={cart} />
        </>
    )
}

export default PaymentForm
