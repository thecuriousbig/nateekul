type ButtonProps = {
  text: string
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void | undefined
} & React.ButtonHTMLAttributes<HTMLButtonElement>

const Button: React.FC<ButtonProps> = ({ text, onClick, ...props }) => {
  return (
    <button {...props} onClick={onClick}>
      {text}
    </button>
  )
}

export default Button
