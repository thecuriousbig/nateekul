import { Fragment } from 'react'
import { Main } from '@layouts/Main'
import { Navigator } from '@components/Navigator'
import { Slogan } from '@layouts/Slogan'
import { About } from '@layouts/About'

const Home: React.FC = () => {
  return (
    <Fragment>
      <Navigator />
      <Main />
      <Slogan />
      <About />
    </Fragment>
  )
}

export default Home
