import Image from 'next/image'
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

const Logo = styled(Image)`
  background-color: ${(props) => props.theme.colors.primary.WHITE};
  border-radius: 50%;
`

const Title = styled('div')`
  display: flex;
  flex-flow: column nowrap;
  width: auto;
  padding: 0.5rem;
`

const NavigatorBrand: React.FC = () => {
  return (
    <Brand to="Home" smooth="easeInOutQuad">
      <Logo src="/static/icons/logo.svg" height={40} width={40} />
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
