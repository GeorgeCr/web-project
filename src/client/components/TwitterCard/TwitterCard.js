import React from 'react';
import RetweetIcon from '../../assets/retweet.svg';
import './TwitterCard.css';

function TwitterCard(props) {
    console.log(props.data);
    const {
        retweet_count,
        text,
        created_at,
        user
    } = props.data;
    const {
        name,
        profile_image_url
    } = user;

    return (
        <div className="twitter-card-container">
            <div className="left-panel">
                <img src={profile_image_url} alt="user" />
                <p className="focused-text">{name}</p>
            </div>
            <div className="right-panel">
                <p><span className="focused-text">Created at: </span>{created_at.split('+')[0]}</p>
                <p>{text}</p>
                <p>
                    <img className="retweet-icon" src={RetweetIcon} />
                    <span className="retweet-count">{retweet_count}</span>
                </p>
            </div>
        </div>
    )
}

export default TwitterCard;