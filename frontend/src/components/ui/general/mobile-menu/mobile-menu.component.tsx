import React, { useEffect, useRef, useState } from 'react'
import { Container } from 'react-bootstrap'
import { Link } from 'gatsby'

import Logo from '~/components/ui/general/logo/logo.component'

import FC from '~/types/fc'

import CloseIcon from '~/assets/icons/menu-close-icon.svg'

import styles from './mobile-menu.module.scss'
import Button from '~/components/ui/general/button/button.component'

import {
  disableBodyScroll,
  enableBodyScroll,
  clearAllBodyScrollLocks,
} from 'body-scroll-lock'

interface Props {
  isShown: boolean
  toggle: (value: boolean) => void
}

const MobileMenu: FC<Props> = ({ isShown, toggle }) => {
  const shownClass = [styles.root, styles.root__shown].join(' ')

  const menuRef = useRef(null)
  useEffect(() => {
    isShown ? disableBodyScroll(menuRef.current) : clearAllBodyScrollLocks()
  }, [isShown])

  const closeClickHandler = (e) => {
    e.preventDefault()
    enableBodyScroll(menuRef.current)
    clearAllBodyScrollLocks()
    toggle(false)
  }

  return (
    <div className={isShown ? shownClass : styles.root} ref={menuRef}>
      <Container style={{ padding: 0 }}>
        <Logo />
        <CloseIcon onClick={closeClickHandler} />
      </Container>
      <Container className={styles.linkBlock}>
        <Link to="/" className={styles.link}>
          About
        </Link>
        <Link to="/" className={styles.link}>
          Features
        </Link>
        <Link to="/" className={styles.link}>
          Pricing
        </Link>
        <Link to="/" className={styles.link}>
          Testimonials
        </Link>
        <Link to="/" className={styles.link}>
          Help
        </Link>
        <Link to="/" className={styles.navLinkMedium}>
          Sign in
        </Link>
        <Link to="/">
          <Button variant={'secondary'} className={styles.heroBtn}>
            Sign up
          </Button>
        </Link>
      </Container>
    </div>
  )
}

export default MobileMenu
