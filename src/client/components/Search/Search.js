import React from 'react';
import './Search.css';

export default class Search extends React.Component {
    render() {
        return (
            <div className="search-container">
                <form class="searchbar">
                    <input type="search" placeholder="Search your image here" />
                    <button type="button">Search</button>
                </form>
            </div>
        )
    }
}