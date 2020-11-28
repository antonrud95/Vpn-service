import React from 'react'
import { Container } from 'react-bootstrap'

import Carousel from '~/components/ui/general/carousel/carousel.component'

import styles from './reviews-section.module.scss'

const ReviewsSection = () => {
  return (
    <Container fluid>
      <Container>
        <h2>Trusted by Thousands of Happy Customer</h2>
        <p>
          These are the stories of our customers who have joined us with great
          pleasure when using this crazy feature.
        </p>
        {/* <Carousel>

                </Carousel> */}
      </Container>
    </Container>
  )
}

export default ReviewsSection
