import React, { Component } from 'react';
import './frontPage.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

class FrontPage extends Component {
    render() { 
        return ( 
            <section>
                <h1>Marc PIERRON</h1>
                <h2>Développeur web full stack / Etudiants</h2>
                <FontAwesomeIcon icon={faChevronDown} />
            </section>
         );
    }
}
 
export default FrontPage;