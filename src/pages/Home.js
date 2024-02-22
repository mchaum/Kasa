import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Banner from '../components/Banner';
import BannerImg from '../assets/home-banner.png';
import Card from '../components/Card';

const Home = () => {
    return (
        <div>
            <Header />
            <Banner img={BannerImg} text={"Chez vous,\n partout et ailleurs"} />
            <Card />
            <Footer />
        </div>
    );
};

export default Home;