import React from 'react';

const Banner = ({ img,text }) => {
    return (
        <div className='banner'>
            <img src={img} alt='paysage'></img>
            <p>{text}</p>
        </div>
    );
};

export default Banner;