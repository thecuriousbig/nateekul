import styled from 'styled-components'
import { Section } from '@components/Section'
import { Text } from '@components/Text'
import { Card } from '@components/Card'
import { COLORS } from '@constants'
import { useTranslation } from '@localized'

import HoleTray from '@public/static/images/serviceType/holetray.jpg'
import BlisterPack from '@public/static/images/serviceType/blisterpack.jpg'
import SlidePack from '@public/static/images/serviceType/slidepack.jpg'
import Clamshell from '@public/static/images/serviceType/clamshell.jpg'
import dummy from '@public/static/images/serviceType/clamshell.jpg'

const Title = styled(Text)`
  display: block;
  text-align: center;
  padding: 2rem 0rem;
`

const Subtitle = styled('div')`
  display: flex;
  text-align: center;
`

const SubtitleText = styled(Text)`
  width: 50rem;
  margin: auto;
`

const CardList = styled('div')`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;
  align-items: stretch;
  padding: 2rem;
`

const CardItem = styled(Card)`
  margin: 1rem;
  box-shadow: none;
  border-radius: 0.5rem;
  border: 1px solid #dfdfdf;
`

const ServiceType: React.FC = () => {
  const { t } = useTranslation('service')
  const serviceCardList = [
    {
      id: 1,
      title: t('options.plasticHoleTray.title'),
      subtitle: t('options.plasticHoleTray.subtitle'),
      description: t('options.plasticHoleTray.description'),
      image: HoleTray
    },
    {
      id: 2,
      title: t('options.lids.title'),
      subtitle: t('options.lids.subtitle'),
      description: t('options.lids.description'),
      image: dummy
    },
    {
      id: 3,
      title: t('options.foldingBox.title'),
      subtitle: t('options.foldingBox.subtitle'),
      description: t('options.foldingBox.description'),
      image: dummy
    },
    {
      id: 4,
      title: t('options.blisterPack.title'),
      subtitle: t('options.blisterPack.subtitle'),
      description: t('options.blisterPack.description'),
      image: BlisterPack
    },
    {
      id: 5,
      title: t('options.slidePack.title'),
      subtitle: t('options.slidePack.subtitle'),
      description: t('options.slidePack.description'),
      image: SlidePack
    },
    {
      id: 6,
      title: t('options.packingClamshell.title'),
      subtitle: t('options.packingClamshell.subtitle'),
      description: t('options.packingClamshell.description'),
      image: Clamshell
    }
  ]

  return (
    <Section sectionID="ServiceType" backgroundColor={COLORS.PRIMARY.WHITE}>
      <Title font="supermarket" size="4xl" color="black">
        {t('title')}
      </Title>
      <Subtitle>
        <SubtitleText font="supermarket" size="lg" color="black300">
          {t('subtitle')}
        </SubtitleText>
      </Subtitle>
      <CardList>
        {serviceCardList.map(({ id, title, subtitle, description, image }) => (
          <CardItem
            key={id}
            title={title}
            subtitle={subtitle}
            description={description}
            image={image}
            cardWidth="46%"
            cardHeight="124px"
            imageWidth="100%"
            imageHeight={250}
          />
        ))}
      </CardList>
    </Section>
  )
}

export default ServiceType
