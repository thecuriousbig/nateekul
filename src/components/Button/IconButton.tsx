import styled from 'styled-components'

type Props = {
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void | undefined
} & React.ButtonHTMLAttributes<HTMLButtonElement>

const ButtonWithStyle = styled('button')`
  display: flex;
  justify-content: center;
  align-items: center;
`

const IconButton: React.FC<Props> = ({ children, onClick, className, ...props }) => {
  return (
    <ButtonWithStyle onClick={onClick} className={className} {...props}>
      {children}
    </ButtonWithStyle>
  )
}

export default IconButton
