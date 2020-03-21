import React, { Component } from 'react';
import './footer.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithubSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons'

class Footer extends Component {
    render() { 
        return (
            <footer className="footer ">
                
                <div class="footer__tags">
                    <h3 className="html-tags ml-10">&lt;/body&gt;</h3><br/>
                    <h3 className="html-tags inline-block">&lt;/html&gt;</h3> 
                </div>

                <h3 className="html-tags inline-block footer__copyright">&lt;!-- Copyright @ 2020 PIERRON Marc --&gt;</h3>

                <div className="footer__social-wrapper">
                    <h3 className="html-tags inline-block">&lt;!-- Socials : </h3>
                    <ul className="footer__social">
                        <li className="footer__social-item"><FontAwesomeIcon icon={faLinkedin} /></li>
                        <li className="footer__social-item"><FontAwesomeIcon icon={faGithubSquare} /></li>
                    </ul>
                    <h3 className="html-tags inline-block">--&gt;</h3>
                </div>
            </footer>
        );
    }
}
 
export default Footer;