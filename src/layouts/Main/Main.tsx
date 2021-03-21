import styled from 'styled-components'
import { Section } from '@components/Section'
import { Container } from '@components/Container'
import { Text } from '@components/Text'
import { LineButton } from '@components/LineButton'
import { FacebookButton } from '@components/FacebookButton'
import MainBackgroundImage from '@public/static/images/main.jpg'
import { useTranslation } from '@localized'

const SContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  > :not(:first-child) {
    margin-top: 1rem;
  }
`

const Main: React.FC = () => {
  const { t } = useTranslation('main')
  return (
    <Section sectionID="Main" height="32rem" backgroundImage={{ src: MainBackgroundImage, positionX: 'left' }}>
      <SContainer>
        <Text size="hero" color="white" font="Supermarket">
          {t('title')}
        </Text>
        <Text size="lg" color="white">
          {t('subtitle')}
        </Text>
        <LineButton />
        <FacebookButton />
      </SContainer>
    </Section>
  )
}

export default Main
