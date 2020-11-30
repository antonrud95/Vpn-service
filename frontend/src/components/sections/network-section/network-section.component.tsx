import React from 'react'
import { Container } from 'react-bootstrap'
import Img from 'gatsby-image'
import { graphql, useStaticQuery } from 'gatsby'

import styles from './network-section.module.scss'

const NetworkSection = () => {
  const data = useStaticQuery(graphql`
    query {
      map: file(relativePath: { eq: "images/network/Huge-global.png" }) {
        childImageSharp {
          fluid(maxWidth: 1060, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      sponsors: file(relativePath: { eq: "images/network/Sponsored.png" }) {
        childImageSharp {
          fluid(maxWidth: 1135, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <Container className={styles.networkContainer}>
      <h2 className={styles.networkTitle}>
        Huge Global Network{<br />} of Fast VPN
      </h2>
      <p className={styles.networkText}>
        See LaslesVPN everywhere to make it easier for you when you move{<br />}
        locations.
      </p>
      <Img fluid={data.map.childImageSharp.fluid} className={styles.mapImage} />
      <Img
        fluid={data.sponsors.childImageSharp.fluid}
        className={styles.sponsorsImage}
      />
    </Container>
  )
}

export default NetworkSection
