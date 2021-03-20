import Image, { ImageProps } from 'next/image'
import styled from 'styled-components'
import { Text } from '@components/Text'

type Props = {
  className?: string
  title: string
  subtitle?: string
  description?: string
  image: string
  imageWidth: number | string
  imageHeight?: number | string
  cardWidth: number | string
  cardHeight?: number | string
}

const CardWrapper = styled('div')<{ width: string | number }>`
  width: ${({ width }) => width};
  height: fit-content;
  box-shadow: 0px 4px 8px ${(props) => props.theme.colors.secondary.BLACK100};
  border-radius: 0.5rem;
`

const ImageWrapper = styled(Image)<ImageProps>`
  border-radius: 0.5rem 0.5rem 0 0;
  object-fit: cover;
`

const Content = styled('div')<{ height: string | number }>`
  width: 100%;
  padding: 0.5rem;
  height: ${({ height }) => height || 'max-content'};
`

const CardTitle = styled(Text)`
  display: block;
`

const Subtitle = styled('div')`
  display: block;
  padding: 0.5rem 0rem;
`

const Card: React.FC<Props> = ({
  className,
  subtitle,
  title,
  description = '',
  image,
  imageWidth,
  imageHeight,
  cardWidth,
  cardHeight
}) => {
  return (
    <CardWrapper className={className} width={cardWidth}>
      <div style={{ width: imageWidth, height: imageHeight, position: 'relative' }}>
        <ImageWrapper src={image} loading="lazy" layout="fill" />
      </div>
      <Content height={cardHeight}>
        <CardTitle size="lg" color="black" font="Supermarket">
          {title}
        </CardTitle>
        {subtitle && (
          <Subtitle>
            <Text size="md" color="black300" font="Supermarket">
              {subtitle}
            </Text>
          </Subtitle>
        )}
        {description && (
          <Text size="sm" color="black" font="Supermarket">
            {description}
          </Text>
        )}
      </Content>
    </CardWrapper>
  )
}

export default Card
