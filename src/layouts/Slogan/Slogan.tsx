import styled from 'styled-components'
import { Section } from '@components/Section'
import { Container } from '@components/Container'
import { Text } from '@components/Text'
import { COLORS } from '@constants/color'

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

const SloganText = styled(Text)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem 0.5rem;
`

const Icon = styled('img')``

const Slogan: React.FC = () => {
  const slogan = [
    { id: 1, text: 'บริการรวมเร็วฉับไว', icon: '' },
    { id: 2, text: 'ใส่ใจในคุณภาพ', icon: '' },
    { id: 3, text: 'ยินดีให้คำปรึกษาทุกท่าน', icon: '' }
  ]
  return (
    <Section sectionID="Slogan" backgroundColor={COLORS.PRIMARY.BLACK} height="16rem">
      <SContainer>
        <SloganList>
          {slogan.map(({ id, text, icon }) => (
            <SloganItem key={id}>
              <Icon />
              <SloganText color="white" size="xl" font="Supermarket">
                {text}
              </SloganText>
            </SloganItem>
          ))}
        </SloganList>
      </SContainer>
    </Section>
  )
}

export default Slogan
