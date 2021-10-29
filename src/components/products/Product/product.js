import React from 'react';
import {Card, CardMedia, CardContent, CardActions, Typography} from '@material-ui/core';
import { AddShoppingCart } from '@material-ui/icons';
import { mergeClasses } from '@material-ui/styles';
import useStyles from './styles';

const Product = ( { product, onAddToCart } ) => {
    const classes = useStyles();
    
    return ( 
        <div>
<Card className={mergeClasses.root}>
        <CardMedia className={classes.media} image={product.image.url} title={product.name}  />
            <CardContent>
                <div className={classes.cardContent}>
                    <Typography variant='h5' gutterBottom>
                    {product.name}
                    </Typography>
                <Typography variant='h5'>
                {product.price.formatted_with_symbol}
                </Typography>
                </div>
                <Typography dangerouslySetInnerHTML={{ __html:product.description}} />
            </CardContent>
            <CardActions disableSpacing className={classes.CardActions}>
                <AddShoppingCart style={{cursor: 'pointer'}} onClick={() => onAddToCart(product.id, 1)}/>
                {/* <h6 aria-label="Add to cart" onClick={() => onAddToCart(product.id, 1)}>
                Add to cart
                </h6> */}
            </CardActions>

        </Card>
        </div>
     );
}
 
export default Product;