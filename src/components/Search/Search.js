import React, { Component } from 'react';
import AlbumList from '../AlbumList';
import './search.css';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchInput: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(e) {
    this.setState({ searchInput: e.target.value });
  }

  // we want enter to trigger search
  handleKeyDown(event) {
    if (event.keyCode === 13 && this.state.searchInput) {
      this.handleSearch();
    }
  }

  handleSearch() {
    if (this.state.searchInput) {
      this.props.fetchSearchResults(this.state.searchInput);
    }
    else {
      return;
    }
  }

  handleClick() {
    this.props.toggleSearch();
  }

  render() {
    return (
      <section
        className={`searchContainer ${this.props.active ? 'searchContainer--active' : 'searchContainer--closed'}`}>
        <input
          className="searchContainer__input"
          placeholder="Search for an Artist or Album"
          onChange={this.handleChange}
          onKeyDown={this.handleKeyDown}
        />
        <AlbumList searchFlag />
        <button className="searchContainer__button" type="button" onClick={this.handleClick}>done</button>
      </section>
    );
  }
}

export default Search;