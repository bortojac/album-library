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
    this.handleOpenSearch = this.handleOpenSearch.bind(this);
  }

  componentDidMount() {
    this.props.getAccessToken();
  }

  handleOpenSearch() {
    this.setState({ searchActive: !this.state.searchActive });
  }

  render() {
    return (
      <div className="app">
        <Header openSearch={this.handleOpenSearch}/>
        <main className="app__main">
          <Search active={this.state.searchActive}/>
          <Library />
        </main>
      </div>
    );
  }
}

export default App;
