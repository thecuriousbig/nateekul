import Image from 'next/image'
import styled from 'styled-components'
import { Section } from '@components/Section'
import { Container } from '@components/Container'
import { Text } from '@components/Text'
import { COLORS } from '@constants'
import { useTranslation } from '@localized'

const SContainer = styled(Container)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

const SloganList = styled('ul')`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  height: 100%;
  list-style-type: none;

  > :not(:first-child) {
    margin-left: 2rem;
  }
`

const SloganItem = styled('li')`
  display: flex;
  flex-flow: column nowrap;
`

const SloganText = styled(Text)<{ type?: string }>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${({ type }) => (type === 'title' ? '1rem 0.5rem 0rem;' : '1rem 0.5rem')};
`

const Icon = styled(Image)``

const Slogan: React.FC = () => {
  const { t } = useTranslation('slogan')
  const slogan = [
    { id: 1, title: t('title.fastService'), subtitle: t('subtitle.fastService'), icon: '/static/icons/slogan_1.svg' },
    { id: 2, title: t('title.qualityCare'), subtitle: t('subtitle.qualityCare'), icon: '/static/icons/slogan_2.svg' },
    { id: 3, title: t('title.consultance'), subtitle: t('subtitle.consultance'), icon: '/static/icons/slogan_3.svg' }
  ]
  return (
    <Section sectionID="Slogan" backgroundColor={COLORS.SECONDARY.BLACK800} height="16rem">
      <SContainer>
        <SloganList>
          {slogan.map(({ id, title, subtitle, icon }) => (
            <SloganItem key={id}>
              <Icon src={icon} width={64} height={64} />
              <SloganText type="title" color="white" size="xl" font="Supermarket">
                {title}
              </SloganText>
              <SloganText color="white" size="sm" font="Supermarket">
                {subtitle}
              </SloganText>
            </SloganItem>
          ))}
        </SloganList>
      </SContainer>
    </Section>
  )
}

export default Slogan
