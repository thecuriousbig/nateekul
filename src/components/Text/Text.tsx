import styled from 'styled-components'

type styledProps = {
  font?: string
  size?: 'hero' | '2xl' | 'xl' | 'lg' | 'md' | 'sm' | 'xs'
  color?: 'black' | 'white'
}

type Props = {
  className?: string
} & styledProps

const Span = styled('span') <styledProps>`
  font-family: ${(props) => props.theme.font.family[props.font]};
  font-size: ${(props) => props.theme.font.size[props.size]};
  line-height: ${(props) => props.theme.font.lineHeight[props.size]};
  color: ${(props) => props.theme.colors.primary[props.color.toUpperCase()]};
  letter-spacing: 0.03rem;
`

const Text: React.FC<Props> = ({ children, className, font = 'supermarket', color = 'black', size = 'md' }) => (
  <Span className={className} font={font} size={size} color={color}>
    {children}
  </Span>
)

export default Text
