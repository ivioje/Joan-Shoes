import React from 'react'
import './search.styles.css'

const Search = ({ searchChange }) => {


    return (
        <div className="search-wrapper">
            <label htmlFor='search'>
               <h6 className='title'> Search our collection</h6>
                <input
                    type='search'
                    placeholder='e.g. sneakers, loafers'
                    onChange={searchChange}
                />
            </label>
        </div>
    )
}

export default Search
