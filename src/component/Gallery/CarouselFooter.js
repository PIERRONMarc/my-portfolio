import React from 'react';
import './CarouselFooter.scss';

const CarouselFooter = ({ currentView, isModal }) => {

    const { title, context, description, appUrl } = currentView;

    return (
        <div className="carouselFooter">
            <div className="carouselFooter__wrapper">
                <div className="carouselFooter__title-wrapper">
                    <h1 className="carouselFooter__title">{title}</h1>
                    <h2 className="carouselFooter__context">{context}</h2>
                </div>
                
                    <p className="carouselFooter__description">
                        {description}
                    </p>
                    { appUrl != null ?
                        (
                            <a href={appUrl} className="carouselFooter__more" target="_blank" rel="noreferrer noopener">Voir plus</a>
                        ) 
                    : null}
            </div>
        </div>
    )
}

export default CarouselFooter;

