import React from 'react';
import './styles.css';
import { Image } from 'react-bootstrap';

const Categories = () => {
    return (
        <div className='categories'>
            <h2>Categories</h2>

            <div className='cat_details'>
                <div>
                    <Image src="https://images.unsplash.com/photo-1537261131936-3cdff36a1ac9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" fluid />
                    <h4>Men's</h4>
                </div>
                <div className='women'>
                    <Image src="https://images.unsplash.com/photo-1562136230-8fd38b945ef1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" fluid />
                    <h4>Women's</h4>
                </div>
                <div>
                    <Image src="https://images.unsplash.com/flagged/photo-1555895312-bbc472c964f3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80" fluid />
                    <h4>Children's</h4>
                </div>
            </div>
        </div>
    )
}

export default Categories
