import Image from 'next/image'
import styled from 'styled-components'
import { Text } from '@components/Text'

type Props = {
  className?: string
  title: string
  description?: string
  image: string
  width: number | string
  height: number | string
}

const CardWrapper = styled('div')<{ width: number | string }>`
  width: ${({ width }) => width.toString()}px;
  height: 18.75rem;
  box-shadow: 0px 4px 8px ${(props) => props.theme.colors.secondary.BLACK100};
  border-radius: 0.5rem;
`

const ImageWrapper = styled(Image)`
  border-radius: 0.5rem 0.5rem 0 0;
`

const Content = styled('div')`
  width: 100%;
  height: 100%;
  padding: 0.5rem;
`

const CardTitle = styled(Text)`
  display: block;
`

const Card: React.FC<Props> = ({ className, title, description = '', image, width, height }) => {
  return (
    <CardWrapper className={className} width={width}>
      <ImageWrapper src={image} width={width} height={height} loading="lazy" />
      <Content>
        <CardTitle size="lg" color="black" font="Supermarket">
          {title}
        </CardTitle>
        <Text size="sm" color="black" font="Supermarket">
          {description}
        </Text>
      </Content>
    </CardWrapper>
  )
}

export default Card
