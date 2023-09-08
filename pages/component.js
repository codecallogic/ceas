import { useState, useEffect } from 'react'
import Navigation from '../components/client/navigation'
import Footer from '../components/client/footer'
import { PUBLIC_FILES } from '../config'
import Toolbar from '../components/client/toolbar'
import SVG from '../files/svg'
import { useRouter } from 'next/router'


const Component = ({
  navMenus,
  openSearch,

  //// METHODS
  setOpenSearch,

  //// DATA
  components,
  faculty,
  students
  
}) => {
  
  const [component, setComponent] = useState('')
  const [facultyItems, setFacultyItems] = useState([])
  const [studentItems, setStudentItems] = useState([])
  const [title, setTitle] = useState('')
  const router = useRouter();

  useEffect(() => {
   
    if(router.query){
      if(router.query.title) setTitle(router.query.title)
    }
  }, [])
  
  useEffect(() => {
    console.log(components)
    components.forEach((item) => { if(item.name.trim().toLowerCase() == title.trim().toLowerCase() ) setComponent(item) })    
    
  }, [components])

  useEffect(() => {
    faculty.forEach((item) => {
      if(item.componentOne[0]){
        if(item.componentOne[0].name == title)
        return setFacultyItems( (oldArray) => [...oldArray, item])
      }

      if(item.componentTwo[0]){
        if(item.componentTwo[0].name == title)
        return setFacultyItems( (oldArray) => [...oldArray, item])
      }

      if(item.componentThree[0]){
        if(item.componentThree[0].name == title)
        return setFacultyItems( (oldArray) => [...oldArray, item])
      }
    })
  }, [faculty])

  useEffect(() => {
    students.forEach((item) => {
      if(item.component[0]){
        if(item.component[0].name == title)
        return setStudentItems( (oldArray) => [...oldArray, item])
      }
    })
  }, [students])
  
  return (
    <>
      {/* <Toolbar></Toolbar> */}
      <Navigation 
        navMenus={navMenus} 
        openSearch={openSearch}
        setOpenSearch={setOpenSearch}
      ></Navigation>
      {component && 
      <div className="component">
        <div className="component-section-1 wrapper">
          <div 
            className="component-section-1-breadcrumb"
            onClick={() => window.location.href = '/research'}
          >
            <SVG svg={'arrow-left'}></SVG>
            <span>Back to all</span>
          </div>
          <div className="component-section-1-title">{component.name}</div>
          <img 
            src={`${PUBLIC_FILES}/component/${component.image}`} className="component-section-1-image"
            alt={component.name}
            onError={(e) => e.target.src = 'https://www.salonlfc.com/wp-content/uploads/2018/01/image-not-found-scaled.png'}
          />
          <p>{component.longDescription}</p>
        </div>
        
        <div className="component-section-2 wrapper">
          <h1 className="component-section-2-title">{ facultyItems.length > 0 ? 'Faculty' : '' }</h1>
          <div className="component-section-2-members">
            {facultyItems.length > 0 && facultyItems.map((item, idx) => 
              <div className="component-section-2-members-item">
                <img 
                  src={`${PUBLIC_FILES}/faculty/${item.image}`} 
                  alt={item.name} 
                  onError={(e) => e.target.src = 'https://www.salonlfc.com/wp-content/uploads/2018/01/image-not-found-scaled.png'}
                />
                <div className="component-section-2-members-item-name">
                  <span></span>
                  <div>{item.title}{item.name}</div>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="component-section-3 wrapper">
          <h1 className="component-section-3-title">{ studentItems.length > 0 ? 'Students' : ''}</h1>
          <div className="component-section-3-members">
            {studentItems.length > 0 && studentItems.map((item, idx) => 
              <div className="component-section-3-members-item">
                <img 
                  src={`${PUBLIC_FILES}/student/${item.image}`} 
                  alt={item.name} 
                  onError={(e) => e.target.src = 'https://www.salonlfc.com/wp-content/uploads/2018/01/image-not-found-scaled.png'}
                />
                <div className="component-section-3-members-item-name">
                  <span></span>
                  <div>{item.title}{item.name}</div>
                </div>
              </div>
            )}
          </div>
        </div>
        
      </div>
      }
      
      <Footer></Footer>
    </>
  )
}

export default Component
