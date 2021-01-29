import Image from 'next/image'
import styled from 'styled-components'
import { Link } from 'react-scroll'
import { Text } from '@components/Text'
import { Icon } from '@components/Icon'
import { useTranslation } from '@localized'

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
  const { t } = useTranslation('common')
  return (
    <Brand to="Home" smooth="easeInOutQuad">
      <Logo src="/static/icons/logo.svg" width={40} height={40} />
      <Title>
        <Text size="md" color="white">
          {t('name.th')}
        </Text>
        <Text size="xs" color="white">
          {t('name.en')}
        </Text>
      </Title>
    </Brand>
  )
}

export default NavigatorBrand
