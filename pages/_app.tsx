import { useEffect } from 'react'
import { AppProps } from 'next/app'
import Head from 'next/head'
import { useRouter } from 'next/router'
import GlobalStyle from '@styles/global'
import { ThemeProvider } from 'styled-components'
import theme from '@styles/theme'
import '@localized'
import * as gtag from '@utils/gtag'

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  const router = useRouter()

  useEffect(() => {
    const handleRouteChange = (url: URL) => {
      gtag.pageview(url)
    }
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

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
