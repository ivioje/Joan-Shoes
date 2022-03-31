import React from 'react'
import './style.css';
import { Grid } from '@material-ui/core';
import Spinner from '../../../components/loader/Spinner'
import Product from '../../../components/products/Product/product';
const Arrivals = ({ products }) => {

     if (products.length === 0) return <Spinner />;

    return (
        <div className='arrivals'>
            <h6>Our New Arrivals</h6>
            <h3>Place your orders for whole sale and retail,<br />
                we deliver to any state in Nigeria.
            </h3>
            <p className='link-shop'> <a href='/shop'>See more products
                &#10142;</a></p>
                <div className='items'>
            {
                products.slice(0, 4).map((product) => (
                    <Grid item key={product.id} xs={12} sm={6} md={4} lg={3} >
                        <Product product={product} />
                    </Grid>
                ))
            }
            </div>
        </div>
    )
}

export default Arrivals
