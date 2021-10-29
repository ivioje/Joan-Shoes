import React from 'react';
import './styles.css';
import { Image } from 'react-bootstrap';

const Categories = () => {
    return (
        <div className='categories'>
        <h2>Categories</h2>

        <div className='cat_details'>
            <div>
                <Image src="https://images.unsplash.com/photo-1562136230-8fd38b945ef1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" fluid />
                <h4>Women's</h4>
            </div>
            <div>
                <Image src="https://images.unsplash.com/photo-1561720982-39a1f04e2854?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" fluid />
                <h4>Children's</h4>
            </div>
        </div>
    </div>
    )
}

export default Categories
