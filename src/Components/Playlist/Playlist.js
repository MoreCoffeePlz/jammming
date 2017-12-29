import React, { Component } from 'react';
import TrackList from "./TrackList/TrackList"
import Playlist.css from "./Playlist/Playlist"

class Playlist extends React.Component {
  render() {
    <div className="Playlist">
  <input defaultValue={'New Playlist'}/>
  {TrackList tracks = this.props.playlistTracks}
  <a className="Playlist-save">SAVE TO SPOTIFY</a>
</div>
  }
};
export default Playlist;
