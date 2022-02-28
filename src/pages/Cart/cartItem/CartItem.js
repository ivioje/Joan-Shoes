import React from 'react'
import { Delete } from '@material-ui/icons';
import './cart.styles.css';

const CartItem = ({ item, onUpdateCartQty, onRemoveFromCart }) => {

    return (
        //         <div>
        //             <Card>
        //                 <CardMedia image={item.image.url} alt={item.name} className={classes.media} />
        //                 <CardContent className={classes.CardContent}>
        // <Typography variant='h4'>{item.name}</Typography>
        // <Typography variant='h5'>{item.line_total.formatted_with_symbol}</Typography>
        //                 </CardContent>
        //                 <CardActions className={classes.CardActions}>
        // <div className={classes.buttons}>
        //     <Button type='button' size='small' onClick={() => onUpdateCartQty(item.id, item.quantity - 1)}>-</Button>
        //     <Typography>{item.quantity}</Typography>
        //     <Button type='button' size='small' onClick={() => onUpdateCartQty(item.id, item.quantity + 1)}>+</Button>
        // </div>
        // <Button type='button' variant='contained' color='secondary' onClick={() => onRemoveFromCart(item.id)}>Remove</Button>

        //                 </CardActions>
        //             </Card>
        //         </div>

        <div className="product-card">
            <div className="product-tumb">
                <img src={item.image.url} alt={item.name} />
            </div>
            <div className="product-details">
                <h4> {item.name}</h4>
                <div className="product-bottom-details">
                    <div className="product-price">{item.price.formatted_with_symbol}</div>
                    <div className="product-links">
                        <button onClick={() => onUpdateCartQty(item.id, item.quantity - 1)}>-</button>
                        <h6>{item.quantity}</h6>
                        <button onClick={() => onUpdateCartQty(item.id, item.quantity + 1)}>+</button>
                        <Delete onClick={() => onRemoveFromCart(item.id)} className='delete-item' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartItem
