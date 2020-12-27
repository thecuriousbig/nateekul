import tw, { styled } from 'twin.macro'
import { Link } from 'react-scroll'

const Brand = styled.div`
  ${tw`flex flex-row flex-nowrap`}
  ${tw`justify-center items-center`}
`

const Logo = styled.img``

const Text = styled.span`
  ${tw`font-sans text-base text-primary-white`}
`

const Title: React.FC<{ text: string }> = ({ text }) => {
  return <Text>{text}</Text>
}

const NavigatorBrand: React.FC = () => {
  return (
    <Brand>
      <Logo />
      <div tw="flex flex-col flex-nowrap w-auto p-2">
        <Title text="บริษัท นทีกุล จำกัด" />
        <Title text="NATEEKUL CO., LTD." />
      </div>
    </Brand>
  )
}

export default NavigatorBrand
