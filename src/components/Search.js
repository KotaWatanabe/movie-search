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
        console.log('hit search')
        resetInput();
    }
    return (
        <div className="search">
            <form>
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
        </div>
    )
}

export default Search
