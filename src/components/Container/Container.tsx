import styled from 'styled-components'

type Props = {
  className?: string
}

const ContainerWithStyle = styled('div')`
  width: 100%;
  height: 100%;
  margin-left: auto;
  margin-right: auto;
  padding-left: 1rem;
  padding-right: 1rem;
  @media (min-width: ${(props) => props.theme.screen.xl}) {
    max-width: ${(props) => props.theme.screen.lg};
  }
`

const Container: React.FC<Props> = ({ children, className }) => {
  return <ContainerWithStyle className={className}>{children}</ContainerWithStyle>
}

export default Container
