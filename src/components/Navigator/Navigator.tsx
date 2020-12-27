import tw, { styled } from 'twin.macro'
import NavigatorBrand from './NavigatorBrand'
import NavigatorItems from './NavigatorItems'
import { Container } from '@components/Container'

const NavBar = styled.header`
  ${tw`w-full`}
  ${tw`fixed top-0`}
  ${tw`bg-primary-black m-0 border-none shadow-none`}
`

const FlexContainer = styled(Container)`
  ${tw`flex flex-row flex-nowrap justify-between`}
`

const Navigator: React.FC = () => {
  return (
    <NavBar>
      <FlexContainer>
        <NavigatorBrand />
        <NavigatorItems />
      </FlexContainer>
    </NavBar>
  )
}

export default Navigator
