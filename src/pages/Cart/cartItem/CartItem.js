import React from 'react'
import { Delete } from '@material-ui/icons';
import '../../../components/products/Product/product.styles.css'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

const CartItem = ({ item, onUpdateCartQty, onRemoveFromCart }) => {

    return (

        <Card sx={{ maxWidth: 345 }} style={{ 'maxHeight': '400px' }}>
            <div style={{ 'height': '210px' }}>
                <CardMedia
                    component="img"
                    image={item.image.url}
                    alt={item.name}
                    style={{ 'maxWidth': '100% !important', 'height': '100%' }}
                />
            </div>
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {item.name}
                </Typography>
            </CardContent>
            <CardActions style={{'textAlign':'center', 'width':'100%'}}>
                <button className='updateBtn' onClick={() => onUpdateCartQty(item.id, item.quantity - 1)}>-</button>
                <h6 className='qty'>{item.quantity}</h6>
                <button className='updateBtn' onClick={() => onUpdateCartQty(item.id, item.quantity + 1)}>+</button>
                <Delete onClick={() => onRemoveFromCart(item.id)} className='delete-item' />
            </CardActions>
            <h6 style={{ 'float': 'right', 'textAlign': 'center', 'width':'100%' }}>{item.price.formatted_with_symbol}</h6>

        </Card>

    )
}

export default CartItem
