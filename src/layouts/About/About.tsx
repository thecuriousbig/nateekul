import styled from 'styled-components'
import { Section } from '@components/Section'
import { Container } from '@components/Container'
import { Text } from '@components/Text'
import { COLORS } from '@constants'
import { useTranslation } from '@localized'

const SContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 4rem 1rem;
`
const Title = styled('div')`
  width: 40rem;
  text-align: center;
  padding: 0.5rem 1rem;
  border: none;
  border-left: 1rem solid ${(props) => props.theme.colors.secondary.BLUE200};
`

const Content = styled('div')`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  > * {
    margin-top: 2rem;
  }
`

const Paragraph = styled(Text)`
  text-align: center;
`

const About: React.FC = () => {
  const { t } = useTranslation('about')
  return (
    <Section sectionID="About" backgroundColor={COLORS.PRIMARY.WHITE}>
      <SContainer>
        <Title>
          <Text size="4xl" color="blue200" font="Supermarket">
            {t('title')}
          </Text>
        </Title>
        <Content>
          <Paragraph size="lg">{t('paragraph.a')}</Paragraph>
          <Paragraph size="lg">{t('paragraph.b')}</Paragraph>
          <Paragraph size="lg">{t('paragraph.c')}</Paragraph>
        </Content>
      </SContainer>
    </Section>
  )
}

export default About
