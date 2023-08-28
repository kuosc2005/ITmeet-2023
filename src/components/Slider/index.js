import React, { Component } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const Slider = (props) => {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 8
        },
        desktop: {
            breakpoint: { max: 3000, min: 1350 },
            items: 5
        },
        tablet: {
            breakpoint: { max: 1350, min: 1115 },
            items: 3
        },
        mobile: {
            breakpoint: { max: 1115, min: 580 },
            items: 2
        },
        smobile: {
            breakpoint: { max: 580, min: 0 },
            items: 1
        }
    };
    return (
        <Carousel
            showDots={true}
            responsive={responsive}
            infinite={true}
            dotListClass="custom-dot-list-style"
            autoPlay={true}
            autoPlaySpeed={2000}
        >
            {props.children}
        </Carousel>
    )

}

export default Slider;