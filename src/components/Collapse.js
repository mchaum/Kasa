import React, { useState } from 'react';
import ArrowUp from '../assets/arrow-up.png';

const Collapse = ({ title, content }) => {

    // Constante qui permet de gérer l'ouverture et la fermeture //
    const [active, setActive] = useState(false);
    // Constante qui permet de gérer la rotation de la flèche //
    const [isRotated, setIsRotated] = useState(false);

    // Fonction permettant de gérer les deux au clic//
    const CollapseClick = () => {
        setIsRotated(!isRotated);
        setActive(!active);
    }

    return (
        // On met la classe collapse à la div, et si "active" est true, on lui met cette classe //
        <div className={`collapse ${active && "active"}`}>
            <div className='collapse-title' onClick={CollapseClick}>
                <h3>{title}</h3>
                <img src={ArrowUp}></img>
            </div>
            {/* Afficher chaque élément dans une balise <p> séparée */}
            <div className='collapse-content'>{Array.isArray(content) ? content.map((item, index) => {
                return (
                    <p key={index}>{item}</p>
                )
            }) : content
            }</div>
        </div>
    );
};

export default Collapse;