import { useState, useEffect } from 'react'
import DesktopNav from '../components/client/navigation'
import io from 'socket.io-client'
import { SOCKET } from '../config';

const socket = io.connect(SOCKET, {transports: ['websocket', 'polling', 'flashsocket']});

const Home = ({}) => {
  
  useEffect(() => {
    
    socket.on('navigation', (data) => {
      console.log(data)
      data.forEach((item) => {
        
        console.log(item.link.split("//")[1].split('/').slice(1).join('/'))
        
      })
    })
  }, [])
  
  return (
    <div className="home wrapper">
      <DesktopNav></DesktopNav>
    </div>
  )
}

export default Home
