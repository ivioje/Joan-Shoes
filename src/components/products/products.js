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
        setQuery({query: e.target.value})
        
    };

    const filteredProducts = products.filter(products => {
        return products.name.toLowerCase().includes(query.toString().toLowerCase());
    });

    
    return (
        
        <main className={classes.content}>
            <div className={classes.toolbar}>
                <Search products={products} searchChange={onSearchChange} />
                <Grid container justifyContent='center' spacing={4}>
                    {filteredProducts.map((product) => (
                        <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                            <Product product={product} onAddToCart={onAddToCart} />
                        </Grid>
                    ))}
                    {console.log(products)}
                </Grid>
            </div>
        </main>
    );
}

export default Products;