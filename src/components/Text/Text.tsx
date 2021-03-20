import styled from 'styled-components'

type styledProps = {
  font?: string
  size?: 'hero' | '4xl' | '3xl' | '2xl' | 'xl' | 'lg' | 'md' | 'sm' | 'xs'
  color?:
    | 'black'
    | 'white'
    | 'blue'
    | 'black100'
    | 'black200'
    | 'black300'
    | 'black400'
    | 'black600'
    | 'black700'
    | 'black800'
    | 'black900'
    | 'blue100'
    | 'blue200'
    | 'blue300'
}

type Props = {
  className?: string
} & styledProps

const PRIMARY_COLOR = ['BLACK', 'WHITE', 'BLUE']

const Span = styled('span')<styledProps>`
  font-family: ${(props) => props.theme.font.family[props.font]};
  font-size: ${(props) => props.theme.font.size[props.size]};
  line-height: ${(props) => props.theme.font.lineHeight[props.size]};
  color: ${(props) =>
    PRIMARY_COLOR.indexOf(props.color.toUpperCase()) !== -1
      ? props.theme.colors.primary[props.color.toUpperCase()]
      : props.theme.colors.secondary[props.color.toUpperCase()]};
`

const Text: React.FC<Props> = ({ children, className, font = 'roboto', color = 'black', size = 'md' }) => (
  <Span className={className} font={font} size={size} color={color}>
    {children}
  </Span>
)

export default Text
