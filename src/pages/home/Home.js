import React from 'react';
import './style.css';
import Carousel from './carousel/Carousel.js';
import Categories from './categories/Categories';
import Arrivals from './N-arrivals/Arrivals';
import Xplore from './xplore/Xplore';

const Home = ({ products }) => {
    return (
        <>
            <Carousel />
            <div className='quote_content'>
                <p className='quote'>There are two things you can never have too many of: <br /> <span>Good friends</span> and <span>Good shoes</span>.</p>
                <p className='link'> <a href='/about'>Find out more
                    &#10142;</a></p>
            </div>
            <Categories />
            <Arrivals products={products} />
            <Xplore />
        </>
    )
}

export default Home
