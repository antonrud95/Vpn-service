import React from 'react'
import { Container } from 'react-bootstrap'

import Carousel from '~/components/ui/general/carousel/carousel.component'
import ReviewsComponent from '~/components/ui/general/reviews-component/reviews-component.component'

import FC from '~/types/fc'
import { ReviewType } from '~/types/reviews.type'

import styles from './reviews-section.module.scss'

interface Props {
  reviews: ReviewType[]
}

const ReviewsSection: FC<Props> = ({ reviews }) => {
  return (
    <Container fluid>
      <Container>
        <h2>Trusted by Thousands of Happy Customer</h2>
        <p>
          These are the stories of our customers who have joined us with great
          pleasure when using this crazy feature.
        </p>
        <Carousel slides={1}>
          {reviews.map((review: ReviewType, index) => {
            return (
              <ReviewsComponent
                key={review.id}
                image={review.image.fluid}
                title={review.name}
                city={review.city}
                stars={review.star.fluid}
                rate={review.stars}
                review={review.review}
              />
            )
          })}
        </Carousel>
      </Container>
    </Container>
  )
}

export default ReviewsSection
