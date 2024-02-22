import React from 'react';
import starActive from '../assets/star-active.png';
import starInactive from '../assets/star-inactive.png';

const Rating = ({rating}) => {

    // Tableau indiquant le nombre total d'étoiles possible //
    const starsTotal = [1, 2, 3, 4, 5];

    // Pour chaque étoile, indiquer si elle doit être rouge ou grise : tant que le rating est supérieur à l'index de l'étoile dans le tableau, elle apparaît en rouge //
    return (
        <div className="rating">
            {starsTotal.map((index) =>
                rating >= index ?
                    (<img key={index} src={starActive} alt="étoile rouge" />) :
                    (<img key={index} src={starInactive} alt="étoile grise" />)
            )}
        </div>
    )
};


export default Rating;