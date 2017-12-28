import React, { Component } from 'react';
import Track.css from './Track/Track'
class Track extends React.Component {
  render() {
    <div className="Track">
      <div className="Track-information">
        <h3>{this.props.track.name}</h3>
        <p>{this.props.track.artist} | {this.props.track.album}</p>
      </div>
      <a className="Track-action"><!-- + or - will go here --></a>
    </div>
  }
};
class Track-action extends React.Component {
  renderAction() {
    if (isRemoval === true) {
      return -
    } else {
      return +
    }
  }
}
export default Track;
