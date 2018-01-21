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
<<<<<<< HEAD
    this.updatePlaylistName = this.updatePlaylistName.bind(this);
    this.search = this.search.bind(this);
=======
>>>>>>> ead0ce45f311b2da8a259caae17b52692c3111ba
    this.state = {
      searchResults: [],
      playlistName: '',
      playlistTracks: [
        {
<<<<<<< HEAD
         name: 'name1',
         artist: 'artist1',
         album: 'album1',
         uri: 'uri1'
       },
       {
        name: 'name2',
        artist: 'artist2',
        album: 'album2',
        uri: 'uri2'
      }
=======
         name: 'name',
         artist: 'artist',
         album: 'album'
       }
>>>>>>> ead0ce45f311b2da8a259caae17b52692c3111ba
        ]
    }

    }

<<<<<<< HEAD
=======
        /*old decrepit sad non-functioning method
    addTrack(track) {
  let currentTrack = track.id
  let trackExists = this.state.Playlist.some(currentTrack => currentTrack.id === track.id);
    if ( !trackExists ) {
      Playlist.push(currentTrack)
    }
    */

//Shiny new method
>>>>>>> ead0ce45f311b2da8a259caae17b52692c3111ba
  addTrack(track) {
    let tracks = this.state.playlistTracks;
    let trackExists = this.state.playlistTracks.some(currentTrack => currentTrack.id === track.id);
    if ( !trackExists ) {
      tracks.push(track);
      this.setState({playlistTracks: tracks});
    }
<<<<<<< HEAD
    this.addTrack.bind
  }
=======
this.addTrack.bind
}
>>>>>>> ead0ce45f311b2da8a259caae17b52692c3111ba

  removeTrack(track) {
    let tracks = this.state.playlistTracks;
    tracks.filter(song => song !== track.id);
    this.setState({playlistTracks: tracks});
    this.removeTrack.bind
  }

<<<<<<< HEAD
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
    this.savePlaylist.bind
  }

  search(searchTerm) {
    console.log(searchTerm)
  }



=======
>>>>>>> ead0ce45f311b2da8a259caae17b52692c3111ba


  render() {
    return (
      <div>
  <h1>Ja<span className="highlight">mmm</span>ing</h1>
  <div className="App">

    <div className="App-playlist">
<<<<<<< HEAD
      <SearchBar searchResults = {this.state.searchResults} onSearch={this.search}/>
      <Playlist playlistName = {this.state.playlistName}
      playlistTracks = {this.state.playlistTracks} onNameChange={this.updatePlaylistName} onSave={this.savePlaylist}/>
=======
      <SearchBar searchResults = {this.state.searchResults} />
      <Playlist playlistName = {this.state.playlistName}
      playlistTracks = {this.state.playlistTracks} />
>>>>>>> ead0ce45f311b2da8a259caae17b52692c3111ba
      <SearchResults searchResults={this.state.searchResults} onAdd={this.addTrack} onRemove={this.removeTrack}/>
    </div>
  </div>
</div>
    )


}
};
export default App;
