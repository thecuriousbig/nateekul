import tw, { TwStyle } from 'twin.macro'
import { colorUtils } from '@utils/style'
import { SerializedStyles } from '@emotion/react'

type Props = {
  variant: 'hero' | 'xxl' | 'xl' | 'lg' | 'md' | 'sm' | 'xs'
  color: string | null
  styles?: TwStyle | SerializedStyles | null
}

const textStyle = (variant) => {
  switch (variant) {
    case 'hero':
      return tw`font-sans text-7xl` // 72px
    case 'xxl':
      return tw`font-sans text-4xl` // 36px
    case 'xl':
      return tw`font-sans text-2xl` // 24px
    case 'lg':
      return tw`font-sans text-xl` // 20px
    case 'md':
      return tw`font-sans text-base` // 16px
    case 'sm':
      return tw`font-sans text-sm` // 14px
    case 'xs':
      return tw`font-sans text-xs` // 12px
    default:
      return tw`font-sans text-base`
  }
}

const Text: React.FC<Props> = ({ children, variant = 'paragraph', color, styles = null }) => (
  <span css={[textStyle(variant), colorUtils.setColor(color), styles]}>{children}</span>
)

export default Text
