import React from 'react';
import './style.css';

const Xplore = () => {
    return (
        <div className='xplore'>
            <div className='content'>
                <h1>A new shopping <br /> experience</h1>
                <p className='link-shop' style={{paddingTop: '1rem'}}> <a href='/shop'>Explore products
                    &#10142;</a></p>
            </div>
            <div className='media'>
                <img src='https://images.unsplash.com/photo-1588825463535-49290d62cef5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=371&q=80' alt='' />
            </div>
        </div>
    )
}

export default Xplore
