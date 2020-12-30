import tw, { styled, css } from 'twin.macro'
import { Link } from 'react-scroll'
import { Text } from '@components/Text'
import { COLORS } from '@constants/color'

const Nav = styled.ul`
  ${tw`flex flex-row flex-nowrap`}
  ${tw`justify-between items-center`}
`

const NavItem = styled.li`
  ${tw`m-2 p-2`}
  ${tw`hover:cursor-pointer hover:opacity-80`}
`

const NavigatorItems: React.FC = () => {
  const menus = [
    { id: 1, section: 'Home', text: 'หน้าแรก' },
    { id: 2, section: 'About', text: 'เกี่ยวกับเรา' },
    { id: 3, section: 'Examples', text: 'ตัวอย่างผลิตภัณฑ์' },
    { id: 4, section: 'Services', text: 'รูปแบบการบริการ' },
    { id: 5, section: 'Contact', text: 'ติดต่อเรา' }
  ]
  return (
    <Nav>
      {menus.map(({ id, section, text }) => (
        <NavItem key={id}>
          <Link to={section} smooth="easeInOutQuad">
            <Text variant="sm" color={COLORS.PRIMARY.WHITE}>
              {text}
            </Text>
          </Link>
        </NavItem>
      ))}
    </Nav>
  )
}

export default NavigatorItems
