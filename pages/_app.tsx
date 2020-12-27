import { Fragment } from 'react'
import { AppProps } from 'next/app'
import Head from 'next/head'
import { GlobalStyles } from 'twin.macro'

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <Fragment>
      <Head>
        <title>Nateekul</title>
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </Fragment>
  )
}

export default App
