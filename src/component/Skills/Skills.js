import React, { Component } from 'react';
import './skills.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faImage } from '@fortawesome/free-solid-svg-icons'

class Skills extends Component {
    render() { 
        return (
            <section className="skills">
                <div className="container">
                    <div className="title-wrapper">
                        <h1 className="title">Je peux <span className="title--highlight">concrétiser</span> vos projets à l'aide de</h1>
                    </div>
                    <ul className="skills__icons">
                        <li className="skills__item">
                            <FontAwesomeIcon icon={faImage} size="3x" />
                        </li>
                        <li className="skills__item">
                            <FontAwesomeIcon icon={faImage} size="3x" />
                        </li>
                        <li className="skills__item">
                            <FontAwesomeIcon icon={faImage} size="3x" />
                        </li>
                        <li className="skills__item">
                            <FontAwesomeIcon icon={faImage} size="3x" />
                        </li>
                    </ul>
                </div>
            </section>
        );
    }
}

export default Skills;
 