import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import SButton from '~/components/ui/general/button/button.component'

import styles from './hero-section.module.scss'
import Img from 'gatsby-image'

const HeroSection = ({ hero }) => {
  return (
    <Container className={styles.heroBlock}>
      <Row>
        <Col xs="12" md="6">
          <h1>
            Want anything to be easy with{' '}
            <span className={styles.boldTitle}>LaslesVPN.</span>
          </h1>
          <p>
            Provide a network for all your needs with ease and fun using{' '}
            <span className={styles.boldText}>LaslesVPN</span> discover
            interesting features from us.
          </p>
          <SButton variant="primary" className={styles.heroBtn}>
            Get started
          </SButton>
        </Col>
        <Col xs="12" md="6" className={styles.imageWrapper}>
          <Img fluid={hero.image.fluid} className={styles.pic} />
        </Col>
      </Row>
    </Container>
  )
}
export default HeroSection
