import tw, { styled, css } from 'twin.macro'
import { Link } from 'react-scroll'

const Nav = styled.ul`
  ${tw`flex flex-row flex-nowrap`}
  ${tw`justify-between items-center`}
`

const NavItem = styled.li`
  ${tw`mx-4 px-4 md:px-3`}
`

const linkStyle = css`
  ${tw`font-sans text-primary-white text-sm`}
  ${tw`leading-10`}
`

const NavigatorItems: React.FC = () => {
  const menus = [
    { id: 1, section: 'Home' },
    { id: 2, section: 'About' },
    { id: 3, section: 'Examples' },
    { id: 4, section: 'Services' },
    { id: 5, section: 'Contact' }
  ]
  return (
    <Nav>
      {menus.map(({ id, section }) => (
        <NavItem key={id}>
          <Link to={section} smooth="easeInOutQuad" css={linkStyle}>
            {section}
          </Link>
        </NavItem>
      ))}
    </Nav>
  )
}

export default NavigatorItems
