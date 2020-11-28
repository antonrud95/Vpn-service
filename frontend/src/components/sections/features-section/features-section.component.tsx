import React from 'react'
import Img from 'gatsby-image'
import { Container, Row, Col } from 'react-bootstrap'

import CheckIcon from '~/assets/icons/check.svg'

import styles from './features-section.module.scss'

const FeaturesSection = ({ features }) => {
  return (
    <Container className={styles.featuresContainer}>
      <Row>
        <Col xs="12" lg="6">
          <Img fluid={features.image.fluid} className={styles.imageStyles} />
        </Col>
        <Col xs="12" lg="6" className={styles.contentWrapper}>
          <h2 className={styles.featuresMainTitle}>{features.title}</h2>
          <p className={styles.descriptionStyles}>{features.description}</p>
          <p className={styles.descriptionSecondary}>
            <CheckIcon className={styles.checkStyles} />
            Powerfull online protection.
          </p>
          <p className={styles.descriptionSecondary}>
            <CheckIcon className={styles.checkStyles} />
            Internet without borders.
          </p>
          <p className={styles.descriptionSecondary}>
            <CheckIcon className={styles.checkStyles} />
            Supercharged VPN
          </p>
          <p className={styles.descriptionSecondary}>
            <CheckIcon className={styles.checkStyles} />
            No specific time limits.
          </p>
        </Col>
      </Row>
    </Container>
  )
}

export default FeaturesSection
