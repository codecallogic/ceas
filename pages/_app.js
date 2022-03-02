import '../styles/app.css'
import { useState, useEffect } from 'react'
import Head from 'next/head'
import rootReducer from '../reducers/index'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import io from 'socket.io-client'
import { SOCKET } from '../config';

const socket = io.connect(SOCKET, {transports: ['websocket', 'polling', 'flashsocket']});

const store = createStore(rootReducer, composeWithDevTools())

function MyApp({ Component, pageProps }) {

  const [navMenus, setNavMenus] = useState([])
  const [slides, setSlides] = useState([])
  const [components, setComponents] = useState([])
  const [news, setNews] = useState([])
  const [openSearch, setOpenSearch] = useState(false)

  useEffect(() => {
    
    socket.on('navigation', (data) => {
      setNavMenus(data)
    })

    socket.on('slides', (data) => {
      setSlides(data)
    })

    socket.on('components', (data) => {
      setComponents(data)
    })

    socket.on('news', (data) => {
      setNews(data)
    })

  }, [])
  
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
      <Component {...pageProps} 
        navMenus={navMenus} 
        slides={slides} 
        components={components} 
        news={news} 
        setNews={setNews}
        openSearch={openSearch}
        setOpenSearch={setOpenSearch}
      />
    </Provider>    
  </>
}

export default MyApp
