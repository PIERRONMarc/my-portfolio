import React, { Component } from 'react';
import './about.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileAlt } from '@fortawesome/free-solid-svg-icons'

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
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, nihil, quasi, doloremque illo amet cum ipsa nobis labore voluptatem eum quaerat nam iure eos sit corporis voluptas vero nostrum! Enim!
                        </p>
                        <p className="about__text">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate, dignissimos officiis perferendis distinctio perspiciatis rerum quibusdam labore fuga tempore ut iusto beatae eveniet totam error accusamus excepturi commodi quas! Pariatur.
                        </p>
                    </div>
                    <div className="about__curriculum">
                        <FontAwesomeIcon icon={faFileAlt} />
                    </div>
                </div>
            </section>
        );
    }
}
 
export default About;