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
import LabboiteImage from '../../assets/img/grid/labboite.png';
import CarouselFooter from './CarouselFooter';
import Projects from './projects.json';

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
            gimeModalIsOpen: false,
            labboiteModalIsOpen: false
        }
    }

    toggleModalMarsRover = (event) => {
        event.preventDefault();
        this.setState(state => ({ marsRoverModalIsOpen: !state.marsRoverModalIsOpen }));
    }

    toggleModalFnpeis = (event) => {
        event.preventDefault();
        this.setState(state => ({ fnpeisModalIsOpen: !state.fnpeisModalIsOpen }));
    }
    
    toggleModalIntegration = (event) => {
        event.preventDefault();
        this.setState(state => ({ integrationModalIsOpen: !state.integrationModalIsOpen }));
    }

    toggleModalSquareSolitaire = (event) => {
        event.preventDefault();
        this.setState(state => ({ squareSolitaireModelIsOpen: !state.squareSolitaireModelIsOpen }));
    }

    toggleModalOcsInventory = (event) => {
        event.preventDefault();
        this.setState(state => ({ ocsInventoryModalIsOpen: !state.ocsInventoryModalIsOpen }));
    }

    toggleModalGestionGreve = (event) => {
        event.preventDefault();
        this.setState(state => ({ gestionGreveModalIsOpen: !state.gestionGreveModalIsOpen }));
    }
    toggleModalGime = (event) => {
        event.preventDefault();
        this.setState(state => ({ gimeModalIsOpen: !state.gimeModalIsOpen }));
    }
    toggleModalLabboite = (event) => {
        event.preventDefault();
        this.setState(state => ({ labboiteModalIsOpen: !state.labboiteModalIsOpen }));
    }
    

    getCarouselImages = (project) => project.screens.map((screen) => {
        return {
            src: screen.src,
            ...project
        }
    })

    


    render() { 

        const gridImages = [
            {
                ...Projects.labboite,
                src: MarsRoverImage,
                carouselImages: this.getCarouselImages(Projects.marsRover),
                toggleModal: this.toggleModalMarsRover,
                modalIsOpen: this.state.marsRoverModalIsOpen,
            },
            {
                ...Projects.labboite,
                src: LabboiteImage,
                carouselImages: this.getCarouselImages(Projects.labboite),
                toggleModal: this.toggleModalLabboite,
                modalIsOpen: this.state.labboiteModalIsOpen,
            },
            {
                ...Projects.FNPEIS,
                src: FNPEISImage,
                carouselImages: this.getCarouselImages(Projects.FNPEIS),
                toggleModal: this.toggleModalFnpeis,
                modalIsOpen: this.state.fnpeisModalIsOpen,
            },
            {
                ...Projects.integration,
                src: IntegrationImage,
                carouselImages: this.getCarouselImages(Projects.integration),
                toggleModal: this.toggleModalIntegration,
                modalIsOpen: this.state.integrationModalIsOpen,
            },
            {
                ...Projects.squareSolitaire,
                src: SquareSolitaireImage,
                carouselImages: this.getCarouselImages(Projects.squareSolitaire),
                toggleModal: this.toggleModalSquareSolitaire,
                modalIsOpen: this.state.squareSolitaireModelIsOpen,
            },
            {
                ...Projects.ocsInventory,
                src: OCSInventoryImage,
                carouselImages: this.getCarouselImages(Projects.ocsInventory),
                toggleModal: this.toggleModalOcsInventory,
                modalIsOpen: this.state.ocsInventoryModalIsOpen,
            },
            {
                ...Projects.gestionDesGreves,
                src: GestionGreveImage,
                carouselImages: this.getCarouselImages(Projects.gestionDesGreves),
                toggleModal: this.toggleModalGestionGreve,
                modalIsOpen: this.state.gestionGreveModalIsOpen,
            },
            {
                ...Projects.GIME,
                src: GimeImage,
                carouselImages: this.getCarouselImages(Projects.GIME),
                toggleModal: this.toggleModalGime,
                modalIsOpen: this.state.gimeModalIsOpen,
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
                    {gridImages.map((img, key) => (
                        <div className="masonry__item" key={key}>
                            <div className="masonry__item-content">
                                <a href="./#" className="masonry__item-btn" title="voir plus" onClick={img.toggleModal}><FontAwesomeIcon icon={faEye}/></a>
                                {img.codeLink != null ? <a className="masonry__item-btn" title="voir code" href={img.codeLink} target="_blank" rel="noreferrer noopener"><FontAwesomeIcon icon={faCode} /></a> : null}
                            </div>
                            <img src={img.src} alt={img.title}/>
                        </div>
                    ))}
                </Masonry>

                {gridImages.map((img, key) => (
                    <ModalGateway key={key}>
                        {img.modalIsOpen ? (
                            <Modal onClose={img.toggleModal} >
                                <Carousel components={{ Footer: CarouselFooter }} views={img.carouselImages} />
                            </Modal>
                        ) : null}
                    </ModalGateway> 
                ))}
            </section>
        );
    }
}
 
export default Gallery;