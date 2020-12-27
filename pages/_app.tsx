import { Fragment } from 'react'
import { AppProps } from 'next/app'
import Head from 'next/head'
import { Global, css } from '@emotion/react'
import { GlobalStyles } from 'twin.macro'

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <Fragment>
      <Head>
        <title>Nateekul</title>
      </Head>
      <Global
        styles={css`
          @font-face {
            font-family: 'supermarket';
            src: url('/static/fonts/supermarket.ttf');
          }
        `}
      />
      <GlobalStyles />
      <Component {...pageProps} />
    </Fragment>
  )
}

export default App
