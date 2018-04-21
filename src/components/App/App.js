import React, { Component } from 'react';
import Header from '../Header/Header';
import Search from '../Search';
import Library from '../Library/Library';
import './app.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchOpen: false,
    };
    this.handleOpenSearch = this.handleOpenSearch.bind(this);
    this.props.getAccessToken();
  }

  handleOpenSearch() {
    this.setState({ searchOpen: !this.state.searchOpen });
  }

  render() {
    return (
      <div className="app">
        <Header openSearch={this.handleOpenSearch}/>
        <main className="app__main">
          <Search searchOpen={this.state.searchOpen}/>
          <Library />
        </main>
      </div>
    );
  }
}

export default App;
