import { css } from 'twin.macro'
import { SerializedStyles } from '@emotion/react'

const setColor = (color: string): SerializedStyles => css`
  color: ${color};
`

export default {
  setColor
}
