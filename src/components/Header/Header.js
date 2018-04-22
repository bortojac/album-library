import React, { Component } from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faPlusCircle } from '@fortawesome/fontawesome-free-solid';
import './header.css';

class Header extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.openSearch();
  }

  render() {
    return (
      <div className="header">
        <h1 className="header__h1">Album Library</h1>
        <FontAwesomeIcon
          className="header__icon"
          onClick={this.handleClick}
          icon={faPlusCircle}
          size="2x"
        />
      </div>
    );
  }
}

export default Header;