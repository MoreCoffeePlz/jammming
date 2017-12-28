import React, { Component } from 'react';
import Track.css from './Track/Track'
class Track extends React.Component {
  render() {
    <div className="Track">
      <div className="Track-information">
        <h3><!-- track name will go here --></h3>
        <p><!-- track artist will go here--> | <!-- track album will go here --></p>
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
