import React from 'react';
import './App.css';
import Header from './client/components/Header/Header';
import Search from './client/components/Search/Search';
import Results from './client/components/Results/Results';

export default class App extends React.Component {

  async componentDidMount() {
    const response = await fetch('http://localhost:8080/images').then(res => res.json());
    console.log(response);
  }

  render() {
    return (
      <div className="App">
        <header className="header">
          <Header />
        </header>
        <div className="search">
          <Search />
        </div>
        <div className="results">
          <Results />
        </div>
      </div>
    );
  }
}
