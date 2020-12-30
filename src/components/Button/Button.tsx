import { SerializedStyles } from '@emotion/react'
import tw, { TwStyle } from 'twin.macro'

type Props = {
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void | undefined
  styles?: TwStyle | SerializedStyles | null
} & React.ButtonHTMLAttributes<HTMLButtonElement>

const buttonStyle = tw`flex justify-center items-center`

const Button: React.FC<Props> = ({ children, onClick, styles = null, ...props }) => {
  return (
    <button onClick={onClick} css={[buttonStyle, styles]} {...props}>
      {children}
    </button>
  )
}

export default Button
