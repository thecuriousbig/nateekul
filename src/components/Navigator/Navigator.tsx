import tw, { styled } from 'twin.macro'
import NavigatorBrand from './NavigatorBrand'
import NavigatorItems from './NavigatorItems'
import { Container } from '@components/Container'

const NavBar = styled.header`
  ${tw`w-full`}
  ${tw`sticky`}
  ${tw`bg-primary-black m-0 border-none shadow-none`}
`

const containerStyle = tw`flex flex-row flex-nowrap justify-between`

const Navigator: React.FC = () => {
  return (
    <NavBar>
      <Container styles={containerStyle}>
        <NavigatorBrand />
        <NavigatorItems />
      </Container>
    </NavBar>
  )
}

export default Navigator
