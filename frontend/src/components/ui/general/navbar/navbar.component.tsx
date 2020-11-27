import React, { useState } from 'react'
import { Container, Navbar, Nav } from 'react-bootstrap'
import { Link } from 'gatsby'
import classnames from 'classnames'

import Logo from '~/components/ui/general/logo/logo.component'
import MobileMenu from '~/components/ui/general/mobile-menu/mobile-menu.component'
import Button from '~/components/ui/general/button/button.component'

import DarkMenuOpenIcon from '~/assets/icons/menu-open-icon-dark.svg'

import styles from './navbar.module.scss'

const SNavbar = () => {
  const [isMenuShown, toggleMenu] = useState(false)

  const openClickHandler = () => {
    toggleMenu(true)
  }

  return (
    <Navbar
      fixed="top"
      className={classnames(styles.navbar, styles.navbar__onLight)}
    >
      <Container>
        <Logo />
        <DarkMenuOpenIcon
          className={styles.openIcon}
          onClick={openClickHandler}
        />

        <Nav className={styles.nav}>
          <Link to="/" className={styles.navLink}>
            About
          </Link>
          <Link to="/" className={styles.navLink}>
            Features
          </Link>
          <Link to="/" className={styles.navLink}>
            Pricing
          </Link>
          <Link to="/" className={styles.navLink}>
            Testimonials
          </Link>
          <Link to="/" className={styles.navLink}>
            Help
          </Link>
        </Nav>
        <Nav className={styles.nav}>
          <Link to="/" className={styles.navLinkMedium}>
            Sign in
          </Link>
          <Link to="/">
            <Button variant={'secondary'} className={styles.heroBtn}>
              Sign up
            </Button>
          </Link>
        </Nav>
      </Container>
      <MobileMenu isShown={isMenuShown} toggle={toggleMenu} />
    </Navbar>
  )
}

export default SNavbar
