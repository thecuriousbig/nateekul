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
const Title = styled('div')`
  padding: 0.5rem 1rem;
  border: none;
  border-bottom: 0.25rem solid ${(props) => props.theme.colors.secondary.BLACK300};
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
  return (
    <Section sectionID="About" height="25rem" backgroundColor={COLORS.PRIMARY.WHITE}>
      <SContainer>
        <Title>
          <Text size="4xl" color="black" font="Supermarket">
            เกี่ยวกับเรา
          </Text>
        </Title>
        <Content>
          <Paragraph size="lg">บริษัท นทีกุล จำกัด เริ่มก่อตั้งแต่ปี พ.ศ 2539 ดำเนินกิจการมาแล้วกว่า 25 ปี</Paragraph>
          <Paragraph size="lg">
            เราเป็นบริษัทที่มีความเชี่ยวชาญในด้านการขึ้นรูปบรรจุภัณฑ์พลาสติกรูปแบบต่างๆ
            โดยใช้ระบบการบรรจุภัณฑ์แบบดูดสุญญากาศหรือ Thermoforming Packaging Systems
            ซึ่งมีความรวดเร็วในการเตรียมและทำการผลิต
          </Paragraph>
          <Paragraph size="lg">
            เราพร้อมให้คำปรึกษาแก่เจ้าของธุรกิจที่กำลังต้องการผลิตบรรจุภัณฑ์
            พลาสติกเรายินดีบริการขึ้นรูปพลาสติกตามความต้องการของลูกค้า ทุกท่าน
          </Paragraph>
        </Content>
      </SContainer>
    </Section>
  )
}

export default About
