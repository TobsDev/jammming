import React from 'react';
import PropTypes from 'prop-types';
import './trackList.css';
import Track from '../Track/track';


class TrackList extends React.Component {
    render() {
        let {onAdd, onRemove, isRemoval } = this.props

        let tracks = this.props.tracklist.map(track => {
            return (<Track 
                track={track}
                key={track.id}
                trackName={track.name}
                trackArtist={track.artist}
                trackAlbum={track.album} 
                onAdd={onAdd}
                onRemove={onRemove}
                isRemoval={isRemoval}
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