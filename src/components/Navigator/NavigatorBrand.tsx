import styled from 'styled-components'
import { Link } from 'react-scroll'
import { Text } from '@components/Text'

const Brand = styled(Link)`
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  :hover {
    cursor: pointer;
    opacity: 0.8;
  }
`

const Logo = styled.img``

const Title = styled('div')`
  display: flex;
  flex-flow: column nowrap;
  width: auto;
  padding: 0.5rem;
`

const NavigatorBrand: React.FC = () => {
  return (
    <Brand to="Home" smooth="easeInOutQuad">
      <Logo />
      <Title>
        <Text size="md" color="white">
          บริษัท นทีกุล จำกัด
        </Text>
        <Text size="xs" color="white">
          NATEEKUL CO., LTD.
        </Text>
      </Title>
    </Brand>
  )
}

export default NavigatorBrand
