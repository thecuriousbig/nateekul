import styled from 'styled-components'
import { Section } from '@components/Section'
import { Card } from '@components/Card'
import { Text } from '@components/Text'
import { COLORS } from '@constants/color'

import Example1 from '@public/static/images/example1.jpg'
import Example2 from '@public/static/images/example2.jpg'
import Example3 from '@public/static/images/example3.jpg'
import Example4 from '@public/static/images/example4.jpg'

const productExample = [
  {
    id: 1,
    name: 'product1',
    description: 'Commodo nullam aliquet viverra fermentum molestie faucibus',
    image: Example1
  },
  { id: 2, name: 'product2', description: 'Velit egestas ut diam tincidunt sit pretium', image: Example2 },
  {
    id: 3,
    name: 'product3',
    description: 'Enim magnis tristique suspendisse ullamcorper ipsum eleifend',
    image: Example3
  },
  {
    id: 4,
    name: 'product4',
    description: 'Senectus ornare augue ullamcorper vulputate metus adipiscing',
    image: Example4
  }
]

const CardList = styled('div')`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-evenly;
  align-items: stretch;
  padding: 2rem;
  margin-top: 2rem;
`

const Title = styled(Text)`
  display: block;
  text-align: center;
`

const Product: React.FC = () => {
  return (
    <Section sectionID="Products" height="30rem" backgroundColor={COLORS.PRIMARY.WHITE}>
      <Title color="black" size="4xl" font="Supermarket">
        ตัวอย่างผลิตภัณฑ์
      </Title>
      <CardList>
        {productExample.map(({ id, name, description, image }) => (
          <Card key={id} title={name} description={description} image={image} height={200} width={270} />
        ))}
      </CardList>
    </Section>
  )
}

export default Product
