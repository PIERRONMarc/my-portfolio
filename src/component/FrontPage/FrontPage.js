import React, { Component } from 'react';
import './frontPage.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

class FrontPage extends Component {
    render() { 
        return ( 
            <section className="front-page">
                <h1 className="front-page__title">Marc <span className="front-page__title--orange">| PIERRON</span></h1>
                <h2 className="front-page__job-title">Développeur web full stack / Etudiants</h2>
                <FontAwesomeIcon icon={faChevronDown} size="3x" className="front-page__chevron"/>
            </section>
         );
    }
}
 
export default FrontPage;