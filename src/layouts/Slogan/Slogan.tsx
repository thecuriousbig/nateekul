import styled from 'styled-components'
import { Section } from '@components/Section'
import { Container } from '@components/Container'
import { COLORS } from '@constants/color'

const SContainer = styled(Container)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

const Slogan: React.FC = () => {
  return (
    <Section sectionID="Slogan" backgroundColor={COLORS.PRIMARY.BLACK} height="16rem">
      <SContainer>
        <p>a</p>
        <p>b</p>
        <p>c</p>
      </SContainer>
    </Section>
  )
}

export default Slogan
