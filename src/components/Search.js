import React, { useState } from 'react'

const Search = ({search}) => {
    const [searchValue, setSearchValue] = useState('');

    const inputChange = e => {
        setSearchValue(e.target.value)
    }

    const resetInput = () => setSearchValue('');

    const submitInput = e => {
        e.preventDefault();
        search(searchValue);
        resetInput();
    }
    return (
        <form className="search">
            <input 
                type="text"
                value={searchValue}
                onChange={e => inputChange(e)}
            />
            <input 
                type="submit"
                value="Search!"
                onClick={e => submitInput(e)}
            />
        </form>
    )
}

export default Search
