import { Props } from 'react'
import tw from 'twin.macro'
import { Section } from '@components/Section'
import { Container } from '@components/Container'
import { COLORS } from '@constants/color'

type Props = {}

const containerStyle = tw`flex flex-row justify-center items-center`

const Divider: React.FC<Props> = () => {
  return (
    <Section sectionID="Divider" backgroundColor={COLORS.PRIMARY.BLACK} height="16rem">
      <Container styles={containerStyle}>
        <p>a</p>
        <p>b</p>
        <p>c</p>
      </Container>
    </Section>
  )
}

export default Divider
