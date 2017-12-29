import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import SearchResults from '../SearchResults/SearchResults'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      searchResults: []
      playlistName: ''
      playlistTracks: [
        {
         name: 'name',
         artist: 'artist',
         album: 'album'
       }
        ]
    }
  }


  render() {
    return (
      <div>
  <h1>Ja<span className="highlight">mmm</span>ing</h1>
  <div className="App">

    <div className="App-playlist">
      <SearchBar searchResults = {this.state.searchResults} />
      <Playlist playlistName = {this.state.playlistName}
      playlistTracks = {this.state.playlistTracks} />

    </div>
  </div>
</div>
    );
  }
}

export default App;
