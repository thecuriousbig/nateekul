import styled from 'styled-components'

type Props = {
  className?: string
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void | undefined
} & React.ButtonHTMLAttributes<HTMLButtonElement>

const ButtonWithStyle = styled('button')`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 0.375rem;
`

const Button: React.FC<Props> = ({ children, className, onClick, ...props }) => {
  return (
    <ButtonWithStyle className={className} onClick={onClick} {...props}>
      {children}
    </ButtonWithStyle>
  )
}

export default Button
