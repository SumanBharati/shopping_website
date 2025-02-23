"use client";

import React from 'react'
import Slider from 'react-slick'
import Slide from './Slide'

const ShoppingSlider = () => {
    var settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        pauseOnHover: false,
    };

    const slideData = [
        {
            id: 0,
            img: "/CyberMondaySaleBanner.jpg",
            title: "Trending Items",
            mainTitle: "WOMEN'S LATEST FASHION SALE",
            price: "$20",
        },
        {
            id: 1,
            img: "/BlackFridaySaleBanner.jpg",
            title: "Trending Accessories",
            mainTitle: "MODERN SUNGLASSES",
            price: "$15",
        },
        // {
        //     id: 2,
        //     img: "/SaleBanner.jpg",
        //     title: "Trending Accessories",
        //     mainTitle: "MODERN SUNGLASSES",
        //     price: "$15",
        // },
    ]
  return (
    <div>
        <div className='container pt-6 lg:pt-0'>
            <Slider {...settings}>
                {slideData.map((item) => (
                    <Slide 
                    key={item.id} 
                    img={item.img}
                    title={item.title}
                    mainTitle={item.mainTitle}
                    price={item.price}
                    />
                ))}
            </Slider>
        </div>
    </div>
  )
}

export default ShoppingSlider