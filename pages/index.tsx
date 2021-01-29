import { css } from 'styled-components'
import { Main } from '@layouts/Main'
import { Navigator } from '@components/Navigator'
import { Slogan } from '@layouts/Slogan'
import { About } from '@layouts/About'
import { Product } from '@layouts/Product'
import { Contact } from '@layouts/Contact'
import { Section } from '@components/Section'

const Home: React.FC = () => {
  return (
    <>
      <Navigator />
      <Main />
      <Slogan />
      <About />
      <Section
        sectionID="Divider"
        backgroundColor="linear-gradient(180deg, rgba(196, 196, 196, 0) 43.23%, #c4c4c4 100%);"
        height="10rem"
      />
      <Product />
      <Contact />
    </>
  )
}

export default Home
