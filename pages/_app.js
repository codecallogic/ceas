import '../styles/app.css'
import Head from 'next/head'
import rootReducer from '../reducers/index'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import {composeWithDevTools} from 'redux-devtools-extension'

const store = createStore(rootReducer, composeWithDevTools())

function MyApp({ Component, pageProps }) {
  return <>
    <Head>
      <>
      <title>CEAS</title>
      <meta charset="utf-8"/>
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
      <link href="https://fonts.googleapis.com/css?family=Roboto:300,400&display=swap" rel="stylesheet" />
      <script src="https://unpkg.com/@lottiefiles/lottie-player@0.4.0/dist/lottie-player.js"></script>
      </>
    </Head>
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>    
  </>
}

export default MyApp
