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
        console.log('Inside Searchresults render function: props.searchResults is of type array: ' + Array.isArray(tracklist))
        let stuff = 'test stuff'
        return (
            <div className="SearchResults">
                <h2>Results</h2>
                <TrackList 
                    onAdd={this.props.onAdd}
                    tracklist={tracklist} 
                    isRemoval={false} 
                    />
            </div>
        );
    }
}


SearchResults.propTypes = {
    searchResults: PropTypes.array
};


export default SearchResults;

{/* onAdd={handleAddTrack} */}