import React, { Component } from 'react';
import './about.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileAlt } from '@fortawesome/free-solid-svg-icons'
import Curriculum from '../../assets/Curriculum.pdf';
import IntervalContext from '../../context/ChevronIntervalContext';

class About extends Component {

    static contextType = IntervalContext;

    componentDidMount() {
        window.addEventListener('scroll', this.clearChevronInterval);
    }

    clearChevronInterval = () => {
        clearInterval(this.context.chevronInterval);
        window.removeEventListener('scroll', this.clearChevronInterval);
    }
    
    render() {  
        
        return (
            <section className="about" id="about">
                <div className="title-wrapper">
                    <h1 className="title">Bonjour, je suis <span className="title--highlight">marc.</span></h1>
                </div>
                <div className="about__wrapper">
                    <div className="about__text-wrapper">
                        <p className="about__text">
                            Étudiant / alternant développeur full-stack à la CPAM des Yvelines. Passionné de jeux vidéos et d'e-sport. À la recherche d’un mastère dans le développement web.
                        </p>
                        <p className="about__text">
                            J'aime résoudre des problèmes. D'abord spécialisé back-end, je me suis ensuite intéressé au front-end et au développement d'application mobile. Je réalise maintenant des projets de leur conception, à leur mise en production.
                        </p>
                    </div>
                    <a className="about__curriculum" href={Curriculum} target="_blank" rel="noreferrer noopener"><FontAwesomeIcon icon={faFileAlt} /></a>
                </div>
            </section>
        );
    }
}
 
export default About;