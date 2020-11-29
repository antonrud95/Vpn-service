import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
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
        <Row>
          <Col xs="12" md="5">
            <div className={styles.containerLinks}>
              <Logo />
              <p className={styles.containerText}>
                <span className={styles.textSpan}>LaslesVPN</span> is a private
                virtual network that has unique features and has high security.
              </p>
              <div className={styles.linksWrapper}>
                <Link to="/">
                  <div className={styles.linksContent}>
                    <FontAwesomeIcon
                      icon={faFacebookF}
                      className={styles.social}
                    />
                  </div>
                </Link>
                <Link to="/">
                  <div className={styles.linksContent}>
                    <FontAwesomeIcon
                      icon={faTwitter}
                      className={styles.social}
                    />
                  </div>
                </Link>
                <Link to="/">
                  <div className={styles.linksContent}>
                    <FontAwesomeIcon
                      icon={faInstagram}
                      className={styles.social}
                    />
                  </div>
                </Link>
              </div>
              <p className={styles.footerInfo}>
                ©2020Lasles<span className={styles.footerInfoSpan}>VPN</span>
              </p>
            </div>
          </Col>
          <Col xs="6" sm="4" md="2">
            <p className={styles.footerLinksTitle}>Product</p>
            <Link to="/" className={styles.footerLinksItem}>
              Download
            </Link>
            <Link to="/" className={styles.footerLinksItem}>
              Pricing
            </Link>
            <Link to="/" className={styles.footerLinksItem}>
              Locations
            </Link>
            <Link to="/" className={styles.footerLinksItem}>
              Server
            </Link>
            <Link to="/" className={styles.footerLinksItem}>
              Countries
            </Link>
            <Link to="/" className={styles.footerLinksItem}>
              Blog
            </Link>
          </Col>
          <Col xs="6" sm="4" md="2">
            <p className={styles.footerLinksTitle}>Engage</p>
            <Link to="/" className={styles.footerLinksItem}>
              LaslesVPN ?
            </Link>
            <Link to="/" className={styles.footerLinksItem}>
              FAQ
            </Link>
            <Link to="/" className={styles.footerLinksItem}>
              Tutorials
            </Link>
            <Link to="/" className={styles.footerLinksItem}>
              About Us
            </Link>
            <Link to="/" className={styles.footerLinksItem}>
              Privacy Policy
            </Link>
            <Link to="/" className={styles.footerLinksItem}>
              Terms of Service
            </Link>
          </Col>
          <Col xs="6" sm="4" md="3">
            <p className={styles.footerLinksTitle}>Earn money</p>
            <Link to="/" className={styles.footerLinksItem}>
              Affiliate
            </Link>
            <Link to="/" className={styles.footerLinksItem}>
              Become Partner
            </Link>
          </Col>
        </Row>
      </Container>
    </Container>
  )
}

export default FooterSection
