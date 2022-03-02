import React from 'react'

const Search = ({ searchChange }) => {
 

    return (
        <div className="search-wrapper">
            <input
                type='search'
                placeholder='search our collection'
                onChange={searchChange}
            />
        </div>
    )
}

export default Search
