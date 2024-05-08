"use client"
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import "swiper/css"
import ProductItem from './product-item'

const ProductInSameCategory = ({ products }) => {
    return (
        <div>
            <h2>
                Products in same category
            </h2>

            <Swiper
                spaceBetween={50}
                slidesPerView={1}
                navigation={{
                    prevEl: '.prev',
                    nextEl: '.next'
                }}

                breakpoints={{
                    576: {
                        slidesPerView: 2
                    },
                    992: {
                        slidesPerView: 3
                    },
                    1400: {
                        slidesPerView: 4
                    }
                }}
            >

                {products.map((item) => <SwiperSlide key={item.id}>
                    < ProductItem {...item} />
                </SwiperSlide>)}

            </Swiper>
        </div>
    )
}

export default ProductInSameCategory