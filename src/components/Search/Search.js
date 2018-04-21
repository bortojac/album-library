import React, { Component } from 'react';
import AlbumList from '../AlbumList/AlbumList';
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
      console.log('worked');
        this.props.fetchSearchResults(this.state.searchInput);
    }
    else {
        return;
    }
}

  render() {
    return (
      <section
        className={`searchContainer ${this.props.searchOpen ? 'searchContainer--searchOpen' : 'searchContainer--searchClosed'}`}>
        <input
          className="searchContainer__input"
          placeholder="Search for an Artist or Album"
          onChange={this.handleChange}
          onKeyDown={this.handleKeyDown}
        />
        <AlbumList searchFlag/>
        <button className="searchContainer__button" type="button">done</button>
      </section>
    );
  }
}

export default Search;