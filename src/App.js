import React from 'react';
import './App.css';
import Header from './client/components/Header/Header';
import Search from './client/components/Search/Search';
import Results from './client/components/Results/Results';

export default class App extends React.Component {

  state = {
    photoUrls: []
  }

  async componentDidMount() {
    const response = await fetch('http://localhost:8080/images/?searchTerm=family').then(res => res.json());
    this.setState({
      photoUrls: response
    });
    const tweets = await fetch('http://localhost:8080/tweets/?searchTerm=doggos').then(res => res.json());
    console.log(tweets);
  }

  render() {
    const { photoUrls } = this.state;
    return (
      <div className="App">
        {
          photoUrls.map((photoUrl, index) => {
            return <img key={`p-${index}`} src={photoUrl} alt="searched-item" />
          })
        }
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
