import React, { useState, useEffect } from 'react'
import './style.css';
import { commerce } from '../../../lib/commerce.js';
import { Grid, Card, CardMedia, CardContent, Typography, CardActions } from '@material-ui/core';
import { AddShoppingCart } from '@material-ui/icons';

const Arrivals = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState({});

    const fetchProducts = async () => {
        const { data } = await commerce.products.list();

        setProducts(data);
    };

    const handleAddToCart = async (productId, quantity) => {
        const item = await commerce.cart.add(productId, quantity);

        setCart(item.cart);
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    const Products = () => {
        return (
            <main className=''>
                <div className=''>
                    <Grid container justifyContent='center' spacing={4}>
                        {products.slice(0, 4).map((product) => (
                            <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                                <Product product={product} />
                            </Grid>
                        ))}
                    </Grid>
                </div>
            </main>
        );
    }

    const Product = ({ product }) => {
        return ( 
            <div>
    <Card className='' style={{border: 'none !important', maxWidth: '100%'}}>
            <img src={product.image.url} className='image-media' title={product.name} />
                <CardContent>
                    <div className=''>
                        <Typography variant='h5' gutterBottom>
                        {product.name}
                        </Typography>
                    <Typography variant='h5'>
                    {product.price.formatted_with_symbol}
                    </Typography>
                    </div>
                    <Typography dangerouslySetInnerHTML={{ __html:product.description}} />
                </CardContent>
                <CardActions disableSpacing className=''>
                <AddShoppingCart style={{cursor: 'pointer'}} onClick={() => handleAddToCart(product.id, 1)}/>
                </CardActions>
    
            </Card>
            </div>
         );
    }

    return (
        <div className='arrivals'>
            <h6>Our New Arrivals</h6>
            <h3>Place your orders for whole sale and retail,<br />
                we deliver to any state in Nigeria.
            </h3>
            <p className='link-shop'> <a href='/shop'>See more products
                &#10142;</a></p>
<Products />
        </div>
    )
}

export default Arrivals
