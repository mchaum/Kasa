import React from 'react';
import { NavLink } from "react-router-dom";
import Logo from '../assets/logo.png'
import '../style/style.scss'

const Header = () => {
    return (
        <header>
            <img src={Logo} alt='Logo Kasa'></img>
            <div className='banner-navbar'>
            <NavLink to="/" className={(nav) => (nav.isActive ? "nav-active" : "")}><p>Accueil</p></NavLink>
            <NavLink to="/about" className={(nav) => (nav.isActive ? "nav-active" : "")}><p>A propos</p></NavLink>
                </div>
        </header>
    );
};

export default Header;