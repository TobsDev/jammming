import React from 'react';
import ReactDOM from 'react-dom';
import './app.css';
import SearchBar from '../SearchBar/searchBar';
import SearchResults from '../SearchResults/searchResults';
import Playlist from '../Playlist/playlist';

export default class App extends React.Component {
    constructor(props) {
        super(props);
    
        this.state = {
            searchResults: [ 
                {
                    id: '1',
                    name: 'test name 1',
                    artist: 'test artist 1',
                    album: 'test album 1'
                },
                {
                    id: '2',
                    name: 'test name 2',
                    artist: 'test artist 2',
                    album: 'test album 2'
                }
            ],
            playlistName: 'test playlist name',
            playlistTracks: [
                {
                    id: '1',
                    name: 'test name 1',
                    artist: 'test artist 1',
                    album: 'test album 1'
                },
                {
                    id: '2',
                    name: 'test name 2',
                    artist: 'test artist 2',
                    album: 'test album 2'
                }
            ]
        }
    }
    
    render() {
        return(
            <div>
                <h1>Ja<span className="highlight">mmm</span>ing</h1>
                <div className="App">
                    <SearchBar />
                    <div className="App-playlist">
                        <SearchResults searchResults={this.state.searchResults}/>
                        <Playlist playlistName={this.state.playlistName} playlistTracks={this.state.playlistTracks}/>
                    </div>
                </div>
            </div>
        )
    }
}

// might remove this later on. Currently app.js gets rendered in index.js
//ReactDOM.render(<App />, document.getElementById('root'))
