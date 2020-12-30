import tw from 'twin.macro'
import Image from 'next/image'
import { Section } from '@components/Section'
import { Container } from '@components/Container'
import { Text } from '@components/Text'
import { Button } from '@components/Button'
import { LineButton } from '@components/LineButton'
import { COLORS } from '@constants/color'

import MainBackgroundImage from '@public/static/images/main.jpg'

const containerStyle = tw`flex flex-col justify-center items-start space-y-4`

const Main: React.FC = () => {
  return (
    <Section sectionID="Main" height="32rem" backgroundImage={{ src: MainBackgroundImage, positionX: 'left' }}>
      <Container styles={containerStyle}>
        <Text variant="hero" color={COLORS.PRIMARY.WHITE}>
          รับขึ้นรูปบรรจุภัณฑ์พลาสติก
        </Text>
        <Text variant="lg" color={COLORS.PRIMARY.WHITE}>
          โรงงานบรรจุภัณฑ์ พลาสติกวัสดุ PVC PET PS PP ตามความต้องการของลูกค้า
        </Text>
        <LineButton />
      </Container>
    </Section>
  )
}

export default Main
