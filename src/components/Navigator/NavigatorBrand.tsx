import tw, { css, styled } from 'twin.macro'
import { Link } from 'react-scroll'

type Props = {
  text: string
  isSecondary?: boolean
}

const Brand = styled(Link)`
  ${tw`flex flex-row flex-nowrap`}
  ${tw`justify-center items-center`}
  ${tw`hover:cursor-pointer hover:opacity-80`}
`

const Logo = styled.img``

const titleStyles = css`
  ${tw`flex flex-col flex-nowrap w-auto p-2`}
`

const Text = styled.span`
  ${tw`text-base text-primary-white`}
`

const Title: React.FC<Props> = ({ text, isSecondary = false }) => {
  return <Text css={isSecondary && tw`text-xs`}>{text}</Text>
}

const NavigatorBrand: React.FC = () => {
  return (
    <Brand to="Home" smooth="easeInOutQuad">
      <Logo />
      <div css={titleStyles}>
        <Title text="บริษัท นทีกุล จำกัด" />
        <Title isSecondary text="NATEEKUL CO., LTD." />
      </div>
    </Brand>
  )
}

export default NavigatorBrand
