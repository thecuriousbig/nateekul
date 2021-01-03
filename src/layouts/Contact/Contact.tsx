import styled, { css } from 'styled-components'
import { Section } from '@components/Section'
import { Container } from '@components/Container'
import { Text } from '@components/Text'
import { COLORS } from '@constants/color'

const contactData = [
  { id: 'line', text: 'ไลน์: @nateekul_line' },
  { id: 'telephone', text: 'เบอร์โทรศัพท์: (+66)80-999-0629 คุณคัจฉพงษ์ นทีแสนประเสริฐ' },
  { id: 'address', text: 'ที่ตั้งบริษัท: 81/1103 ประชาอุทิศ79 ถนนประชาอุทิศ เขต/แขวง ทุ่งครุ กทมฯ 10140' },
  { id: 'email', text: 'อีเมล์: nateekul@hotmail.com' }
]

const servicesData = [
  'Plastic Hole Tray ( ถาดบรรจุสินค้า )',
  'Blister Pack (บรีสเตอร์แพค)',
  'Slide Pack (งานขึ้นรูปพับขอบ)',
  'Packing Clamshell (งานขึ้นรูปดับเบิลแพค)',
  'Lids (ฝา)'
]

const SContainer = styled(Container)`
  padding: 2rem 0;
`

const TextBlock = styled(Text)`
  display: block;
  margin: 0.5rem 0;
`

const Title = styled(TextBlock)`
  margin: 0.75rem 0;
`

const Contact = () => {
  return (
    <Section sectionID="Contact" height="25rem" backgroundColor={COLORS.PRIMARY.BLACK}>
      <SContainer>
        <Title size="lg" color="white">
          ติดต่อเรา
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
      </SContainer>
    </Section>
  )
}

export default Contact
