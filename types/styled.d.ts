// import original module declarations
import 'styled-components'

interface Metadata {
  [key: string]: string | number
}

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: Metadata
      secondary: Metadata
      line: Metadata
    }
    font: {
      family: Metadata
      size: Metadata
      lineHeight: Metadata
    }
    screen: Metadata
  }
}
