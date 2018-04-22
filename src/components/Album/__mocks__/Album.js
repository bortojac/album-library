// This code would live in ./__mocks__/ComponentToMock.js
import React from 'react';
const Album = ({ albumObj, key, searchFlag }) => {
  return (
    <div className="albumContainer">
      <figure className="albumContainer__figure">
        <img
          className="albumContainer__img"
          src={albumObj.albumCover}
          alt={`${name} - Album Cover`}
        />
      </figure>
      <ul className="albumDescription">
        <li
          className="albumContainer__li">
          {`Album: ${albumObj.album}`}
        </li>
        <li
          className="albumContainer__li">
          {`Artist: ${albumObj.artist}`}
        </li>
        <li
          className="albumContainer__li">
          {`Year: ${albumObj.year}`}
        </li>
      </ul>
      {searchFlag &&
        <FontAwesomeIcon className="albumContainer__icon" icon={faPlusCircle} size="2x" />
      }
    </div>
  );
};

export default Album;