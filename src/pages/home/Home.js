import React from 'react';
import './style.css';
import Carousel from './carousel/Carousel.js'

const Home = () => {
    return (
        <>
            <Carousel />
            <div className='quote_content'>
                <p className='quote'>There are two things you can never have too many of: <br /> <span>Good friends</span> and <span>Good shoes</span>.</p>
                <p className='link'> <a href='/about'>Find out more
                    &#10142;</a></p>
            </div>
            <div className='categories'>
                <h1>Categories</h1>

            </div>
        </>
    )
}

export default Home
