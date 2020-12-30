import { css } from 'twin.macro'
import { SerializedStyles } from '@emotion/react'

export const backgroundImageStyle = (
  background: string,
  repeat = 'no-repeat',
  positionX = 'center',
  positionY = 'center',
  attachment = 'fixed'
): SerializedStyles => css`
  background-image: url(${background});
  background-repeat: ${repeat};
  background-position-x: ${positionX};
  background-position-y: ${positionY};
  background-attachment: ${attachment};
`

export const backgroundColorStyle = (color: string): SerializedStyles => css`
  background-color: ${color};
`

export default {
  backgroundImageStyle,
  backgroundColorStyle
}
