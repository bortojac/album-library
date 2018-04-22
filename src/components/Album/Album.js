import React, { Component } from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faPlusCircle } from '@fortawesome/fontawesome-free-solid';
import './album.css';

class Album extends Component {
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
            <FontAwesomeIcon className="albumContainer__icon" icon={faPlusCircle} size="2x"/>
          }
      </div>
    );
  }
}

export default Album;