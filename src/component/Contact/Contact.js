import React, { Component } from 'react';
import './contact.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComments } from '@fortawesome/free-solid-svg-icons'

class Contact extends Component {
    render() { 
        return ( 
            <div className="contact">
                <FontAwesomeIcon icon={faComments} />
            </div>
         );
    }
}
 
export default Contact;