import Image, { ImageProps } from 'next/image'
import styled from 'styled-components'

const ImageWrapper = styled(Image)``

const Photo: React.FC<ImageProps> = ({ src, width, height, ...props }) => {
  return <ImageWrapper src={src} height={height} width={width} {...props} />
}

export default Photo
