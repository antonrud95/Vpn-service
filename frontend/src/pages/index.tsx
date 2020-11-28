import React from 'react'
import { graphql } from 'gatsby'

import Layout from '~/components/layout'
import SEO from '~/components/seo.component'
import HeroSection from '~/components/sections/hero-section/hero-section.component'

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Lasles VPN" />
    <HeroSection hero={data.datoCmsHero} />
  </Layout>
)

export const query = graphql`
  query {
    datoCmsHero {
      id
      description
      image {
        fluid {
          ...GatsbyDatoCmsFluid
        }
      }
    }
  }
`

export default IndexPage
