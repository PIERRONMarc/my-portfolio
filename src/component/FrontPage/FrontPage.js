import React, { Component } from 'react';
import './frontPage.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import HeadShake from 'react-reveal/HeadShake';
import IntervalContext from '../../context/ChevronIntervalContext';


class FrontPage extends Component {

    static contextType = IntervalContext;

    constructor(props) {
        super(props);

        this.state = {
            counter: 0,
        }

        this.handleCounter = this.handleCounter.bind(this);
    }

    handleClick(event) {
        event.preventDefault();
        document.querySelector('#about').scrollIntoView({ behavior: 'smooth' });
    }

    componentDidMount() {
        this.handleCounter();
        const id = setInterval(this.handleCounter, 4000);
        this.context.setChevronInterval(id);
       
    }

    componentWillUnmount() {
        clearInterval(this.state.intervalId);
    }

    handleCounter() {
        this.setState({ counter: this.state.counter + 1 });
    }

    render() { 
        
        return ( 
            <section className="front-page">
                <div className="front-page__title-wrapper">
                    <h3 className="html-tags align-self-start mr-5">&lt;h1&gt;</h3>
                    <h1 className="front-page__title">Marc <span className="front-page__title--orange front-page__title-separator">|</span> <span className="front-page__title--orange">PIERRON</span></h1> <br/>
                    <h3 className="html-tags align-self-end ml-5">&lt;/h1&gt;</h3>
                </div>
                <div className="front-page__job-wrapper">
                    <h3 className="html-tags align-self-start mr-5">&lt;h2&gt;</h3>
                    <h2 className="front-page__job">Développeur web full stack / Étudiant</h2>
                    <h3 className="html-tags align-self-end ml-5">&lt;/h2&gt;</h3>
                </div>
             
                <HeadShake spy={this.state.counter}>
                    <a onClick={this.handleClick} href="./#"><FontAwesomeIcon icon={faChevronDown} size="3x" className="front-page__chevron shake"/></a>
                </HeadShake>
                
                
            </section>
         );
    }
}
 
export default FrontPage;