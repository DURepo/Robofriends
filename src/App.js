import React from 'react'
import CardList from './CardList';
import 'tachyons';
import {robots} from './robots'
import SearchBox from './SearchBox'

const App = () => {
    return (
        <div>
            <SearchBox/>
            <CardList robots={robots} />
        </div>
    )
}

export default App