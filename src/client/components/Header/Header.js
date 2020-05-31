import React from 'react';
import './Header.css';
import logo from '../../assets/logo.jpg';

function Header() {
    return (
        <div className='header-container'>
            <img className='logo' src={logo} alt='Logo' />
        </div>

    )
}

export default Header;