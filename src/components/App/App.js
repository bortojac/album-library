import React, { Component } from 'react';
import Header from '../Header/Header';
import Search from '../Search';
import Library from '../Library/Library';
import './app.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchActive: false,
    };
    this.handleToggleSearch = this.handleToggleSearch.bind(this);
  }

  componentDidMount() {
    this.props.getAccessToken();
  }

  handleToggleSearch() {
    this.setState({ searchActive: !this.state.searchActive });
  }

  render() {
    return (
      <div className="app">
        <Header toggleSearch={this.handleToggleSearch}/>
        <main className="app__main">
          <Search active={this.state.searchActive} toggleSearch={this.handleToggleSearch}/>
          <Library />
        </main>
      </div>
    );
  }
}

export default App;
