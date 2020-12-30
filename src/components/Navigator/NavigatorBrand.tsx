import tw, { styled } from 'twin.macro'
import { Link } from 'react-scroll'
import { Text } from '@components/Text'
import { COLORS } from '@constants/color'

const Brand = styled(Link)`
  ${tw`flex flex-row flex-nowrap`}
  ${tw`justify-center items-center`}
  ${tw`hover:cursor-pointer hover:opacity-80`}
`

const Logo = styled.img``

const TitleContainer = styled.div`
  ${tw`flex flex-col flex-nowrap w-auto p-2`}
`

const NavigatorBrand: React.FC = () => {
  return (
    <Brand to="Home" smooth="easeInOutQuad">
      <Logo />
      <TitleContainer>
        <Text variant="md" color={COLORS.PRIMARY.WHITE}>
          บริษัท นทีกุล จำกัด
        </Text>
        <Text variant="xs" color={COLORS.PRIMARY.WHITE}>
          NATEEKUL CO., LTD.
        </Text>
      </TitleContainer>
    </Brand>
  )
}

export default NavigatorBrand
