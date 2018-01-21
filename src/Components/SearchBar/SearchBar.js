import React, { Component } from 'react';
import './SearchBar.css'

class SearchBar extends React.Component {
  constructor(props) {
    super(props)
    this.search = this.search.bind(this)
    this.state = {
      term: ''
    }
  }

  search() {
    this.state.onSearch = this.props.onSearch
  }

  handleTermChange(event) {
    this.setState({term: event.target.value})
    this.handleTermChange.bind
    console.log(event.target)
  }


  render() {
    return (
    <div className="SearchBar">
  <input placeholder="Enter A Song, Album, or Artist" />
  <a>SEARCH</a>
</div>
)}
};
export default SearchBar;
