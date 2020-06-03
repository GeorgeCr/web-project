import React from 'react';
import './Results.css';
import TwitterCard from '../TwitterCard/TwitterCard';

function Results({ flickrUrls, tweets }) {
    return (
        <div className="results-container">
            <div className="flickr-results-container">
                <h3>Flickr results: </h3>
                <ul className="flickr-results-list">
                    {
                        flickrUrls.map((url, index) => { // crearea a cate un tag img pentru fiecare url mapat
                            return (
                                <img className="flickr-img" key={`f-${index}`} src={url} alt="flickr" />
                            )
                        })
                    }
                </ul>
            </div>
            <div className="twitter-results-container">
                <h3>Twitter results: </h3>
                <ul className="twitter-results-list">
                    {
                        tweets.map((tweet, index) => { // iterarea pe lista de tweets returnate si injectarea datelor in fiecare twitter card
                            return (
                                <TwitterCard key={`t-${index}`} data={tweet} />
                            )
                        })
                    }
                </ul>
            </div>
        </div>
    )
}

export default Results;