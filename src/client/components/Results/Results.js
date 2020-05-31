import React from 'react';
import './Results.css';

function Results({ flickrUrls, tweets }) {
    console.log(tweets);
    return (
        <div className="results-container">
            <div className="flickr-results-container">
                <h3>Flickr results: </h3>
                <ul className="flickr-results-list">
                    {
                        flickrUrls.map((url, index) => {
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
                        tweets.map((tweet, index) => {
                            return (
                                <p key={`t-${index}`}>{tweet.text}</p>
                            )
                        })
                    }
                </ul>
            </div>
        </div>
    )
}

export default Results;