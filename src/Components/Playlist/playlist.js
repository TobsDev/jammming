import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TrackList from '../TrackList/trackList';
import './playlist.css';


class Playlist extends React.Component {
    render() {
        return (
            <div className="Playlist">
                <input defaultValue="New Playlist"/>
                <TrackList tracklist={this.props.playlistTracks}/>
                <button className="Playlist-save">SAVE TO SPOTIFY</button>
            </div>
        );
    }
}


Playlist.propTypes = {

};


export default Playlist;


