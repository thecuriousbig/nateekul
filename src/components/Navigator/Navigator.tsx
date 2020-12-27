import tw, { styled } from 'twin.macro'
import NavigatorBrand from './NavigatorBrand'
import NavigatorItems from './NavigatorItems'
import { Container } from '@components/Container'

const NavBar = styled.header`
  ${tw`w-full`}
  ${tw`fixed top-0`}
  ${tw`bg-primary-black m-0 border-none shadow-none`}
`

const Navigator: React.FC = () => {
  return (
    <NavBar>
      <Container css={[tw`justify-between`]}>
        <NavigatorBrand />
        <NavigatorItems />
      </Container>
    </NavBar>
  )
}

export default Navigator
