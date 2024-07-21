// ReviewsCarousel.jsx
import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

export function Reviews() {
    const reviews = [
        {
            id: 1,
            text: "Excelente servicio y ambiente. ¡Volveré sin duda!",
            author: "Juan Pérez"
        },
        {
            id: 2,
            text: "Un lugar increíble con profesionales muy capacitados.",
            author: "María López"
        },
        {
            id: 3,
            text: "La mejor barbería de la ciudad. ¡Recomendado!",
            author: "Carlos Gómez"
        }
    ];


    return (
        <div>
            <Carousel>
                {reviews.map(review => (
                    <Carousel.Item key={review.id}>
                        <div className="carousel-caption">
                            <p>{review.text}</p>
                            <footer className="blockquote-footer">
                                {review.author}
                            </footer>
                        </div>
                    </Carousel.Item>
                ))}
            </Carousel></div>
    )
}

