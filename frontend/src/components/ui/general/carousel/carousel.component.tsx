import React, { ReactNodeArray } from 'react'
import FC from '~/types/fc'

import Slider from 'react-slick'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

interface Props {
  children: ReactNodeArray
  slides: any
}

const Carousel: FC<Props> = ({ children, slides }) => {
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
