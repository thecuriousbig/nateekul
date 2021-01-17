import styled from 'styled-components'
import NavigatorBrand from './NavigatorBrand'
import NavigatorItems from './NavigatorItems'
import { Container } from '@components/Container'

const NavBar = styled('header')`
  width: 100%;
  position: fixed;
  background-color: ${(props) => props.theme.colors.secondary.BLACK900};
  margin: 0;
  border: none;
  box-shadow: none;
  z-index: 1;
`

const FlexContainer = styled(Container)`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
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
