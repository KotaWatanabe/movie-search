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
        <div className="search">
            <form>
                <input 
                    className="search-input"
                    type="text"
                    value={searchValue}
                    onChange={e => inputChange(e)}
                />
                <input 
                    className="btn btn-primary search-button"
                    type="submit"
                    value="Search!"
                    onClick={e => submitInput(e)}
                />
            </form>
        </div>
    )
}

export default Search
