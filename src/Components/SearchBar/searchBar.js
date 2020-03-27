import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './searchBar.css';


class SearchBar extends Component {
    render() {
        return (
            <div className="SearchBar">
                <input placeholder="Enter A Song, Album, or Artist" />
                <button className="SearchButton">SEARCH</button>
            </div>
        );
    }
}


SearchBar.propTypes = {

};


export default SearchBar;