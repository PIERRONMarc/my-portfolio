import React, { Component } from 'react';
import './about.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileAlt } from '@fortawesome/free-solid-svg-icons'
import Curriculum from '../../assets/Curriculum.pdf';

class About extends Component {
    render() {  
        return (
            <section className="about">
                <div className="title-wrapper">
                    <h1 className="title">À propos de <span className="title--highlight">moi</span></h1>
                </div>
                {/* <div className="p-relative"> */}
                <div className="about__wrapper">
                    <div className="about__text-wrapper">
                        <p className="about__text">
                            Étudiant en licence professionnelle Développeur web et multimédia option Développement mobile, je souhaite poursuivre mes études mastère. Afin d’approfondir mes connaissances et mieux m’insérer dans ce métier, j’ai choisi la voie de l’alternance. À présent, je suis à la recherche d’une école me permettant d’allier enseignement théorique et formation pratique.
                        </p>
                        {/* <p className="about__text">
                            Ce portofolio vous permettra de découvrir mes compétences et experiences professionnelles.
                            Il sera mis à jour au fur et à mesure du déroulement de ma formation, me permettant de présenter mes projets personnels, scolaires ou professionnels sur lesquels j'aurais la chance de travailler.
                        </p> */}
                    </div>
                    <a className="about__curriculum" href={Curriculum} target="_blank"><FontAwesomeIcon icon={faFileAlt} /></a>
                </div>
            </section>
        );
    }
}
 
export default About;