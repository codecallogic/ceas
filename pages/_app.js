import '../styles/app.css'
import Head from 'next/head'


function MyApp({ Component, pageProps }) {
  return <>
    <Head>
      <>
      <title>CEAS</title>
      <meta charset="utf-8"/>
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
      <link href="https://fonts.googleapis.com/css?family=Roboto:300,400&display=swap" rel="stylesheet" />
      </>
    </Head>
    <Component {...pageProps} />
  </>
}

export default MyApp
