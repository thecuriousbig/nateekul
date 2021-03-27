import styled from 'styled-components'
import Image from 'next/image'
import { Button } from '@components/Button'
import { Text } from '@components/Text'
import FacebookIcon from '@public/static/icons/facebook.png'

type Props = {
  className?: string
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void | undefined
} & React.ButtonHTMLAttributes<HTMLButtonElement>

const FacebookButtonWrapper = styled(Button)`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  padding: 0;
  background-color: #4267b2;
  cursor: pointer;
`

const ButtonText = styled(Text)`
  padding: 0.5rem 1rem;
`

const FacebookButton: React.FC<Props> = ({ className, onClick, ...props }) => {
  return (
    <FacebookButtonWrapper className={className} onClick={onClick} {...props}>
      <Image src={FacebookIcon} height={40} width={40} />
      <ButtonText size="md" color="white">
        ดำเนินการต่อด้วย Facebook
      </ButtonText>
    </FacebookButtonWrapper>
  )
}

export default FacebookButton
