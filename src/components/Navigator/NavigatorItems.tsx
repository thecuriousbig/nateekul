import styled from 'styled-components'
import { Link } from 'react-scroll'
import { Text } from '@components/Text'

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
  const menus = [
    { id: 1, section: 'Main', text: 'หน้าแรก' },
    { id: 2, section: 'About', text: 'เกี่ยวกับเรา' },
    { id: 3, section: 'Products', text: 'ตัวอย่างผลิตภัณฑ์' },
    { id: 4, section: 'Services', text: 'รูปแบบการบริการ' },
    { id: 5, section: 'Contact', text: 'ติดต่อเรา' }
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
