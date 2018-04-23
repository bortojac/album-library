import React, { Component } from 'react';
import _ from 'lodash';
import Album from '../Album/Album';
import './albumList.css';

class AlbumList extends Component {
  constructor(props) {
    super(props);
    this.handleAddClick = this.handleAddClick.bind(this);
  }

  handleAddClick(albumObj) {
      this.props.addAlbum(albumObj); //dispatch addAlbum action
    }

  render() {
    let albumList = _.get(this.props, 'albumList', []);
    let library = _.get(this.props, 'libraryAlbumList', []).slice(0, this.props.load);
    return (
      <div className={`albumListContainer ${this.props.searchFlag ? "albumListContainer--searchResults" : ""}`} >
        {
          _.map(this.props.searchFlag ? albumList : library,
            (obj, index) => {
              return <Album
                searchFlag={this.props.searchFlag}
                albumObj={obj}
                addAlbum={this.handleAddClick}
                library={library}
                key={`${obj.album}-${this.props.index}`}
              />;
            }
          )
        }
      </div>
    );
  }
}

export default AlbumList;