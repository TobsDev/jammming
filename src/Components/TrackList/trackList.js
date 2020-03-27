import React from 'react';
import PropTypes from 'prop-types';
import './trackList.css';
import Track from '../Track/track';


class TrackList extends React.Component {
    render() {
        let tracks = this.props.tracklist.map(track => {
            return (<Track 
                key={track.id}
                trackName={track.name}
                trackArtist={track.artist}
                trackAlbum={track.album} 
            />)
        })
        return (
            <div className="TrackList">
                {tracks}
            </div>
        );
    }
}


TrackList.propTypes = {

};


export default TrackList;