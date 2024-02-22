import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

const Erreur = () => {
    return (
        <div>
            <Header />
            <div className='error-container'>
                <h1>404</h1>
                <p> Oups! La page que vous demandez n'existe pas. </p>
                <Link to="/" className="error-link">
                Retourner sur la page d’accueil
            </Link>
            </div>
            <Footer />
        </div>
    );
};

export default Erreur;