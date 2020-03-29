import React, { Component } from 'react';
import PropTypes from 'prop-types';


class Track extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
        this.renderAction = this.renderAction.bind(this);
        this.addTrack = this.addTrack.bind(this);
        this.removeTrack = this.removeTrack.bind(this);
    }

    addTrack() {
        this.props.onAdd(this.props.track)
    }

    removeTrack() {
        this.props.onRemove(this.props.track)
    }
    
    renderAction(isRemoval) {
        if(isRemoval) {
            return '-'
        } else {
            return '+'
        }
    }

    render() {
        return (
            <div className="Track">
                <div className="Track-information">
                    <h3>{this.props.trackName}</h3>
                    <p>{this.props.trackArtist} | {this.props.trackAlbum}</p>
                </div>
                <button 
                    className="Track-action"
                    onClick={this.props.isRemoval ? this.removeTrack : this.addTrack}
                    >
                        {this.renderAction(this.props.isRemoval)}
                    </button>
            </div>
        );
    }
}


Track.propTypes = {
    trackName: PropTypes.string,
    trackArtist: PropTypes.string,
    trackAlbum: PropTypes.string,
    isRemoval: PropTypes.bool
};


export default Track;

