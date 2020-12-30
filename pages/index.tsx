import { Fragment } from 'react'
import { Main } from '@layouts/Main'
import { Navigator } from '@components/Navigator'

const Home: React.FC = () => {
  return (
    <Fragment>
      <Navigator />
      <Main />
    </Fragment>
  )
}

export default Home
