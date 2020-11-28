import React from 'react'
import Img from 'gatsby-image'
import styles from './reviews-component.module.scss'

const ReviewsComponent = ({ image, title, city, rate, stars, review }) => {
  return (
    <div className={styles.reviewsWrapper}>
      <div className={styles.reviewsHeader}>
        <div className={styles.reviewsUser}>
          <Img fluid={image} className={styles.iconImage} />
          <div>
            <h4 className={styles.reviewName}>{title}</h4>
            <p className={styles.reviewCity}>{city}</p>
          </div>
        </div>
        <div className={styles.rate}>
          <p className={styles.rateText}>{rate}</p>
          <Img fluid={stars} className={styles.starImage} />
        </div>
      </div>
      <p>{review}</p>
    </div>
  )
}

export default ReviewsComponent
