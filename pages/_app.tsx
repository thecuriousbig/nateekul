import { AppProps } from 'next/app'
import Head from 'next/head'
import GlobalStyle from '@styles/global'
import { ThemeProvider } from 'styled-components'
import theme from '@styles/theme'
import '@localized'

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <GlobalStyle />
      <Head>
        <title>Nateekul</title>
      </Head>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

export default App
