import React from 'react'
import { Container } from 'react-bootstrap'

import Carousel from '~/components/ui/general/carousel/carousel.component'
import ReviewsComponent from '~/components/ui/general/reviews-component/reviews-component.component'

import FC from '~/types/fc'
import { ReviewType } from '~/types/reviews.type'

import { useWindowDimensions } from '~/helpers/useWindowDimensions.helper'

import styles from './reviews-section.module.scss'

interface Props {
  reviews: ReviewType[]
}

const ReviewsSection: FC<Props> = ({ reviews }) => {
  const { width } = useWindowDimensions()
  return (
    <Container fluid className={styles.reviewsFluidContainer}>
      <Container>
        <h2>Trusted by Thousands of Happy Customer</h2>
        <p>
          These are the stories of our customers who have joined us with great
          pleasure when using this crazy feature.
        </p>
        {width < 992 && (
          <Carousel slides={width > 991 ? 3 : 1}>
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
        )}
      </Container>
      {width > 991 && (
        <div className={styles.maximumCarousel}>
          <Carousel slides={width > 991 ? 3 : 1}>
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
        </div>
      )}
    </Container>
  )
}

export default ReviewsSection
