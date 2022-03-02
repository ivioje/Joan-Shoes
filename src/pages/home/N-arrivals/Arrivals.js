import React, { useState, useEffect } from 'react'
import './style.css';
import { commerce } from '../../../lib/commerce.js';
import { Grid } from '@material-ui/core';
import Spinner from '../../../components/loader/Spinner'
const Arrivals = (props) => {
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
    console.log(cart);

    useEffect(() => {
        fetchProducts();
    }, []);

    // const { loading = false } = props;

    if (products.length === 0) return <Spinner />;


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
            <div className='card' style={{ maxWidth: '100%', padding: '0rem .5rem', border: 'none' }}>
                <div className='productCard'>
                    <img alt={product.name} src={product.image.url} className='image-media' title={product.name} />
                    <div>
                        <div className=''>
                            <h5 className='name'>
                                {product.name.toUpperCase()}
                            </h5>
                            <div className='desc' dangerouslySetInnerHTML={{ __html: product.description }} />
                            <div className='footer'>
                                <h6 className='price'> {product.price.formatted_with_symbol} </h6>
                                <p className='to-cart' onClick={() => handleAddToCart(product.id, 1)}>Add to cart</p>
                            </div>
                        </div>
                    </div>
                </div>
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
