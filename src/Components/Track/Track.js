import React, { Component } from 'react';
import './Track.css'
class Track extends React.Component {
  constructor () {
    super(props)
    this.addTrack().bind
  }
  render() {
    return (
    <div className="Track">
      <div className="Track-information">
        <h3>{this.props.track.name}</h3>
        <p>{this.props.track.artist} | {this.props.track.album}</p>
      </div>
      <a className="Track-action"> {this.renderAction()}</a>
    </div>
  )}
  addTrack() {
    playlist.push(this.props.track)
  }
  removeTrack() {
    playlist.pop(this.props.track)
  }
  renderAction() {
    if (this.props.isRemoval === true) {
      return <a className= "Track-action"> - </a>
    } else {
      return <a className= "Track-action" onClick={this.addTrack}> + </a>
    }
  }

};



export default Track;
