import React, { Component } from 'react';
import './gallery.scss';
import Masonry from 'react-masonry-component';

const masonryOptions = {
    // transitionDuration: '0.4s'
    itemSelector: '.grid-item',
    columnWidth: '.grid-col',
    percentPosition: true

};
 
const imagesLoadedOptions = { background: '.my-bg-image-el' }

class Gallery extends Component {

    
    render() { 

        return (
            <section className="container gallery">
                {/* <h1>Mes travaux</h1> */}
                

            <Masonry
                className={'grid'} // default ''
                elementType={'div'} // default 'div'
                options={masonryOptions} // default {}
                disableImagesLoaded={false} // default false
                updateOnEachImageLoad={false} // default false and works only if disableImagesLoaded is false
                imagesLoadedOptions={imagesLoadedOptions} // default {}
            >

            <div className="grid-col"></div>   
            <div className="grid-col grid-col--2"></div>   
            <div className="grid-col grid-col--3"></div>   
            <div className="grid-col"></div>   

            <div className="grid-item">
                <div className="title-wrapper">
                    <h1 className="title">Mes <span className="title--highlight">travaux</span></h1>

                </div>
            </div>
            <div className="grid-item">
                <img src="https://via.placeholder.com/400x120" />
            </div>
            <div className="grid-item">
                <img src="https://via.placeholder.com/290x150" />
            </div>
            <div className="grid-item">
                <img src="https://via.placeholder.com/290x90" />
            </div>
            <div className="grid-item">
                <img src="https://via.placeholder.com/290x150" />
            </div>
            <div className="grid-item">
                <img src="https://via.placeholder.com/290x120" />
            </div>
            <div className="grid-item">
                <img src="https://via.placeholder.com/290x150" />
            </div>
            <div className="grid-item">
                <img src="https://via.placeholder.com/290x90" />
            </div>
            <div className="grid-item">
                <img src="https://via.placeholder.com/290x150" />
            </div>
            <div className="grid-item">
                <img src="https://via.placeholder.com/290x120" />
            </div>
            <div className="grid-item">
                <img src="https://via.placeholder.com/290x150" />
            </div>
            <div className="grid-item">
                <img src="https://via.placeholder.com/290x90" />
            </div>
          
               
            </Masonry>

            </section>
        );
    }
}
 
export default Gallery;