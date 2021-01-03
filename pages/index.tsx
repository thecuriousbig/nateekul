import { Main } from '@layouts/Main'
import { Navigator } from '@components/Navigator'
import { Slogan } from '@layouts/Slogan'
import { About } from '@layouts/About'
import { Product } from '@layouts/Product'
import { Section } from '@components/Section'
import { COLORS } from '@constants/color'

const Home: React.FC = () => {
  return (
    <>
      <Navigator />
      <Main />
      <Slogan />
      <About />
      <Section sectionID="Divider" backgroundColor={COLORS.PRIMARY.WHITE} height="10rem" />
      <Product />
    </>
  )
}

export default Home
