import { useState } from 'react'
import styled from 'styled-components'
import Image from 'next/image'
import { Button } from '@components/Button'
import { Text } from '@components/Text'
import LineIcon from '@public/static/images/line/line_base.png'
import LineHoverIcon from '@public/static/images/line/line_hover.png'
import LinePressIcon from '@public/static/images/line/line_press.png'

type Props = {
  className?: string
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void | undefined
} & React.ButtonHTMLAttributes<HTMLButtonElement>

const LineButtonWithStyle = styled(Button)`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  padding: 0;
  background-color: ${(props) => props.theme.colors.line.GREEN200};
  :hover {
    background-color: ${(props) => props.theme.colors.line.GREEN100};
  }
  :active {
    background-color: ${(props) => props.theme.colors.line.GREEN300};
  }
  :focus {
    outline: none;
    box-shadow: none;
  }
`

const ButtonText = styled(Text)`
  padding: 0.5rem 1rem;
`

const LineButton: React.FC<Props> = ({ className, onClick, ...props }) => {
  const [isHover, setIsHover] = useState(false)
  const [isClick, setIsClick] = useState(false)

  const renderLineIcon = () => {
    if (isClick) return <Image src={LinePressIcon} height={40} width={40} />
    if (isHover) return <Image src={LineHoverIcon} height={40} width={40} />
    return <Image src={LineIcon} height={40} width={40} />
  }

  return (
    <LineButtonWithStyle
      className={className}
      onMouseEnter={() => setIsHover(!isHover)}
      onMouseLeave={() => setIsHover(!isHover)}
      onMouseDown={() => setIsClick(!isClick)}
      onMouseUp={() => setIsClick(!isClick)}
      onClick={onClick}
      {...props}
    >
      {renderLineIcon()}
      <ButtonText size="md" color="white">
        ติดต่อเรา
      </ButtonText>
    </LineButtonWithStyle>
  )
}

export default LineButton
