import React from 'react'
import { Container } from 'react-bootstrap'
import SButton from '~/components/ui/general/button/button.component'
import Logo from '~/components/ui/general/logo/logo.component'
import { Link } from 'gatsby'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faFacebookF,
  faTwitter,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons'

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
      <Container>
        <div className={styles.containerLinks}>
          <Logo />
          <p className={styles.containerText}>
            <span className={styles.textSpan}>LaslesVPN</span> is a private
            virtual network that has unique features and has high security.
          </p>
          <div className={styles.linksWrapper}>
            <Link to="/">
              <div className={styles.linksContent}>
                <FontAwesomeIcon icon={faFacebookF} className={styles.social} />
              </div>
            </Link>
            <Link to="/">
              <div className={styles.linksContent}>
                <FontAwesomeIcon icon={faTwitter} className={styles.social} />
              </div>
            </Link>
            <Link to="/">
              <div className={styles.linksContent}>
                <FontAwesomeIcon icon={faInstagram} className={styles.social} />
              </div>
            </Link>
          </div>
          <p>
            ©2020Lasles<span>VPN</span>
          </p>
        </div>
      </Container>
    </Container>
  )
}

export default FooterSection
