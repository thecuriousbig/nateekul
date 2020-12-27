import tw, { styled } from 'twin.macro'

type Props = {
  className?: string
}

const StyledContainer = styled.div`
  ${tw`flex`}
  ${tw`w-full md:w-9/12 lg:w-8/12`}
  ${tw`mx-auto px-4`}
`

const Container: React.FC<Props> = ({ children }) => {
  return <StyledContainer>{children}</StyledContainer>
}

export default Container
