import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TrackList from '../TrackList/trackList';
import './playlist.css';


class Playlist extends React.Component {
    constructor(props) {
        super(props);
        this.handleNameChange = this.handleNameChange.bind(this)
    }
    
    handleNameChange(e) {
        let name = e.target.value
        this.props.onNameChange(name)
    }

    render() {
        let {onRemove, playlistTracks} = this.props
        
        return (
            <div className="Playlist">
                <input 
                    defaultValue="New Playlist"
                    onChange={this.handleNameChange}/>
                <TrackList 
                    tracklist={playlistTracks}
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


