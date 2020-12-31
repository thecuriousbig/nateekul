import tw from 'twin.macro'
import { Section } from '@components/Section'
import { Container } from '@components/Container'
import { Text } from '@components/Text'
import { COLORS } from '@constants/color'

const containerStyle = tw`flex flex-col justify-start items-center pt-16`

const topicStyle = tw`border-0 border-b-4 border-secondary-black-b300 px-2 py-3`

const About: React.FC = () => {
  return (
    <Section sectionID="About" height="25rem" backgroundColor={COLORS.PRIMARY.WHITE}>
      <Container styles={containerStyle}>
        <Text variant="xxl" color={COLORS.PRIMARY.BLACK} styles={topicStyle}>
          เกี่ยวกับเรา
        </Text>
      </Container>
    </Section>
  )
}

export default About
