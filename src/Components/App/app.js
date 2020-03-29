import React from 'react';
import ReactDOM from 'react-dom';
import './app.css';
import SearchBar from '../SearchBar/searchBar';
import SearchResults from '../SearchResults/searchResults';
import Playlist from '../Playlist/playlist';
import { isReturnStatement } from '@babel/types';

export default class App extends React.Component {
    constructor(props) {
        super(props);
    
        this.state = {
            "searchResults": [ 
                {
                    "id":"1",
                    "name":"test name 1",
                    "artist":"test artist 1",
                    "album":"test album 1",
                    "uri": "test uri 1"
                 },
                 {
                    "id":"2",
                    "name":"test name 2",
                    "artist":"test artist 2",
                    "album":"test album 2",
                    "uri": "test uri 2"
                 },
                {
                   "id":"3",
                   "name":"test name 3",
                   "artist":"test artist 3",
                   "album":"test album 3",
                   "uri": "test uri 3"
                }
            ],
            "playlistName": 'test playlist name',
            "playlistTracks": [
                {
                   "id":"1",
                   "name":"test name 1",
                   "artist":"test artist 1",
                   "album":"test album 1",
                   "uri": "test uri 1"
                },
                {
                   "id":"2",
                   "name":"test name 2",
                   "artist":"test artist 2",
                   "album":"test album 2",
                   "uri": "test uri 2"
                }
             ]
        }
        this.addTrack = this.addTrack.bind(this)
        this.removeTrack = this.removeTrack.bind(this)
        this.updatePlaylistName = this.updatePlaylistName.bind(this)
        this.savePlaylist = this.savePlaylist.bind(this)
        this.search = this.search.bind(this)
    }

    addTrack(track) {
        if(this.state.playlistTracks.every(playlistTrack => 
            playlistTrack.id != track.id )) {
                let playlist = this.state.playlistTracks;
                playlist.push(track);
            
                this.setState({
                    playlistTracks: playlist
                }) 
        } 
        return
    }

    removeTrack(track) {
        let playlist = this.state.playlistTracks
        let newPlaylist = playlist.filter(playlistTrack => (
            playlistTrack.id != track.id
        ))
        this.setState({
            playlistTracks: newPlaylist
        })

    }

    updatePlaylistName(name) {
        console.log('updatePlaylistName gets successfully called')
        let newPlaylistName = name
        this.setState({
            playlistName: newPlaylistName
        })
    }

    savePlaylist() {
        let trackURIs = this.state.playlistTracks.map(playlistTrack => playlistTrack.uri)

        return trackURIs
    }

    search(term) {
        console.log('Searchterm: ' + term)
    }
    
    render() {
        let { searchResults, playlistName, playlistTracks } = this.state

        return(
            <div>
                <h1>Ja<span className="highlight">mmm</span>ing</h1>
                <div className="App">
                    <SearchBar 
                        onSearch={this.search}/>
                    <div className="App-playlist">
                        <SearchResults 
                            searchResults={searchResults}
                            onAdd={this.addTrack} />
                        <Playlist 
                            playlistName={playlistName} 
                            playlistTracks={playlistTracks}
                            onRemove={this.removeTrack}
                            onNameChange={this.updatePlaylistName}
                            onSave={this.savePlaylist} />
                    </div>
                </div>
            </div>
        )
    }
}

// might remove this later on. Currently app.js gets rendered in index.js
//ReactDOM.render(<App />, document.getElementById('root'))

/* if(this.state.playlistTracks.every(playlistTrack => 
            playlistTrack.id === track.id )) {
                let newPlaylist = this.state.playlistTracks.push(track)
                this.setState({
                    playlistTracks: newPlaylist
                })
        }
        
             */
