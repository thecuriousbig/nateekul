import { styled } from 'twin.macro'

const Layout = styled.div``

const Main: React.FC = ({ children }) => {
  return <Layout>{children}</Layout>
}

export default Main
