import React, { Component } from 'react';
import './skills.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faReact, faSymfony, faGit, faAndroid, faApple, faDocker, faVuejs } from '@fortawesome/free-brands-svg-icons'

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
                            <FontAwesomeIcon icon={faSymfony} size="5x" />
                        </li>
                        <li className="skills__item">
                            <FontAwesomeIcon icon={faReact} size="5x" />
                        </li>
                        <li className="skills__item">
                            <FontAwesomeIcon icon={faVuejs} size="5x" />
                        </li>
                        <li className="skills__item">
                            <FontAwesomeIcon icon={faGit} size="5x" />
                        </li>
                        <li className="skills__item">
                            <FontAwesomeIcon icon={faDocker} size="5x" />
                        </li>
                        <li className="skills__item">
                            <FontAwesomeIcon icon={faAndroid} size="5x" />
                        </li>
                        <li className="skills__item">
                            <FontAwesomeIcon icon={faApple} size="5x" />
                        </li>
                    </ul>
                </div>
            </section>
        );
    }
}

export default Skills;
 