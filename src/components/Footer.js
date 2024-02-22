import React from 'react';
import Logowhite from '../assets/logowhite.png'
import '../style/style.scss'

const Footer = () => {
    return (
        <footer>
            <img src={Logowhite} alt='Logo Kasa'></img>
            <p>© 2020 Kasa. All rights reserved</p>
        </footer>
    );
};

export default Footer;