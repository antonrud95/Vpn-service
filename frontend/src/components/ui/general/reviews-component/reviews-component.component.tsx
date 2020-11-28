import React from 'react'
import Img from 'gatsby-image'
import styles from './reviews-section.module.scss'

const ReviewsComponent = ({ image, title, city, rate, stars, review }) => {
  return (
    <div>
      <div className={styles.reviewsHeader}>
        <div>
          <Img fluid={image} />
          <div>
            <h4>{title}</h4>
            <p>{city}</p>
          </div>
        </div>
        <div className={styles.rate}>
          <p>{rate}</p>
          <Img fluid={stars} />
        </div>
      </div>
      <p>{review}</p>
    </div>
  )
}

export default ReviewsComponent
