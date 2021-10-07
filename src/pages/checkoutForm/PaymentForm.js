import React from 'react'
import { Typography, Button, Divider } from '@material-ui/core';
import Review from './Review';
import FlutterPayment from './checkout/FlutterPayment';

const PaymentForm = ({ cart,checkoutToken, backStep }) => {

    return (
        <>
        <Review checkoutToken={checkoutToken} />
        <Divider />
        <Typography variant='h6' gutterBottom style={{ margin: '20px 0', fontWeight: '600' }} >Payment Method</Typography>
        <FlutterPayment checkoutToken={checkoutToken} cart={cart} />
        </>
    )
}

export default PaymentForm
