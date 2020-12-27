import tw, { styled, css } from 'twin.macro'
import { Link } from 'react-scroll'

const Nav = styled.ul`
  ${tw`flex flex-row flex-nowrap`}
  ${tw`justify-between items-center`}
`

const NavItem = styled.li`
  ${tw`mx-2 px-2`}
  ${tw`hover:cursor-pointer hover:opacity-80`}
`

const linkStyle = css`
  ${tw`font-sans text-primary-white text-sm`}
  ${tw`leading-10`}
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
          <Link to={section} smooth="easeInOutQuad" css={linkStyle}>
            {text}
          </Link>
        </NavItem>
      ))}
    </Nav>
  )
}

export default NavigatorItems
