import { Main } from '@layouts/Main'
import { Navigator } from '@components/Navigator'
import { Slogan } from '@layouts/Slogan'
import { About } from '@layouts/About'
import { Product } from '@layouts/Product'
import { ServiceType } from '@layouts/ServiceType'
import { Contact } from '@layouts/Contact'

const Home: React.FC = () => {
  return (
    <>
      <Navigator />
      <Main />
      <Slogan />
      <About />
      <Product />
      <ServiceType />
      <Contact />
    </>
  )
}

export default Home
