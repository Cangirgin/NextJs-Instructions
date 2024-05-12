"use client"
import "./slider.scss";
import React, { useState } from 'react'
import { Carousel, Image } from 'react-bootstrap';
import slides from "@/helpers/slider.json";

const Slider = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };

    return (
        <Carousel activeIndex={index} onSelect={handleSelect} className="slider">

            {
                slides.map((slide) => (
                    <Carousel.Item key={slide.id}>
                        <Image alt='slider' src={`/image/slider2/${slide.image}`}
                            className="img-fluid"
                        />

                    </Carousel.Item>
                ))
            }

        </Carousel>
    );
}
export default Slider