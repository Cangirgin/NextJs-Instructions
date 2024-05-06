"use client"

import Image from 'next/image';
import React, { useState } from 'react'
import { Carousel } from 'react-bootstrap';

const Slider = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };

    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
                <Image alt='slider1' src="/image/slider-01.jpg" width="1640" height="624" />
            </Carousel.Item>
            <Carousel.Item>
                <Image alt='slider2' src="/image/slider-02.jpg" width={1640} height={624} />

            </Carousel.Item>
        </Carousel>
    );
}
export default Slider