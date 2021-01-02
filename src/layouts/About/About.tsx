import styled from 'styled-components'
import { Section } from '@components/Section'
import { Container } from '@components/Container'
import { Text } from '@components/Text'
import { COLORS } from '@constants/color'

const SContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding-top: 4rem;
`
const TitleText = styled(Text)`
  border-width: 0px;
  border-bottom: 4px;
  border-color: ${props => props.theme.colors.secondary.BLACK300};
  padding: 0.75rem, 0.5rem;
`

const About: React.FC = () => {
  return (
    <Section sectionID="About" height="25rem" backgroundColor={COLORS.PRIMARY.WHITE}>
      <SContainer>
        <TitleText size="2xl" color="black">
          เกี่ยวกับเรา
        </TitleText>
      </SContainer>
    </Section>
  )
}

export default About
