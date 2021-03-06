import React from 'react'
import { Container } from 'react-bootstrap'
import { graphql, useStaticQuery } from 'gatsby'

import PlanItem from '~/components/ui/general/plan-item/plan-item.component'
import CheckItem from '~/assets/icons/simple-check.svg'

import { useWindowDimensions } from '~/helpers/useWindowDimensions.helper'

import Carousel from '~/components/ui/general/carousel/carousel.component'

import styles from './plan-section.module.scss'

const PlanSection = () => {
  const { width } = useWindowDimensions()
  const data = useStaticQuery(graphql`
    query {
      free: file(relativePath: { eq: "images/plans/Free.png" }) {
        childImageSharp {
          fluid(maxWidth: 145, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      standard: file(relativePath: { eq: "images/plans/Standard.png" }) {
        childImageSharp {
          fluid(maxWidth: 145, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      premium: file(relativePath: { eq: "images/plans/Premium.png" }) {
        childImageSharp {
          fluid(maxWidth: 145, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <Container fluid className={styles.fluidContainer}>
      <Container>
        <h2 className={styles.mainPlanTitle}>Choose Your Plan</h2>
        <p className={styles.mainPlanText}>
          Let's choose the package that is best for you and{<br />}explore it
          happily and cheerfully.
        </p>
        <div className={styles.itemWrapper}>
          {width > 767 && (
            <>
              <PlanItem
                image={data.free.childImageSharp.fluid}
                plan={'Free Plan'}
                check={<CheckItem />}
                firstFeature={'Unlimited Bandwitch'}
                secondFeature={'Encrypted Connection'}
                thirdFeature={'No Traffic Logs'}
                fourthFeature={'Works on All Devices'}
                fifth={styles.dNone}
                sixth={styles.dNone}
                price={
                  <p className={styles.priceStyles}>
                    <span className={styles.priceMediumStyles}>Free</span>
                  </p>
                }
              />
              <PlanItem
                image={data.standard.childImageSharp.fluid}
                plan={'Standard Plan'}
                check={<CheckItem />}
                firstFeature={'Unlimited Bandwitch'}
                secondFeature={'Encrypted Connection'}
                thirdFeature={'Yes Traffic Logs'}
                fourthFeature={'Works on All Devices'}
                fifthFeature={'Connect Anyware'}
                fifth={styles.featureWrapper}
                sixth={styles.dNone}
                price={
                  <p className={styles.priceStyles}>
                    <span className={styles.priceMediumStyles}>9$ </span>/ mo
                  </p>
                }
              />
              <PlanItem
                image={data.premium.childImageSharp.fluid}
                plan={'Premium Plan'}
                check={<CheckItem />}
                firstFeature={'Unlimited Bandwitch'}
                secondFeature={'Encrypted Connection'}
                thirdFeature={'Yes Traffic Logs'}
                fourthFeature={'Works on All Devices'}
                fifthFeature={'Connect Anyware'}
                sixthFeature={'Get New Features'}
                fifth={styles.featureWrapper}
                sixth={styles.featureWrapper}
                price={
                  <p className={styles.priceStyles}>
                    <span className={styles.priceMediumStyles}>12$ </span>/ mo
                  </p>
                }
              />
            </>
          )}
        </div>
        {width < 768 && (
          <Carousel slides={1}>
            <PlanItem
              image={data.free.childImageSharp.fluid}
              plan={'Free Plan'}
              check={<CheckItem />}
              firstFeature={'Unlimited Bandwitch'}
              secondFeature={'Encrypted Connection'}
              thirdFeature={'No Traffic Logs'}
              fourthFeature={'Works on All Devices'}
              fifth={styles.dNone}
              sixth={styles.dNone}
              price={
                <p className={styles.priceStyles}>
                  <span className={styles.priceMediumStyles}>Free</span>
                </p>
              }
            />
            <PlanItem
              image={data.standard.childImageSharp.fluid}
              plan={'Standard Plan'}
              check={<CheckItem />}
              firstFeature={'Unlimited Bandwitch'}
              secondFeature={'Encrypted Connection'}
              thirdFeature={'Yes Traffic Logs'}
              fourthFeature={'Works on All Devices'}
              fifthFeature={'Connect Anyware'}
              fifth={styles.featureWrapper}
              sixth={styles.dNone}
              price={
                <p className={styles.priceStyles}>
                  <span className={styles.priceMediumStyles}>9$ </span>/ mo
                </p>
              }
            />
            <PlanItem
              image={data.premium.childImageSharp.fluid}
              plan={'Premium Plan'}
              check={<CheckItem />}
              firstFeature={'Unlimited Bandwitch'}
              secondFeature={'Encrypted Connection'}
              thirdFeature={'Yes Traffic Logs'}
              fourthFeature={'Works on All Devices'}
              fifthFeature={'Connect Anyware'}
              sixthFeature={'Get New Features'}
              fifth={styles.featureWrapper}
              sixth={styles.featureWrapper}
              price={
                <p className={styles.priceStyles}>
                  <span className={styles.priceMediumStyles}>12$ </span>/ mo
                </p>
              }
            />
          </Carousel>
        )}
      </Container>
    </Container>
  )
}

export default PlanSection
