import styled from 'styled-components'
import { Section } from '@components/Section'
import { Card } from '@components/Card'
import { Text } from '@components/Text'
import { COLORS } from '@constants'
import { useTranslation } from '@localized'

import Example1 from '@public/static/images/example/example1.jpg'
import Example2 from '@public/static/images/example/example2.jpg'
import Example3 from '@public/static/images/example/example3.jpg'
import Example4 from '@public/static/images/example/example4.jpg'

const productExample = [
  {
    id: 1,
    name: 'กล่องอาหารทรงกลม',
    description: 'กล่องพลาสติก PET ทรงกลม ขนาดเส้นผ่านศูนย์กลาง 10 ซม.',
    image: Example1
  },
  {
    id: 2,
    name: 'ถาดพลาดติกใส่สินค้าสีขาว',
    description: 'ถาดพลาสติก PP แข็งแรงเป็นทรง ใส่สินค้า 2x5 ช่อง ขนาด 11.5x15.5x2 ซม. ',
    image: Example2
  },
  {
    id: 3,
    name: 'ถาดพลาดติกใส่สินค้าสีใส',
    description: 'ถาดพลาสติก PET ใสเป็นทรง ใส่สินค้า 2x5 ช่อง ขนาด 11.5x15.5x1 ซม. ',
    image: Example3
  },
  {
    id: 4,
    name: 'พลาสติก PET ตามพิมพ์',
    description: 'พลาสติก PET ใสเป็นทรง ขึ้นรูปตามพิมพ์ สามารถออกแบบเองได้',
    image: Example4
  }
]

const CardList = styled('div')`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;
  align-items: stretch;
  padding: 2rem 0rem 4rem;
`

const Title = styled(Text)`
  padding: 2rem 0rem;
  display: block;
  text-align: center;
`

const CardItem = styled(Card)`
  margin: 1rem;
`

const Product: React.FC = () => {
  const { t } = useTranslation('product')
  return (
    <Section sectionID="Products" backgroundColor={COLORS.PRIMARY.WHITE}>
      <Title color="black" size="4xl" font="Supermarket">
        {t('title')}
      </Title>
      <CardList>
        {productExample.map(({ id, name, description, image }) => (
          <CardItem
            key={id}
            title={name}
            description={description}
            image={image}
            imageWidth="100%"
            imageHeight={254}
            cardWidth="270px"
          />
        ))}
      </CardList>
    </Section>
  )
}

export default Product
