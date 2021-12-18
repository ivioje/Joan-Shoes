import React from 'react';
import Social from '../../pages/home/social/Social';
import './styles.css';

const Footer = () => {
    return (
        <>
            <Social />

            <footer>
                <section class="ft-main">
                    <div class="ft-main-item">
                        <h2 class="ft-title">Joan Shoes</h2>
                        <p>A one-stop unisex shopping <br /> website.</p>
                    </div>
                    <div class="ft-main-item">
                        <h2 class="ft-title">Links</h2>
                        <ul>
                            <li><a href="#">About</a></li>
                            <li><a href="#">Shop</a></li>
                            <li><a href="#">Bulk Order</a></li>
                        </ul>
                    </div>
                    <div class="ft-main-item">
                        <h2 class="ft-title">Follow Us</h2>
                        <ul>
                            <li><a href="#">Facebook</a></li>
                            <li><a href="#">Twitter</a></li>
                            <li><a href="#">Instagram</a></li>
                        </ul>
                    </div>
                    <div class="ft-main-item">
                        <h2 class="ft-title">Stay Updated</h2>
                        <p>Get early updates on new arrivals!</p>
                        <form>
                            <input type="email" name="email" placeholder="Enter email address" />
                            <input type="submit" value="Subscribe" />
                        </form>
                    </div>
                </section>

                <section class="ft-legal">
                    <ul class="ft-legal-list">
                        <li>&copy; 2021 Joan Shoes</li>
                    </ul>
                </section>
            </footer>
        </>
    )
}

export default Footer
