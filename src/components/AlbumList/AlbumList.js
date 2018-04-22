import React, { Component } from 'react';
import _ from 'lodash';
import Album from '../Album/Album';
import './albumList.css';

class AlbumList extends Component {
  render() {
    return (
      <div className={this.props.searchFlag ? "albumListContainer--searchResults" : "albumListContainer--library"}>
        {_.map(_.get(this.props,'albumList', []),
            (obj,index) => {
              return <Album
                searchFlag={this.props.searchFlag}
                albumObj={obj}
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