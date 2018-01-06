import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import SearchResults from '../SearchResults/SearchResults'
import Playlist from '../Playlist/Playlist'
import SearchBar from '../SearchBar/SearchBar'

class App extends Component {
  constructor(props) {
    super(props)
    this.removeTrack = this.removeTrack.bind(this)
    this.addTrack = this.addTrack.bind(this);
    this.state = {
      searchResults: [],
      playlistName: '',
      playlistTracks: [
        {
         name: 'name',
         artist: 'artist',
         album: 'album'
       }
        ]
    }

    }

        /*old decrepit sad non-functioning method
    addTrack(track) {
  let currentTrack = track.id
  let trackExists = this.state.Playlist.some(currentTrack => currentTrack.id === track.id);
    if ( !trackExists ) {
      Playlist.push(currentTrack)
    }
    */

//Shiny new method
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
    tracks.filter(song => song !== track.id);
    this.setState({playlistTracks: tracks});
    this.removeTrack.bind
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
      <SearchResults searchResults={this.state.searchResults} onAdd={this.addTrack} onRemove={this.removeTrack}/>
    </div>
  </div>
</div>
    )


}
};
export default App;
