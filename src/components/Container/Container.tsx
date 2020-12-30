import { SerializedStyles } from '@emotion/react'
import tw, { TwStyle } from 'twin.macro'

type Props = {
  styles?: TwStyle | SerializedStyles | null
}

const baseContainer = tw`w-full h-full xl:max-w-screen-lg mx-auto px-4`

const Container: React.FC<Props> = ({ children, styles = null }) => {
  return <div css={[baseContainer, styles]}>{children}</div>
}

export default Container
