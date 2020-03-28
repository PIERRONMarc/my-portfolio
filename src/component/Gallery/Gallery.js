import React, { Component } from 'react';
import './gallery.scss';
import Masonry from 'react-masonry-css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode, faEye  } from '@fortawesome/free-solid-svg-icons'
import Carousel, { Modal, ModalGateway } from 'react-images';

// images import
import FNPEISImage from '../../assets/img/grid/FNPEIS.PNG';
import IntegrationImage from '../../assets/img/grid/integration.PNG';
import SquareSolitaireImage from '../../assets/img/grid/square-solitaire.png';
import GestionGreveImage from '../../assets/img/grid/gestion-des-greves.PNG';
import GimeImage from '../../assets/img/grid/GIME.PNG';
import OCSInventoryImage from '../../assets/img/grid/ocs-inventory.png';
import MarsRoverImage from '../../assets/img/grid/mars-rover.PNG';

const images = [{src: 'img/FNPEIS/mission-centrale.PNG', caption:'test'}, {src: 'img/FNPEIS/thematique.PNG'}]

class Gallery extends Component {

    constructor(props) {
        super(props);

        this.state = {
            marsRoverModalIsOpen: false,
            fnpeisModalIsOpen: false,
            integrationModalIsOpen: false,
            squareSolitaireModelIsOpen: false,
            ocsInventoryModalIsOpen: false,
            gestionGreveModalIsOpen: false,
            gimeModalIsOpen: false
        }
    }

    toggleModalMarsRover = () => {
        this.setState(state => ({ marsRoverModalIsOpen: !state.marsRoverModalIsOpen }));
    }

    toggleModalFnpeis = () => {
        this.setState(state => ({ fnpeisModalIsOpen: !state.fnpeisModalIsOpen }));
    }
    
    toggleModalIntegration = () => {
        this.setState(state => ({ integrationModalIsOpen: !state.integrationModalIsOpen }));
    }

    toggleModalSquareSolitaire = () => {
        this.setState(state => ({ squareSolitaireModelIsOpen: !state.squareSolitaireModelIsOpen }));
    }

    toggleModalOcsInventory = () => {
        this.setState(state => ({ ocsInventoryModalIsOpen: !state.ocsInventoryModalIsOpen }));
    }

    toggleModalGestionGreve = () => {
        this.setState(state => ({ gestionGreveModalIsOpen: !state.gestionGreveModalIsOpen }));
    }
    toggleModalGime = () => {
        this.setState(state => ({ gimeModalIsOpen: !state.gimeModalIsOpen }));
    }


