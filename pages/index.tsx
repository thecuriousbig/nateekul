import { Main } from '@layouts/Main'
import { Navigator } from '@components/Navigator'
import { Slogan } from '@layouts/Slogan'
import { About } from '@layouts/About'

const Home: React.FC = () => {
  return (
    <>
      <Navigator />
      <Main />
      <Slogan />
      <About />
    </>
  )
}

export default Home
