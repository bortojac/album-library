import React, { Component } from 'react';
import Album from '../Album/Album';
import './albumList.css';

class AlbumList extends Component {
  render() {
    return (
      <div className={this.props.searchFlag ? "albumListContainer--searchResults" : "albumListContainer--library"}>
        <Album searchFlag={this.props.searchFlag}/>
      </div>
    );
  }
}

export default AlbumList;