import React, { useState, useEffect } from 'react'
import { Carousel } from 'react-bootstrap'
import { connect } from 'react-redux'
import { getDataSlider } from '../Action/SliderAction'
// import Photo1 from '../images/First-Reformed.webp'
// import Photo2 from '../images/poster_film_dilan.jpeg'
// import Photo3 from '../images/preman-pensiun.jpg'

function Slider(props) {

    useEffect(() => {
        props.getDataSlider()
    }, [])
    
    console.log('props', props)
    return (
        <div>
            <Carousel className="carousel">
                <Carousel.Item className="carouselItem">
                {props.slider.map((item, index) => (
                    <img key={index}
                    className="d-block w-100"
                    src={item.poster_path}
                    width={20}
                    height={350}
                    alt="First slide"
                    />
                ))}
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

const mapStateToProps = state => {
    console.log("slider",state)
    return {
        slider: state.getSlider.data
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        getDataSlider: () => dispatch(getDataSlider()),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Slider)
