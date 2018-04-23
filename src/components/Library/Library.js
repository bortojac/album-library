import React, { Component } from 'react';
import AlbumList from '../AlbumList';
import './library.css';

class Library extends Component {
  constructor(props) {
    super(props);
    this.state = {
      load: 3,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState((prevState) => ({
      load: prevState.load + 3
    }));
  }

  render() {
    return (
      <div className="library">
        <h1 className="library__h1">The Top Shelf</h1>
          <AlbumList searchFlag={false} load={this.state.load} />
        <button
          className="library__button"
          type="button"
          onClick={this.handleClick}>
            Load more
          </button>
      </div>
    );
  }
}

export default Library;