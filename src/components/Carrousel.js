import React, { useState } from 'react';
import ArrowBack from '../assets/arrow-back.png';
import ArrowForward from '../assets/arrow-forward.png';

const Carrousel = ({ data }) => {

    // Fonctions permettant de gérer l'affichage conditionnel des slides suivant la flèche cliquée //
    const [slide, setSlide] = useState(0);

    const nextSlide = () => {
        setSlide(slide === data.pictures.length - 1 ? 0 : slide + 1);
    }

    const prevSlide = () => {
        setSlide(slide === 0 ? data.pictures.length - 1 : slide - 1);
    }

    // Si le logement ne contient qu'une image, ne pas afficher les flèches et le nombre d'images //
    if (data.pictures.length === 1) {
        return (
            <div className='carrousel-container'>
                <img src={data.pictures[slide]} alt="photos de l'appartement" className='slides'></img>
            </div>
        )
    }

    // Si le logement contient plusieurs images, afficher le nombre d'images, les flèches et toutes les images //
    const counter = `${slide + 1} / ${data.pictures.length}`;

    return (
        <div className='carrousel-container'>
            <img src={ArrowBack} className='arrow arrow-left' onClick={prevSlide}></img>
            <img src={data.pictures[slide]} alt="photos de l'appartement" className='slides'></img>
            <img src={ArrowForward} className='arrow arrow-right' onClick={nextSlide}></img>
            <span className='counter'>
                {counter}
            </span>
        </div>
    );
};

export default Carrousel;