import React from 'react';
import { useParams } from "react-router-dom";
import Header from '../components/Header';
import Footer from '../components/Footer';
import Collapse from '../components/Collapse';
import logements from '../data/logements.json';
import Carrousel from '../components/Carrousel';
import Tags from '../components/Tags';
import Rating from '../components/Rating';
import Erreur from './Erreur404';

const Logement = () => {

    // Récupère l'url de l'id & cherche les données correspondant à l'id dans le fichier logements //
    const { id } = useParams();
    const logement = logements.find((item) => item.id === id);

    // Si l'id n'existe pas, renvoie l'utilisateur vers la page d'erreur 404 //
    if (!logement) {
        return <Erreur />;
      }

    // Si l'id existe, affiche les données correspondantes sur la page //
    return (
        <div>
            <Header />
            <Carrousel data={logement} />
            <div className='logements-info'>
                <div className='logements-place'>
                    <div className='logements-title'>
                        <h2>{logement.title}</h2>
                        <p>{logement.location}</p>
                    </div>
                    <Tags content={logement.tags} />
                </div>
                <div className='logements-rating'>
                    <div className='host-info'>
                        <p>{logement.host.name}</p>
                        <img src={logement.host.picture}></img>
                    </div>
                    <Rating rating={logement.rating} />
                </div>
            </div>
            <div className='logements-collapses'>
                <Collapse title={"Description"} content={logement.description} />
                <Collapse title={"Équipements"} content={logement.equipments} />
            </div>
            <Footer />
        </div>
    );
};

export default Logement;