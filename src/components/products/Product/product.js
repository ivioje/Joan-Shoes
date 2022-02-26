import React from 'react';
import { AddShoppingCart } from '@material-ui/icons';
import './product.styles.css';

const Product = ({ product, onAddToCart }) => {
    return (

        <div className="product-card">
            <div className="product-tumb">
                <img src={product.image.url} alt={product.name} />
            </div>
            <div className="product-details">
                {product.categories.map((category, id) => <span className='product-category' key={category.id}>{category.name}</span>)}
                <h4><a href="/shop"> {product.name}</a></h4>
                <p dangerouslySetInnerHTML={{ __html: product.description }} />
                <div className="product-bottom-details">
                    <div className="product-price">{product.price.formatted_with_symbol}</div>
                    <div className="product-links">
                        <AddShoppingCart title='Add to cart' style={{ cursor: 'pointer' }} onClick={() => onAddToCart(product.id, 1)} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Product;