    render() { 

        const gridImages = [
            {
                src: MarsRoverImage,
                codeUrl: null,
                carouselImages: [
                    {src: 'img/mars-rover/home.PNG'},
                    // {src: 'img/mars-rover/instructions.PNG'},
                    {src: 'img/mars-rover/rover-selection.PNG'},
                    {src: 'img/mars-rover/map-selection.PNG'},
                    {src: 'img/mars-rover/map-customization.PNG'},
                    {src: 'img/mars-rover/map-difficulty.PNG'},
                    {src: 'img/mars-rover/game.PNG'}
                ],
                toggleModal: this.toggleModalMarsRover,
                modalIsOpen: this.state.marsRoverModalIsOpen,
                codeLink: null,
            },
            {
                src: FNPEISImage,
                codeUrl: null,
                carouselImages: [
                    {src: 'img/FNPEIS/thematique.PNG'},
                    {src: 'img/FNPEIS/mission-centrale.PNG'},
                ],
                toggleModal: this.toggleModalFnpeis,
                modalIsOpen: this.state.fnpeisModalIsOpen,
                codeLink: null,
            },
            {
                src: IntegrationImage,
                codeUrl: null,
                carouselImages: [
                    {src: 'img/integration/home.PNG'},
                    {src: 'img/integration/presentation.PNG'},
                    {src: 'img/integration/role-manager.PNG'}
                ],
                toggleModal: this.toggleModalIntegration,
                modalIsOpen: this.state.integrationModalIsOpen,
                codeLink: null,
            },
            {
                src: SquareSolitaireImage,
                codeUrl: null,
                carouselImages: [
                    {src: 'img/square-solitaire/1.png'},
                    {src: 'img/square-solitaire/2.png'},
                    {src: 'img/square-solitaire/3.png'},
                    {src: 'img/square-solitaire/4.png'},
                ],
                toggleModal: this.toggleModalSquareSolitaire,
                modalIsOpen: this.state.squareSolitaireModelIsOpen,
                codeLink: null,
            },
            {
                src: OCSInventoryImage,
                codeUrl: null,
                carouselImages: [
                    {src: 'img/ocs-inventory/tableau-de-bord.png'},
                    {src: 'img/ocs-inventory/creation-sonde.png'},
                    {src: 'img/ocs-inventory/liste-sonde.png'},
                    {src: 'img/ocs-inventory/configuration.png'},
                    {src: 'img/ocs-inventory/snmp.png'},
                    {src: 'img/ocs-inventory/nas.png'},
                    {src: 'img/ocs-inventory/printer.png'},
                    {src: 'img/ocs-inventory/undefined.png'},
                ],
                toggleModal: this.toggleModalOcsInventory,
                modalIsOpen: this.state.ocsInventoryModalIsOpen,
                codeLink: null,
            },
            {
                src: GestionGreveImage,
                codeUrl: null,
                carouselImages: [
                    {src: 'img/gestion-greve/accueil.PNG'},
                    {src: 'img/gestion-greve/annuel.PNG'},
                    {src: 'img/gestion-greve/creation-greve.PNG'},
                    {src: 'img/gestion-greve/direction.PNG'},
                    {src: 'img/gestion-greve/fermeture-accueil.PNG'},
                    {src: 'img/gestion-greve/gestion-agents.PNG'},
                    {src: 'img/gestion-greve/mail.PNG'},
                    {src: 'img/gestion-greve/resultat-entite.PNG'},
                    {src: 'img/gestion-greve/service.PNG'},
                    {src: 'img/gestion-greve/synthese-generale.PNG'},
                ],
                toggleModal: this.toggleModalGestionGreve,
                modalIsOpen: this.state.gestionGreveModalIsOpen,
                codeLink: null,
            },
            {
                src: GimeImage,
                codeUrl: null,
                carouselImages: [
                    {src: 'img/GIME/home.PNG'},
                    {src: 'img/GIME/1.PNG'},
                    {src: 'img/GIME/2.PNG'},
                    {src: 'img/GIME/3.PNG'}
                ],
                toggleModal: this.toggleModalGime,
                modalIsOpen: this.state.gimeModalIsOpen,
                codeLink: null,
            },
            
        ];

        const breakpointColumnsObj = {
            default: 3,
            1100: 2,
            700: 1
        };

        return (
            <section className="container gallery">
             
                <div className="title-wrapper gallery__title">
                    <h1 className="title">Mes <span className="title--highlight">travaux</span></h1>
                </div>

                <Masonry
                    breakpointCols={breakpointColumnsObj}
                    className="masonry__grid"
                    columnClassName="masonry__column"
                >
                    {gridImages.map(img => (
                        <div className="masonry__item">
                            <div className="masonry__item-content">
                                <a className="masonry__item-btn" title="voir plus" onClick={img.toggleModal}><FontAwesomeIcon icon={faEye} /></a>
                                {img.codeLink != null ? <a className="masonry__item-btn" title="voir code"><FontAwesomeIcon icon={faCode} /></a> : null}
                            </div>
                            <img src={img.src} />
                        </div>
                    ))}
                </Masonry>

                {gridImages.map(img => (
                    <ModalGateway>
                        {img.modalIsOpen ? (
                            <Modal onClose={img.toggleModal} >
                                <Carousel views={img.carouselImages} />
                            </Modal>
                        ) : null}
                    </ModalGateway> 
                ))}
            </section>
        );
    }
}
 
export default Gallery;