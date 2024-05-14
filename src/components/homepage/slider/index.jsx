"use client"
import "./slider.scss";
import React, { useState } from 'react'
import { Carousel } from 'react-bootstrap';
import slides from "@/helpers/slider.json";
import Image from "next/image";

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
                        <Image width={600} height={100} alt='slider' layout="responsive" src={`/image/slider2/${slide.image}`}
                        />

                    </Carousel.Item>
                ))
            }

        </Carousel>
    );
}
export default Slider