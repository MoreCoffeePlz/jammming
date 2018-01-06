import React, { Component } from 'react';
import Track from '../Track/Track'
import './TrackList.css'
class TrackList extends React.Component {
  render() {
    return (
    <div className="TrackList">
    {this.props.tracks.map(track => {
      return  <Track track={track} key={track.id} Track onAdd={this.props.onAdd}/>
      name: this.props.track.name,
      artist: this.props.track.artist,
      album: this.props.track.album,
    })}

</div>
);
  }
};
export default TrackList;
