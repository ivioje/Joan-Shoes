import React from 'react'
import './style.css'
import {Link} from 'react-router-dom'

const Carousel = () => {
    return (
        <>
            <div className="carousel_container">
                <div className="outer">
                    <div className="details">
                        <h1>Find your perfect size and choice</h1>
                        <h5>A range of shoe products for you</h5>
                        <button><Link className='shop_now' to='/shop'>Shop now</Link></button>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Carousel
