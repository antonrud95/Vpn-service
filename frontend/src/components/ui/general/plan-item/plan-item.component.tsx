import React, { useState } from 'react'
import Img, { FluidObject } from 'gatsby-image'
import SButton from '~/components/ui/general/button/button.component'

import styles from './plan-item.module.scss'

import FC from '~/types/fc'

interface Props {
  image: FluidObject
  plan: string
  check: any
  firstFeature: string
  secondFeature: string
  thirdFeature: string
  fourthFeature: string
  fifthFeature?: string
  sixthFeature?: string
  fifth?: string
  sixth?: string
  price: any
}

const PlanItem: FC<Props> = ({
  image,
  plan,
  check,
  firstFeature,
  secondFeature,
  thirdFeature,
  fourthFeature,
  fifthFeature,
  sixthFeature,
  fifth,
  sixth,
  price,
}) => {
  const [hover, setHover] = useState(false)
  const toggleHover = () => {
    setHover(!hover)
  }

  return (
    <div
      className={!hover ? styles.borderComponent : styles.borderComponentRed}
      onMouseEnter={toggleHover}
      onMouseLeave={toggleHover}
    >
      <Img fluid={image} className={styles.imageStyles} />
      <h4>{plan}</h4>
      <div className={styles.featuresContainer}>
        <div className={styles.featureWrapper}>
          {check}
          <p className={styles.featureText}>{firstFeature}</p>
        </div>
        <div className={styles.featureWrapper}>
          {check}
          <p className={styles.featureText}>{secondFeature}</p>
        </div>
        <div className={styles.featureWrapper}>
          {check}
          <p className={styles.featureText}>{thirdFeature}</p>
        </div>
        <div className={styles.featureWrapper}>
          {check}
          <p className={styles.featureText}>{fourthFeature}</p>
        </div>
        <div className={fifth}>
          {check}
          <p className={styles.featureText}>{fifthFeature}</p>
        </div>
        <div className={sixth}>
          {check}
          <p className={styles.featureText}>{sixthFeature}</p>
        </div>
      </div>
      <div className={styles.buttonWrapper}>
        {price}
        <SButton
          variant="secondary"
          className={!hover ? styles.planBtn : styles.planBtnRed}
        >
          Select
        </SButton>
      </div>
    </div>
  )
}

export default PlanItem
