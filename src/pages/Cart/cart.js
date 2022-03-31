import React from 'react';
import { Container, Typography, Button, Grid } from '@material-ui/core';
import useStyles from './styles';
import CartItem from './cartItem/CartItem';
import { Link } from 'react-router-dom';
import './cart.styles.css';
import Spinner from '../../components/loader/Spinner.js'

const Cart = ({ setCheckout,
    cart, handleUpdateCartQty,
    handleRemoveFromCart,
    handleEmptyCart,
    totalItems }) => {

    const classes = useStyles();

    const EmptyCart = () => (
        <Typography variant='subtitle1' style={{ 'textAlign': 'center' }}>
            <Link to='/shop' className={classes.link}>Click here to add some items to your cart!</Link>
        </Typography>
    );
    const FilledCart = () => (
        <>
            <Grid container spacing={3}>
                {cart.line_items.map((item) => (
                    <Grid item x5={12} sm={4} key={item.id}>
                        <CartItem item={item} onUpdateCartQty={handleUpdateCartQty} onRemoveFromCart={handleRemoveFromCart} />
                    </Grid>
                ))}
            </Grid>
            <div className="cart-summary">
                <h4>Subtotal: {cart.subtotal.formatted_with_symbol}</h4>
                <div className="cart-btn">
                    <Button component={Link} to='/checkout' className='checkout-btn' size='large' type='button' variant='contained' color='primary' onClick={() => { setCheckout(true) }}>Checkout</Button>
                    <Button className='empty-btn' onClick={handleEmptyCart}>Empty Cart</Button>
                </div>
            </div>
        </>
    );
    if (!cart.line_items) return <Spinner />;

    return (
        <Container>
            <div className={classes.toolbar} style={{ 'display': 'flex', 'alignItems': 'center', 'justifyContent': 'center' }} />
            <Typography className={classes.title} variant='h5' gutterBottom style={{ 'textAlign': 'center' }}>You have <span style={{ 'fontSize': '14px' }}>{totalItems} item(s)</span> in your cart</Typography>
            {!cart.line_items.length ? <EmptyCart /> : <FilledCart />}
        </Container>
    );
}

export default Cart;