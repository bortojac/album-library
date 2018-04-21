import React, { Component } from 'react';
import AlbumList from '../AlbumList/AlbumList';
import './library.css';

class Library extends Component {
  render() {
    return (
      <div>
        <AlbumList />
      </div>
    );
  }
}

export default Library;