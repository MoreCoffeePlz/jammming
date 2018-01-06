import React, { Component } from 'react';
import './Track.css'
class Track extends React.Component {
  constructor (props) {
    super(props)
    this.removeTrack = this.removeTrack.bind(this)
    this.addTrack = this.addTrack.bind(this)
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
    <Playlist trackList={this.props.track} />
  }
  removeTrack() {
    <Playlist trackList={this.props.track} />
  }
  renderAction() {
    if (this.props.isRemoval === true) {
      return <a className= "Track-action" onClick={this.removeTrack}> - </a>
    } else {
      return <a className= "Track-action" onClick={this.addTrack}> + </a>
    }
  }

};
/*something I may need later
addTrack(event) {
    this.props.onAdd(this.props.track);
  }
  removeTrack(event) {
    this.props.onRemove(this.props.track);
  }
*/
export default Track;
