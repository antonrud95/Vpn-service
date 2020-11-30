import React from 'react'

import styles from './advantages-component.module.scss'

const AdvantagesComponent = ({ image, title, text }) => {
  return (
    <div className={styles.componentWrapper}>
      <div className={styles.imageWrapper}>{image}</div>
      <div>
        <h3>{title}</h3>
        <p className={styles.textBigger}>{text}</p>
      </div>
    </div>
  )
}

export default AdvantagesComponent
