import styled from 'styled-components'
import { Section } from '@components/Section'
import { Container } from '@components/Container'
import { GoogleMap } from '@components/Map'
import { Text } from '@components/Text'
import { COLORS } from '@constants'
import { useTranslation } from '@localized'

const SContainer = styled(Container)`
  display: flex;
  flex-flow: row nowrap;
  padding: 2rem 0;
`

const Content = styled('div')`
  width: 50%;
  height: 100%;
`

const MapContainer = styled('div')`
  width: 50%;
  height: 100%;
`

const TextBlock = styled(Text)`
  display: block;
  margin: 0.5rem 0;
`

const Title = styled(TextBlock)`
  margin: 0.75rem 0;
`

const Contact: React.FC = () => {
  const { t } = useTranslation()

  const contactData = [
    { id: 'line', text: t('contact.options.line') },
    { id: 'telephone', text: t('contact.options.tel') },
    { id: 'address', text: t('contact.options.address') },
    { id: 'email', text: t('contact.options.email') }
  ]

  const servicesData = [
    'Plastic Hole Tray ( ถาดบรรจุสินค้า )',
    'Blister Pack (บรีสเตอร์แพค)',
    'Slide Pack (งานขึ้นรูปพับขอบ)',
    'Packing Clamshell (งานขึ้นรูปดับเบิลแพค)',
    'Lids (ฝา)'
  ]

  return (
    <Section sectionID="Contact" height="25rem" backgroundColor={COLORS.PRIMARY.BLACK}>
      <SContainer>
        <Content>
          <Title size="lg" color="white">
            {t('contact.title')}
          </Title>
          {contactData.map(({ id, text }) => (
            <TextBlock size="sm" color="white" key={id}>
              {text}
            </TextBlock>
          ))}
          <Title size="lg" color="white">
            รูปแบบบริการ
          </Title>
          {servicesData.map((text, index) => (
            <TextBlock size="sm" color="white" key={index}>
              {text}
            </TextBlock>
          ))}
        </Content>
        <MapContainer>
          <GoogleMap />
        </MapContainer>
      </SContainer>
    </Section>
  )
}

export default Contact
