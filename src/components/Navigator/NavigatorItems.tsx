import styled from 'styled-components'
import { Link } from 'react-scroll'
import { Text } from '@components/Text'
import { useTranslation } from '@localized'

const Nav = styled('ul')`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  list-style-type: none;
`

const NavItem = styled('li')`
  margin: 0 0.5rem;
  padding: 0.5rem;
  :hover {
    cursor: pointer;
    opacity: 0.8;
  }
`

const NavigatorItems: React.FC = () => {
  const { t } = useTranslation('common')
  const menus = [
    { id: 1, section: 'Main', text: t('menu.main') },
    { id: 2, section: 'About', text: t('menu.about') },
    { id: 3, section: 'Products', text: t('menu.product') },
    { id: 4, section: 'Services', text: t('menu.services') },
    { id: 5, section: 'Contact', text: t('menu.contact') }
  ]
  return (
    <Nav>
      {menus.map(({ id, section, text }) => (
        <NavItem key={id}>
          <Link to={section} smooth="easeInOutQuint">
            <Text size="sm" color="white">
              {text}
            </Text>
          </Link>
        </NavItem>
      ))}
    </Nav>
  )
}

export default NavigatorItems
