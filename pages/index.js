import { useState, useEffect } from 'react'
import DesktopNav from '../components/client/navigation'
import Header from '../components/client/home/header'
import io from 'socket.io-client'
import { SOCKET } from '../config';

const socket = io.connect(SOCKET, {transports: ['websocket', 'polling', 'flashsocket']});

const Home = ({}) => {
  
  const [navMenus, setNavMenus] = useState([])
  const [slides, setSlides] = useState([])
  
  useEffect(() => {
    
    socket.on('navigation', (data) => {
      setNavMenus(data)
    })

  }, [])

  useEffect(() => {
    
    socket.on('slides', (data) => {
      setSlides(data)
    })

  }, [])
  
  return (
    <div className="home">
      <DesktopNav navMenus={navMenus}></DesktopNav>
      <Header slides={slides}></Header>
    </div>
  )
}

export default Home
