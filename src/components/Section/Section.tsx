import styled, { css, ThemedCssFunction } from 'styled-components'

/**
 *  src: string,
    repeat = 'no-repeat',
    positionX = 'center',
    positionY = 'center',
    attachment = 'fixed'
 */
type styledProps = {
  height: string
  backgroundImage?: {
    src?: string
    repeat?: string
    positionX?: string
    positionY?: string
    attachment?: string
  } | null
  backgroundColor?: string | ThemedCssFunction | null
}

type Props = {
  sectionID: string
} & styledProps

const PageSection = styled('section') <styledProps>`
  width: 100%;
  height: ${(props) => props.height};
  margin: auto;
  ${({ backgroundImage }) =>
    backgroundImage &&
    css`
      background-image: url(${backgroundImage.src});
      background-repeat: ${backgroundImage.repeat ? backgroundImage.repeat : 'no-repeat'};
      background-position-x: ${backgroundImage.positionX ? backgroundImage.positionX : 'center'};
      background-position-y: ${backgroundImage.positionY ? backgroundImage.positionY : 'center'};
      background-attachment: ${backgroundImage.attachment ? backgroundImage.attachment : 'scroll'};
    `}
  ${({ backgroundColor }) =>
    backgroundColor &&
    css`
      background: ${backgroundColor};
    `}
`

const Section: React.FC<Props> = ({ children, sectionID, height, backgroundImage = null, backgroundColor = null }) => {
  return (
    <PageSection id={sectionID} height={height} backgroundImage={backgroundImage} backgroundColor={backgroundColor}>
      {children}
    </PageSection>
  )
}

export default Section
