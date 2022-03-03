import React, { useState } from 'react';
import { Grid } from '@material-ui/core';
import Product from './Product/product';
import useStyles from './styles';
import Spinner from '../loader/Spinner'
import Search from './search/Search';

const Products = ({ products, onAddToCart }) => {
    const [query, setQuery] = useState('');
    const classes = useStyles();

    if (products.length === 0) return <Spinner />;

    const onSearchChange = (e) => {
        setQuery(e.target.value)
    };


    return (

        <main className={classes.content}>
            <div className={classes.toolbar}>
                <Search products={products} searchChange={onSearchChange} />
                <Grid container justifyContent='center' spacing={4}>
                    {products.filter(product => {
                        if (query === '') {
                            return product;
                        } else if (product.name.toLowerCase().includes(query.toLowerCase())) {
                            return product;
                        } 
                        return false;
                    }).map((product) => (
                        <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                            <Product product={product} onAddToCart={onAddToCart} />
                        </Grid>
                    ))

                    }

                </Grid>
            </div>
        </main>
    );
}

export default Products;