import React from 'react'

import Slider from 'react-slick'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const Carousel = ({ children, slides }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: slides,
    slidesToScroll: 1,
  }
  return <Slider {...settings}>{children}</Slider>
}

export default Carousel
