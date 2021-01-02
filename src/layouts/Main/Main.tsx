import styled from 'styled-components'
import Image from 'next/image'
import { Section } from '@components/Section'
import { Container } from '@components/Container'
import { Text } from '@components/Text'
import { Button } from '@components/Button'
import { LineButton } from '@components/LineButton'
import { COLORS } from '@constants/color'

import MainBackgroundImage from '@public/static/images/main.jpg'

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
  return (
    <Section sectionID="Main" height="32rem" backgroundImage={{ src: MainBackgroundImage, positionX: 'left' }}>
      <SContainer>
        <Text size="hero" color="white">
          รับขึ้นรูปบรรจุภัณฑ์พลาสติก
        </Text>
        <Text size="lg" color="white">
          โรงงานบรรจุภัณฑ์ พลาสติกวัสดุ PVC PET PS PP ตามความต้องการของลูกค้า
        </Text>
        <LineButton />
      </SContainer>
    </Section>
  )
}

export default Main
