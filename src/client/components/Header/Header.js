import React from 'react';
import './Header.css';
import logo from '../../assets/logo.jpg';

export default class Header extends React.Component {
    render() {
        return (
            <div className='header-container'>
                <img className='logo' src={logo} alt='Logo' />
            </div>

        )
    }
}