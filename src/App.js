import React from 'react';
import './App.css';
import Header from './client/components/Header/Header';
import Search from './client/components/Search/Search';
import Results from './client/components/Results/Results';

export default class App extends React.Component {

  state = { // initializarea unui state al aplicatiei, initial gol
    flickrUrls: [],
    tweets: [],
    searchTerm: '',
    okSearch: true,
  }

  /**
   * Functie pentru setarea in state a termenului de cautare curent
   */
  setSearchTerm = (value) => {
    this.setState({
      searchTerm: value
    });
  }

  /**
   * Functie pentru initializarea cautarii, in functie de termenul de cautare curent
   */
  makeSearch = async () => {
    const { searchTerm } = this.state;
    if (searchTerm) {
      // daca exita continut scris in searchbar, atunci se vor lansa apelurile catre cele 2 Node APIs,
      // apoi, dupa primirea raspunsului, se va seta in state obiectul primit
      const flickrUrls = await fetch(`http://localhost:8080/images/?searchTerm=${searchTerm}`).then(res => res.json());
      this.setState({
        flickrUrls
      });
      const tweets = await fetch(`http://localhost:8080/tweets/?searchTerm=${searchTerm}&resultsCount=3`).then(res => res.json());
      this.setState({
        tweets: tweets.data.statuses
      });
      this.setState({
        okSearch: true
      });
    } else {
      this.setState({
        okSearch: false
      })
      console.log('please type something...');
    }
  }

  render() {
    const { flickrUrls, tweets, okSearch } = this.state;
    return (
      <div className="App">
        <header className="header">
          <Header />
        </header>
        <div className="search">
          <Search setSearchTerm={this.setSearchTerm} makeSearch={this.makeSearch} />
        </div>
        {
          !okSearch ? (
            <p className="info-message">Please type something...</p>
          ) : <div className="results">
              <Results flickrUrls={flickrUrls} tweets={tweets} />
            </div>
        }
      </div>
    );
  }
}
