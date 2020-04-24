import React from 'react'
import { Carousel } from 'react-bootstrap'
import Photo1 from '../images/First-Reformed.webp'
import Photo2 from '../images/poster_film_dilan.jpeg'
import Photo3 from '../images/preman-pensiun.jpg'

function Slider() {
    return (
        <div>
            <Carousel className="carousel">
                <Carousel.Item className="carouselItem">
                    <img
                    className="d-block w-100"
                    src={Photo1}
                    width={20}
                    height={350}
                    alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item className="carouselItem">
                    <img
                    className="d-block w-100"
                    src={Photo2}
                    height={350}
                    alt="Third slide"
                    />
                </Carousel.Item>
                <Carousel.Item className="carouselItem">
                    <img
                    className="d-block w-100"
                    src={Photo3}
                    height={350}
                    alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default Slider
