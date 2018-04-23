import React, { Component } from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faPlusCircle } from '@fortawesome/fontawesome-free-solid';
import './album.css';

class Album extends Component {
  static getDerivedStateFromProps(nextProps, prevState) {
    const libAlbumNames = nextProps.library.map(albumObj => albumObj.album);
    const libAlbumArtists = nextProps.library.map(albumObj => albumObj.artist);
    return {
      disable: libAlbumArtists.includes(nextProps.albumObj.artist) && libAlbumNames.includes(nextProps.albumObj.album) ? true : false,
    };
  }

  constructor(props) {
      super(props);
      this.state = {
        disable: false,
      };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const libAlbumNames = this.props.library.map(albumObj => albumObj.album);
    const libAlbumArtists = this.props.library.map(albumObj => albumObj.artist);

    if(libAlbumArtists.includes(this.props.albumObj.artist) && libAlbumNames.includes(this.props.albumObj.album)) {
      this.setState({ disable: true });
    } else {
      this.props.addAlbum(this.props.albumObj);
      this.setState({ disable: true })
    }
  }
  
  render() {
    return (
      <div className="albumContainer">
        <figure className="albumContainer__figure">
          <img
            className="albumContainer__img"
            src={this.props.albumObj.albumCover}
            alt={`${this.props.name} - Album Cover`}
          />
        </figure>
        <ul className="albumDescription">
          <li
            className="albumContainer__li">
            {`Album: ${this.props.albumObj.album}`}
          </li>
          <li
            className="albumContainer__li">
            {`Artist: ${this.props.albumObj.artist}`}
          </li>
          <li
            className="albumContainer__li">
            {`Year: ${this.props.albumObj.year}`}
          </li>
        </ul>
          {this.props.searchFlag &&
            <FontAwesomeIcon
              className={`albumContainer__icon ${this.state.disable ? "albumContainer__icon--disabled" : "albumContainer__icon--enabled"}`}
              onClick={this.handleClick}
              icon={faPlusCircle}
            />
          }
      </div>
    );
  }
}

export default Album;