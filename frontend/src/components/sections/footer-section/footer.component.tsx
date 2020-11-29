import React from 'react'
import { Container } from 'react-bootstrap'
import SButton from '~/components/ui/general/button/button.component'

import styles from './footer.module.scss'

const FooterSection = () => {
  return (
    <Container fluid className={styles.footerSection}>
      <Container className={styles.footerContainer}>
        <div className={styles.footerHatContent}>
          <h2 className={styles.footerTitle}>
            Subscribe Now for Get Special Features!
          </h2>
          <p className={styles.footerText}>
            Let's subscribe with us and find the fun.
          </p>
        </div>
        <div className={styles.btnWrapper}>
          <SButton variant="primary" className={styles.footerBtn}>
            Subscribe Now
          </SButton>
        </div>
      </Container>
    </Container>
  )
}

export default FooterSection
