import React from 'react'

const SearchBox = ({searchField, searchChange}) =>{
    
    return(
        <input 
            type='search' 
            placeholder='Search Robot'
            onChange={searchChange}
        />
    )

}

export default SearchBox