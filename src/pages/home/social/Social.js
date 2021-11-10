import React from 'react';
import './social.style.css';

const Social = () => {
    return (
        <div className='social'>
            <div className='content'>
                <h3>Follow us on Instagram <br /> for more updates</h3>
                <p className='link-shop' style={{ paddingTop: '1rem' }}> <a href='/shop'>Follow us
                    &#10142;</a></p>
            </div>

            <div className='row'>
                <div className='column'>
                    <img src='https://images.unsplash.com/photo-1494955464529-790512c65305?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=871&q=80' alt='instagram' />
                    <img src='https://images.unsplash.com/photo-1515347619252-60a4bf4fff4f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=885&q=80' alt='instagram' />
                    <img src='https://images.unsplash.com/photo-1494955464529-790512c65305?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=871&q=80' alt='instagram' />
                </div>
                <div className='column'>
                    <img src='https://images.unsplash.com/photo-1535709718101-fc0f03ce7ffa?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80' alt='instagram' />
                    <img src='https://images.unsplash.com/photo-1449505278894-297fdb3edbc1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80' alt='instagram' />
                    
                    
                </div>
                <div className='column'>
                    <img src='https://images.unsplash.com/photo-1535709718101-fc0f03ce7ffa?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80' alt='instagram' />
                    <img src='https://images.unsplash.com/photo-1444920275954-9dddec6b714e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80' alt='instagram' />
                    
                </div>
            </div>
        </div>
        
    )
}

export default Social
