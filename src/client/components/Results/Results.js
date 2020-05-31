import React from 'react';
import './Results.css';
import image from '../../assets/cat.jpg';

export default class Results extends React.Component {
    render() {
        return (
            <div className='container'>
                <div className='div1'>
                    <p>Your results are here</p>
                    <ul>
                        <li><img src={image} alt='image1'></img></li>
                    </ul>
                </div >
                <div className='div2'> Tweets
                </div>
            </div>
        )
    }
}