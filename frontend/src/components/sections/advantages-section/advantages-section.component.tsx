import React from 'react'
import { Container } from 'react-bootstrap'

import AdvantagesComponent from '~/components/ui/general/advantages-component/advantages-component.component'
import UsersIcon from '~/assets/images/advantages/user.svg'
import LocationsIcon from '~/assets/images/advantages/location.svg'
import ServersIcon from '~/assets/images/advantages/server.svg'

import styles from './advantages-section.module.scss'

const AdvantagesSection = () => {
  return (
    <Container className={styles.advantagesContainer}>
      <AdvantagesComponent image={<UsersIcon />} title={'90+'} text={'Users'} />
      <AdvantagesComponent
        image={<LocationsIcon />}
        title={'30+'}
        text={'Locations'}
      />
      <AdvantagesComponent
        image={<ServersIcon />}
        title={'50+'}
        text={'Servers'}
      />
    </Container>
  )
}

export default AdvantagesSection
