import React from 'react';
import { FadingCircle } from 'better-react-spinkit'

const Spinner = () => {
    return (
        <div style={{'display':'flex', 'alignItems':'center', 'justifyContent': 'center', 'flexDirection': 'column', 'padding':'3rem', 'marginTop': '4rem'}}>
            <i>Loading content</i>
        <FadingCircle size={100} color='black' />
        </div>
    );
}

export default Spinner;