import React from 'react';
import './Search.css';

function Search(props) {

    /**
     * Functie pentru setarea termenului de cautare prin pasarea acestuia catre componenta App
     */
    const setSearchTerm = (event) => {
        props.setSearchTerm(event.currentTarget.value);
    }

    /**
     * Lansarea functiei de search din componenta App
     */
    const makeSearch = () => {;
        props.makeSearch();
    }

    /**
     * Prinderea tastei Enter si pentru acest caz, lansarea search-ului
     */
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