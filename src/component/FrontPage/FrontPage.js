import React, { Component } from 'react';
import './frontPage.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

class FrontPage extends Component {
    render() { 
        return ( 
            <section className="front-page">
                <div className="front-page__title-wrapper">
                    <h3 className="html-tags align-self-start mr-5">&lt;h1&gt;</h3>
                    <h1 className="front-page__title">Marc <span className="front-page__title--orange">| PIERRON</span></h1> <br/>
                    <h3 className="html-tags align-self-end ml-5">&lt;/h1&gt;</h3>
                </div>
                <div className="front-page__job-wrapper">
                    <h3 className="html-tags align-self-start mr-5">&lt;h2&gt;</h3>
                    <h2 className="front-page__job">Développeur web full stack / Etudiants</h2>
                    <h3 className="html-tags align-self-end ml-5">&lt;/h2&gt;</h3>
                </div>
                <FontAwesomeIcon icon={faChevronDown} size="3x" className="front-page__chevron"/>
            </section>
         );
    }
}
 
export default FrontPage;