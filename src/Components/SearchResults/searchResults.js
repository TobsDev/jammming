import React from 'react';
import PropTypes from 'prop-types';
import './searchResults.css';
import TrackList from '../TrackList/trackList';

class SearchResults extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let tracklist = this.props.searchResults;
        return (
            <div className="SearchResults">
                <h2>Results</h2>
                <TrackList tracklist={tracklist}/>
            </div>
        );
    }
}


SearchResults.propTypes = {
    searchResults: PropTypes.array
};


export default SearchResults;

