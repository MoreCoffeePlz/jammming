import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import SearchResults from '../SearchResults/SearchResults'
import Playlist from '../Playlist/Playlist'
import SearchBar from '../SearchBar/SearchBar'
import Spotify from '../../util/Spotify'

class App extends Component {
  constructor(props) {
    super(props)
    this.removeTrack = this.removeTrack.bind(this)
    this.addTrack = this.addTrack.bind(this);
    this.updatePlaylistName = this.updatePlaylistName.bind(this);
    this.search = this.search.bind(this);
    this.savePlaylist = this.savePlaylist.bind(this);

    this.state = {
      searchResults: [],
      playlistName: '',
      playlistTracks: []
    }
  }


  addTrack(track) {
    let tracks = this.state.playlistTracks;
    let trackExists = this.state.playlistTracks.some(currentTrack => currentTrack.id === track.id);
    if ( !trackExists ) {
      tracks.push(track);
      this.setState({playlistTracks: tracks});
    }
    this.addTrack.bind
  }


  removeTrack(track) {
    let tracks = this.state.playlistTracks;
    let filteredTracks = tracks.filter(song => song.id !== track.id);
    this.setState({playlistTracks: filteredTracks});
    this.removeTrack.bind
  }


  updatePlaylistName(name) {
    this.setState({playlistName: name})
    this.updatePlaylistName.bind
  }

  savePlaylist() {
    let trackURIs = []
    for (let i = 0; i < this.state.playlistTracks.length; i++) {
      var container = this.state.playlistTracks[i]
      trackURIs.push(container.uri)
    }
    Spotify.getAccessToken()
    Spotify.savePlaylist(this.state.playlistName, trackURIs)
    this.setState({playlistName: 'New Playlist', searchResults: []})
    this.savePlaylist.bind

  }


  search(searchTerm) {
    let trackListPromise = Spotify.search(searchTerm)
    trackListPromise.then(output => {
      this.setState({searchResults: output})
    });
    //console.log(trackList)
    //this.setState({searchResults: trackList})

  }


  render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          <div className="App-playlist">
            <SearchBar searchResults = {this.state.searchResults} onSearch={this.search}/>
            <Playlist playlistName = {this.state.playlistName}
              playlistTracks = {this.state.playlistTracks} onAdd={this.addTrack} onRemove={this.removeTrack} onNameChange={this.updatePlaylistName} onSave={this.savePlaylist} isRemoval={true}/>
            <SearchResults searchResults={this.state.searchResults} onAdd={this.addTrack} onRemove={this.removeTrack}/>
          </div>
        </div>
      </div>
    )
  }
};
export default App;
