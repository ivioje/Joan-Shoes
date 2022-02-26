import React from 'react';
import Social from '../../pages/home/social/Social';
import './styles.css';

const Footer = () => {
    return (
        <>
            <Social />

            <footer>
                <section className="ft-main">
                    <div className="ft-main-item">
                        <h2 className="ft-title">Joan Shoes</h2>
                        <p>A one-stop unisex shopping <br /> website.</p>
                    </div>
                    <div className="ft-main-item">
                        <h2 className="ft-title">Links</h2>
                        <ul>
                            <li><a href="/about">About</a></li>
                            <li><a href="/shop">Shop</a></li>
                            <li><a href="/bulk-order">Bulk Order</a></li>
                        </ul>
                    </div>
                    <div className="ft-main-item">
                        <h2 className="ft-title">Follow Us</h2>
                        <ul>
                            <li><a href="/fb">Facebook</a></li>
                            <li><a href="/twi">Twitter</a></li>
                            <li><a href="/ig">Instagram</a></li>
                        </ul>
                    </div>
                    <div className="ft-main-item">
                        <h2 className="ft-title">Stay Updated</h2>
                        <p>Get early updates on new arrivals!</p>
                        <form>
                            <input type="email" name="email" placeholder="Enter email address" />
                            <input type="submit" value="Subscribe" />
                        </form>
                    </div>
                </section>

                <section className="ft-legal">
                    <ul className="ft-legal-list">
                        <li>&copy; 2021 Joan Shoes</li>
                    </ul>
                </section>
            </footer>
        </>
    )
}

export default Footer
