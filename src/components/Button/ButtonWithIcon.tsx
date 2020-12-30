import { SerializedStyles } from '@emotion/react'
import tw, { TwStyle } from 'twin.macro'

type Props = {
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void | undefined
  style?: TwStyle | SerializedStyles | null
} & React.ButtonHTMLAttributes<HTMLButtonElement>

const buttonStyle = tw`flex justify-center items-center`

const ButtonWithIcon: React.FC<Props> = ({ children, onClick, style = null, ...props }) => {
  return (
    <button {...props} onClick={onClick} css={[buttonStyle, style]}>
      {children}
    </button>
  )
}

export default ButtonWithIcon
