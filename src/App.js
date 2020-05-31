import React from 'react';
import './App.css';
import Header from './client/components/Header/Header';
import Search from './client/components/Search/Search';
import Results from './client/components/Results/Results';

export default class App extends React.Component {

  state = {
    flickrUrls: [],
    tweets: [],
    searchTerm: ''
  }

  setSearchTerm = (value) => {
    this.setState({
      searchTerm: value
    });
  }

  makeSearch = async () => {
    const { searchTerm } = this.state;
    if (searchTerm) {
      const flickrUrls = await fetch(`http://localhost:8080/images/?searchTerm=${searchTerm}`).then(res => res.json());
      this.setState({
        flickrUrls
      });
      const tweets = await fetch(`http://localhost:8080/tweets/?searchTerm=${searchTerm}&resultsCount=3`).then(res => res.json());
      this.setState({
        tweets: tweets.data.statuses
      });
    } else {
      console.log('please type something...');
    }
  }

  render() {
    const { flickrUrls, tweets } = this.state;
    return (
      <div className="App">
        <header className="header">
          <Header />
        </header>
        <div className="search">
          <Search setSearchTerm={this.setSearchTerm} makeSearch={this.makeSearch} />
        </div>
        <div className="results">
          <Results flickrUrls={flickrUrls} tweets={tweets} />
        </div>
      </div>
    );
  }
}
