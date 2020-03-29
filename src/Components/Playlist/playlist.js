import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TrackList from '../TrackList/trackList';
import './playlist.css';


class Playlist extends React.Component {
    render() {
        let tracklist = this.props.playlistTracks
        let {onRemove} = this.props
        
        return (
            <div className="Playlist">
                <input 
                    defaultValue="New Playlist"/>
                <TrackList 
                    tracklist={tracklist}
                    isRemoval={true} 
                    onRemove={onRemove}/>
                <button 
                    className="Playlist-save">SAVE TO SPOTIFY</button>
            </div>
        );
    }
}


Playlist.propTypes = {

};


export default Playlist;


