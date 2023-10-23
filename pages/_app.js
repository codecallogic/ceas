import '../styles/app.css'
import { useState, useEffect } from 'react'
import Head from 'next/head'
import rootReducer from '../reducers/index'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import axios from 'axios'
import { API } from '../config'
// import io from 'socket.io-client'
// import { SOCKET } from '../config';
import { clientData, tableData } from '../helpers/tables'
import { getToken } from '../helpers/auth'
import _ from 'lodash'

// const socket = io.connect(SOCKET, {transports: ['websocket', 'polling', 'flashsocket']});

const store = createStore(rootReducer, composeWithDevTools())

function MyApp({ Component, pageProps, client, account, accessToken, data, originalData, pathname }) {

  const [navMenus, setNavMenus] = useState([])
  const [slides, setSlides] = useState([])
  const [components, setComponents] = useState([])
  const [news, setNews] = useState([])
  const [faculty, setFaculty] = useState([])
  const [students, setStudents] = useState([])
  const [labs, setLabs] = useState([])
  const [equipment, setEquipment] = useState([])
  const [staff, setStaff] = useState([])
  const [publications, setPublications] = useState([])
  const [sections, setSections] = useState([])
  const [openSearch, setOpenSearch] = useState(false)

  useEffect(() => {

    if(pathname !== '/admin/login'){
      if(pathname !== '/admin'){
      // socket.on('navigation', (client) => {
      setNavMenus(client.navMenus)
      // })

      // socket.on('slides', (client) => {
      setSlides(client.slides)
      // })

      // socket.on('components', (client) => {
      setComponents(client.components)
      // })

      // socket.on('news', (client) => {
      setNews(client.news)
      // })

      // socket.on('faculty', (client) => {
      setFaculty(client.faculty)
      // })

      // socket.on('students', (client) => {
      setStudents(client.students)
      // }

      // socket.on('labs', (client) => {
      setLabs(client.labs)
      // })

      // socket.on('equipment', (client) => {
      setEquipment(client.equipment)
      // })

      // socket.on('staff', (client) => {
      setStaff(client.staff)
      // })

      // socket.on('publication', (client) => {
      setPublications(client.publications)
      // })

      // socket.on('section', (client) => {
      setSections(client.sections)
      // })
    }}

  }, [])
  
  return <>
    <Head>
      <>
      <title>CATSUS</title>
      {/* <meta charSet="utf-8"/> */}
      {/* <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/> */}
      {/* <meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests"/> */}
      <link href="https://fonts.googleapis.com/css?family=Roboto:300,400&display=swap" rel="stylesheet" />
      <link rel="icon" href="/catsusfav.jpeg" sizes="any" />
      <script src="https://unpkg.com/@lottiefiles/lottie-player@0.4.0/dist/lottie-player.js"></script>
      </>
    </Head>
    <Provider store={store}>
      <Component 
        {...pageProps}
        client={client}
        data={data}
        originalData={originalData}
        accessToken={accessToken}
        account={account}
        navMenus={navMenus} 
        slides={slides} 
        components={components} 
        news={news}
        faculty={faculty}
        students={students}
        labs={labs}
        equipment={equipment}
        staff={staff}
        publications={publications}
        sections={sections}
        setNews={setNews}
        openSearch={openSearch}
        setOpenSearch={setOpenSearch}
      />
    </Provider>    
  </>
}

MyApp.getInitialProps = async ( {ctx}) => {
  let client = new Object()

  if(ctx.pathname !== '/admin/login'){
    if(ctx.pathname !== '/admin'){
      client.components               = await clientData('component/all-components-public')
      client.faculty                  = await clientData('faculty/get-all-faculty-public')
      client.students                 = await clientData('student/get-all-students-public')
      client.staff                    = await clientData('staff/all-staff-public')
      client.publications             = await clientData('publication/all-publications-public')
      client.news                     = await clientData('news/all-news-public')
      client.slides                   = await clientData('slide/all-slides-public')
      client.labs                     = await clientData('lab/all-labs-public')
      client.equipment                = await clientData('equipment/all-equipment-public')
      client.navMenus                 = await clientData('navigation/all-nav-menus-public')
      client.sections                 = await clientData('section/all-sections-public')
    }
  }

  let data = new Object()
  let deepClone

  const token = getToken('accessTokenAdmin', ctx.req)
  let accessToken = null
  if(token){accessToken = token.split('=')[1]}
  
  if(token){
    data.adminUsers               = await tableData(accessToken, 'auth/all-admin')
    data.components               = await tableData(accessToken, 'component/all-components')
    data.faculty                  = await tableData(accessToken, 'faculty/get-all-faculty')
    data.students                 = await tableData(accessToken, 'student/get-all-students')
    data.staff                    = await tableData(accessToken, 'staff/all-staff')
    data.publications             = await tableData(accessToken, 'publication/all-publications')
    data.news                     = await tableData(accessToken, 'news/all-news')
    data.slides                   = await tableData(accessToken, 'slide/all-slides')
    data.labs                     = await tableData(accessToken, 'lab/all-labs')
    data.equipment                = await tableData(accessToken, 'equipment/all-equipment')
    data.forms                    = await tableData(accessToken, 'form/all-forms')
    data.navMenus                 = await tableData(accessToken, 'navigation/all-nav-menus')
    data.navItems                 = await tableData(accessToken, 'navigation/all-nav-items')
    data.sections                 = await tableData(accessToken, 'section/all-sections')
  }

  deepClone= _.cloneDeep(data)

  let account = null
  let serverMessage = null
  
  if(token){
    try {
      const responseRead = await axios.get(`${API}/auth/admin`, {
          headers: {
              Authorization: `Bearer ${accessToken}`,
              contentType: `application/json`
          },
          withCredentials: true
      })
      
      account = responseRead.data
  
    } catch(err){
      // console.log('ERROR', err)
      account = null
      serverMessage = err.response ? err.response.data : 'Error ocurred, getting account data.'
    }
  }
  
  return {
    client: Object.keys(client).length > 0 ? client : null,
    data: Object.keys(data).length > 0 ? data : null,
    originalData: Object.keys(deepClone).length > 0 ? deepClone : null,
    account: account ? account : null,
    accessToken: accessToken ? accessToken : null,
    pathname: ctx.pathname ? ctx.pathname : '/'
  }
}

export default MyApp
