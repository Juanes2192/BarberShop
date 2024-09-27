import React, { useState } from 'react';
import { Carousel, Card, Form, Button } from 'react-bootstrap';
import { useSwipeable } from 'react-swipeable';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './Reviews.css'; 

export function Reviews() {
    const reviews = [
        {
            id: 1,
            name: "Juan Pérez",
            text: "¡Excelente servicio y ambiente acogedor! El barbero fue muy atento y se aseguró de entender exactamente lo que quería antes de empezar. La atención al detalle fue increíble, y el resultado final fue un corte de pelo que superó mis expectativas. ¡Muy recomendable!",
            date: "2024-07-18",
            rating: 1
        },
        {
            id: 2,
            name: "Sebastian Leiva",
            text: "Es un buen sitio donde hacen el corte que les pides a la perfección, es una buena barbería.",
            date: "2024-11-10",
            rating: 1
        },
        {
            id: 3,
            name: "Esteban Perdomo",
            text: "El corte es perfecto, pero la barba no tanto.",
            date: "2024-07-10",
            rating: 1
        },
        // Agrega más reseñas si lo deseas...
    ];

    const [index, setIndex] = useState(0);
    const [rating, setRating] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    const handlers = useSwipeable({
        onSwipedLeft: () => setIndex((prevIndex) => (prevIndex + 1) % reviews.length),
        onSwipedRight: () => setIndex((prevIndex) => (prevIndex - 1 + reviews.length) % reviews.length),
    });

    const handleSubmit = (e) => {   
        e.preventDefault();
        alert("Comentario enviado.");
    };

    return (
        <div {...handlers} style={{ touchAction: 'pan-y' }} className="custom-carousel">
            <Carousel
                activeIndex={index}
                onSelect={handleSelect}
                indicators={false}
                controls={false}
                interval={10000}
                fade
            >
                {reviews.map((review) => (
                    <Carousel.Item key={review.id}>
                        <Card className="custom-card">
                            <Card.Body>
                                <Card.Title>{review.name}</Card.Title>
                                <div className="rating">
                                    {[...Array(5)].map((_, i) => (
                                        <span
                                            key={i}
                                            className={`star ${i < review.rating ? "filled" : ""}`}
                                        >
                                            ★
                                        </span>
                                    ))}
                                </div>
                                <Card.Text>{review.text}</Card.Text>
                                <Card.Footer className="text-muted">{review.date}</Card.Footer>
                            </Card.Body>
                        </Card>
                    </Carousel.Item>
                ))}
            </Carousel>
            <div className='reviews-form-container'>
                <h2 className="form-title">Déjanos conocer tu experiencia</h2>
                <Form className="custom-form" onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formName">
                        <Form.Label>Nombre</Form.Label>
                        <Form.Control type="text" placeholder="Nombre" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formRating">
                        <Form.Label>Calificación</Form.Label>
                        <div className="rating-input">
                            {[...Array(5)].map((_, i) => (
                                <span
                                    key={i}
                                    className={`star-input ${i < rating ? "checked" : ""}`}
                                    onClick={() => setRating(i + 1)}
                                >
                                    <i className="bi bi-star"></i>
                                </span>
                            ))}
                        </div>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formReview">
                        <Form.Label>Comentario</Form.Label>
                        <Form.Control as="textarea" rows={3} placeholder="Escribe tu comentario aquí..." />
                    </Form.Group>
                    <Button type="submit" className='button-send-form'>Enviar</Button>
                </Form>
            </div>
        </div>
    );
}
