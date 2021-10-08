import React from 'react';
import { useFlutterwave, closePaymentModal } from 'flutterwave-react-v3';
import { Button, Typography } from '@material-ui/core';

export default function FlutterPayment({ checkoutToken, cart }) {

  const amt = cart.subtotal.raw;

  const config = {
    public_key: 'FLWPUBK_TEST-2a467708d5320a9489cf1bf4daa564ac-X',
    tx_ref: Date.now(),
    amount: amt + 1000,
    currency: 'NGN',
    payment_options: 'card,mobilemoney,ussd',
    customer: {
      email: 'xxxx@xxxx.com',
    },
    customizations: {
      title: 'Joan Shoes',
      description: 'Payment for items in cart',
      logo: 'https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg',
    },
  };

  const handleFlutterPayment = useFlutterwave(config);

  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexFlow: 'column wrap' }}>
      <Typography variant='h6' gutterBottom style={{ margin: '20px 0', fontWeight: '600' }} >Payment Method</Typography>
      <Button
        onClick={() => {
          handleFlutterPayment({
            callback: (response) => {
              // console.log(response);
              closePaymentModal() // this will close the modal programmatically
            },
            onClose: () => { },
          });
        }}
        color='primary'
        variant='contained'
        justifycontent='center'
      >
        Pay Now
      </Button>
    </div>
  );
}