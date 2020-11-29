import React from 'react'
import { graphql } from 'gatsby'

import Layout from '~/components/layout'
import SEO from '~/components/seo.component'
import HeroSection from '~/components/sections/hero-section/hero-section.component'
import AdvantagesSection from '~/components/sections/advantages-section/advantages-section.component'
import FeaturesSection from '~/components/sections/features-section/features-section.component'
import PlanSection from '~/components/sections/plan-section/plan-section.component'
import NetworkSection from '~/components/sections/network-section/network-section.component'
import ReviewsSection from '~/components/sections/reviews-section/reviews-section.component'
import FooterSection from '~/components/sections/footer-section/footer.component'

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Lasles VPN" />
    <HeroSection hero={data.datoCmsHero} />
    <AdvantagesSection />
    <FeaturesSection features={data.datoCmsFeature} />
    <PlanSection />
    <NetworkSection />
    <ReviewsSection reviews={data.allDatoCmsReview.nodes} />
    <FooterSection />
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
    datoCmsFeature {
      description
      title
      image {
        fluid {
          ...GatsbyDatoCmsFluid
        }
      }
    }
    allDatoCmsReview {
      nodes {
        image {
          fluid {
            ...GatsbyDatoCmsFluid
          }
        }
        name
        review
        stars
        star {
          fluid {
            ...GatsbyDatoCmsFluid
          }
        }
        id
        city
      }
    }
  }
`

export default IndexPage
