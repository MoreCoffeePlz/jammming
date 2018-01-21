import React, { Component } from 'react';
import TrackList from "../TrackList/TrackList"
import "./Playlist.css"

class Playlist extends React.Component {
<<<<<<< HEAD
  constructor(props) {
    super(props)
    this.handleNameChange = this.handleNameChange.bind(this)
  }
  handleNameChange(event) {
    this.props.onNameChange(event.target.value)
    this.handleNameChange.bind
    console.log(event.target)
  }

  render() {
    return (
    <div className="Playlist">
  <input defaultValue={'New Playlist'} onChange={this.handleNameChange}/>
  <TrackList tracks={this.props.playlistTracks} onAdd={this.props.onAdd} onRemove={this.props.onRemove}/>
  <a className="Playlist-save" onClick={this.props.onSave}>SAVE TO SPOTIFY</a>
=======
  render() {
    return (
    <div className="Playlist">
  <input defaultValue={'New Playlist'}/>
  <TrackList tracks={this.props.playlistTracks} onAdd={this.props.onAdd} onRemove={this.props.onRemove}/>
  <a className="Playlist-save">SAVE TO SPOTIFY</a>
>>>>>>> ead0ce45f311b2da8a259caae17b52692c3111ba
</div>
)}
};
export default Playlist;
