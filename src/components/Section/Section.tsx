import { css } from 'twin.macro'
import { backgroundUtils } from '@utils/style'

type Props = {
  sectionID: string
  height: string
  backgroundImage?: {
    src: string
    repeat?: string
    positionX?: string
    positionY?: string
    attachment?: string
  } | null
  backgroundColor?: string | null
}

const baseStyle = (height) => css`
  width: 100%;
  height: ${height};
  margin: auto;
`

const Section: React.FC<Props> = ({ children, sectionID, height, backgroundImage = null, backgroundColor = null }) => {
  return (
    <section
      id={sectionID}
      css={[
        baseStyle(height),
        backgroundUtils.backgroundImageStyle(
          backgroundImage.src,
          backgroundImage.repeat,
          backgroundImage.positionX,
          backgroundImage.positionY,
          backgroundImage.attachment
        ),
        backgroundUtils.backgroundColorStyle(backgroundColor)
      ]}
    >
      {children}
    </section>
  )
}

export default Section
