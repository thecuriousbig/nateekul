import { useState } from 'react'
import Image from 'next/image'
import tw from 'twin.macro'
import { Button } from '@components/Button'
import { Text } from '@components/Text'
import { COLORS } from '@constants/color'
import LineIcon from '@public/static/images/line_base.png'
import LineHoverIcon from '@public/static/images/line_hover.png'
import LinePressIcon from '@public/static/images/line_press.png'

type Props = {
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void | undefined
} & React.ButtonHTMLAttributes<HTMLButtonElement>

const buttonStyle = tw`
  rounded-md
  bg-line-base
  hover:bg-line-hover
  active:bg-line-pressed
  focus:outline-none
  focus:shadow-none
`

const buttonTextStyle = tw`px-5 py-2`

const LineButton: React.FC<Props> = ({ onClick, ...props }) => {
  const [isHover, setIsHover] = useState(false)
  const [isClick, setIsClick] = useState(false)

  const renderLineIcon = () => {
    if (isClick) return <Image src={LinePressIcon} height={40} width={40} />
    if (isHover) return <Image src={LineHoverIcon} height={40} width={40} />
    return <Image src={LineIcon} height={40} width={40} />
  }

  return (
    <Button
      onMouseEnter={() => setIsHover(!isHover)}
      onMouseLeave={() => setIsHover(!isHover)}
      onMouseDown={() => setIsClick(!isClick)}
      onMouseUp={() => setIsClick(!isClick)}
      onClick={onClick}
      styles={buttonStyle}
      {...props}
    >
      {renderLineIcon()}
      <Text variant="md" color={COLORS.PRIMARY.WHITE} styles={buttonTextStyle}>
        ติดต่อเรา
      </Text>
    </Button>
  )
}

export default LineButton
