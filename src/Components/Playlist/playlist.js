import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TrackList from '../TrackList/trackList';
import './playlist.css';


class Playlist extends React.Component {
    render() {
        console.log('Inside Playlist render function: props.searchResults is of type array: ' + Array.isArray(this.props.playlistTracks))
        return (
            <div className="Playlist">
                <input 
                    defaultValue="New Playlist"/>
                <TrackList 
                    tracklist={this.props.playlistTracks}/>
                <button 
                    className="Playlist-save">SAVE TO SPOTIFY</button>
            </div>
        );
    }
}


Playlist.propTypes = {

};


export default Playlist;


