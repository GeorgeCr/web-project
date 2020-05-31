import React from 'react';
import './Search.css';

function Search(props) {

    const setSearchTerm = (event) => {
        props.setSearchTerm(event.currentTarget.value);
    }

    const makeSearch = () => {;
        props.makeSearch();
    }

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            props.makeSearch();
            event.preventDefault();
        }
    }

    return (
        <div className="search-container">
            <form className="search-form">
                <input className="search-input" onChange={setSearchTerm} onKeyPress={handleKeyPress} type="search" placeholder="Search your image here" />
                <button className="btn-search" onClick={makeSearch} type="button">Search</button>
            </form>
        </div>
    )
}

export default Search;