import React, { useState, useEffect } from 'react';
import { commerce } from './lib/commerce';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Cart from './pages/Cart/Cart.js';
import Products from './components/products/products.js';
import Checkout from './pages/checkoutForm/checkout/Checkout.js';
import Home from './pages/home/Home.js';
import NavMenu from './components/navbar/Navbar.js';
import Footer from './components/footer/Footer';

const App = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState({});
    const [checkout, setCheckout] = useState(false);
    
    //fetch all the products from the commerce.js api
    const fetchProducts = async () => {
        const { data } = await commerce.products.list();
        
        setProducts(data);
    };
    
    const fetchCart = async () => {
        setCart(await commerce.cart.retrieve());
    }
    
    const handleAddToCart = async (productId, quantity) => {
        const item = await commerce.cart.add(productId, quantity);
        
        setCart(item.cart);
    };
    
    const handleUpdateCartQty = async (lineItemId, quantity) => {
        const response = await commerce.cart.update(lineItemId, { quantity });
        
        setCart(response.cart);
    };
    
    const handleRemoveFromCart = async (lineItemId) => {
        const response = await commerce.cart.remove(lineItemId);
        
        setCart(response.cart);
    };
    
    const handleEmptyCart = async () => {
        const response = await commerce.cart.empty();
        
        setCart(response.cart);
    };
    
    useEffect(() => {
        fetchProducts();
        fetchCart();
    }, []);
    

    return (
        <>
            <Router>
                <NavMenu totalItems={cart.total_items} />
                <Switch>
                    <Route exact path='/' >
                        <Home products={products} />

                    </Route>
                    <Route exact path='/shop' >
                        <Products products={products} onAddToCart={handleAddToCart} setProducts={setProducts} />
                    </Route>
                    <Route exact path='/cart'>
                        <Cart
                            cart={cart}
                            handleUpdateCartQty={handleUpdateCartQty}
                            handleRemoveFromCart={handleRemoveFromCart}
                            handleEmptyCart={handleEmptyCart}
                            totalItems={cart.total_items}
                            setCheckout={setCheckout}
                        />
                    </Route>
                    <Route exact path='/checkout' >
                        <Checkout cart={cart} />
                    </Route>
                </Switch>
                <Footer />
            </Router>
        </>
    );
}

export default App;