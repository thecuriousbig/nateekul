import { Fragment } from 'react'
import { Home } from '@layouts/Home'
import { Navigator } from '@components/Navigator'

const Main: React.FC = () => {
  return (
    <Fragment>
      <Navigator />
      <Home />
    </Fragment>
  )
}

export default Main
