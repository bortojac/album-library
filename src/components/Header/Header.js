import React, { Component } from 'react';
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
        <p className="header__icon" onClick={this.handleClick}>Click Me</p>
      </div>
    );
  }
}

export default Header;