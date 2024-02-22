import React from 'react';
import { NavLink } from 'react-router-dom';
import Logements from '../data/logements.json';

const Card = () => {
    return (
        <div className='card-container'>
            {/* Indique ce que l'on va faire pour chaque élément des logements : on l'appelle "logement" + on crée un lien et une carte */}
            {Logements.map((logement) => (
                <div key={logement.id} className='card'>
                    {/* Création d'un lien vers une page logement en fonction de l'id */}
                    <NavLink to={`/logement/${logement.id}`}>
                        {/* Création d'une carte + d'un titre pour chaque logement */}
                        <img className='card-img' src={logement.cover} alt={logement.title} />
                        <h3 className='card-title'>{logement.title}</h3>
                    </NavLink>
                </div>
            ))}
        </div>
    )
}

export default Card;