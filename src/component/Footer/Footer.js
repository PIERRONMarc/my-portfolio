import React, { Component } from 'react';
import './footer.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithubSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons'

class Footer extends Component {
    render() { 
        return (
            <footer className="footer ">
                
                <div className="footer__tags">
                    <h3 className="html-tags ml-10">&lt;/body&gt;</h3><br/>
                    <h3 className="html-tags inline-block">&lt;/html&gt;</h3> 
                </div>

                <h3 className="html-tags inline-block footer__copyright">&lt;!-- Copyright @ 2020 PIERRON Marc --&gt;</h3>

                <div className="footer__social-wrapper">
                    <h3 className="html-tags inline-block">&lt;!-- Socials : </h3>
                    <ul className="footer__social">
                        <li className="footer__social-item">
                            <a href="https://www.linkedin.com/in/marc-pierron" target="_blank"><FontAwesomeIcon icon={faLinkedin} /></a>
                        </li>
                        <li className="footer__social-item">
                            <a href="https://github.com/PIERRONMarc" target="_blank"><FontAwesomeIcon icon={faGithubSquare} /></a>
                        </li>
                    </ul>
                    <h3 className="html-tags inline-block">--&gt;</h3>
                </div>
            </footer>
        );
    }
}
 
export default Footer;