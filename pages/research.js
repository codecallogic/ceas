import { useState, useEffect } from 'react'
import Navigation from '../components/client/navigation'
import Footer from '../components/client/footer'
import { PUBLIC_FILES } from '../config'
import Toolbar from '../components/client/toolbar'

const Research = ({
  navMenus,
  openSearch,
  components,
  faculty,
  students,

  //// METHODS
  setOpenSearch
}) => {
  
  const [activatedComponents, setActivatedComponents] = useState([])
  const [component, setComponent] = useState('')
  const [facultyItems, setFacultyItems] = useState([])
  const [studentItems, setStudentItems] = useState([])

  useEffect(() => {

    let active
    
    if(components.length > 0 ){
    
      active = components.filter((item) => item.active.toLowerCase() == 'activated')

    }

    // if(!component && active[0]) setComponent(active[0].name.toLowerCase())
    
    if(active) setActivatedComponents([...active])
    
  }, [components])

  useEffect(() => {

    setFacultyItems([])

    if(faculty.length > 0){
      faculty.forEach((item) => {
        if(item.componentOne[0]){
          if(item.componentOne[0].name.toLowerCase() == component)
          return setFacultyItems( (oldArray) => [...oldArray, item])
        }

        if(item.componentTwo[0]){
          if(item.componentTwo[0].name.toLowerCase() == component)
          return setFacultyItems( (oldArray) => [...oldArray, item])
        }

        if(item.componentThree[0]){
          if(item.componentThree[0].name.toLowerCase() == component)
          return setFacultyItems( (oldArray) => [...oldArray, item])
        }
      })
    }

  }, [faculty, component])

  useEffect(() => {

    setStudentItems([])
    
    if(students.length > 0){
      students.forEach((item) => {
        if(item.component[0]){
          if(item.component[0].name.toLowerCase() == component)
          return setStudentItems( (oldArray) => [...oldArray, item])
        }
      })
    }

  }, [students, component])
  
  return (
    <>
      {/* <Toolbar></Toolbar> */}
      <Navigation 
        navMenus={navMenus} 
        openSearch={openSearch}
        setOpenSearch={setOpenSearch}
      ></Navigation>
      <div className="research">

        <div className="research-section-1">
          <div className="research-section-1-cover" style={{backgroundImage: `url('/media/home/research.png')`}}></div>
          <div className="research-section-1-content wrapper">
            <div className="research-section-1-title">CATSUS Research</div>
            <p><mark>The vision of the proposed CREST Center for Advancement toward Sustainable Urban Systems (CATSUS) is to become a leader in conducting transformative research on the challenges involving energy and water sustainability in urban settings, by promoting faculty engagement in high-level research, and further enhancing the research capability of Cal State LA, while training diverse and talented students who will become the engineers and scientists that will catalyze change in this field. Faculty specialty areas at California State University Los Angeles has led to the development of the research components shown below.</mark>
            </p>
            <div className="research-section-1-content-items">
            { activatedComponents.length > 0 && activatedComponents.slice(0, 5).map((item, idx) => 
              item.active.toLowerCase() == 'activated' 
              ?
              <div key={idx} className="research-section-1-content-items-item" onClick={() => (document.getElementById('section-2').scrollIntoView(), setComponent(item.name.toLowerCase()))}>
                <img 
                  className="image" 
                  src={`/media/home/${item.name.toLowerCase()}.png`} 
                  alt={item.name}
                  onError={(e) => e.target.src = 'https://icon-library.com/images/not-found-icon/not-found-icon-14.jpg'}
                />
                <span>{item.name}</span>
              </div>
              :
              null
            )}
            </div>
          </div>
        </div>

        <div className="research-section-2">
          <div id="section-2" className="research-section-2-content wrapper">


            { activatedComponents.length > 0 && activatedComponents.slice(0, 5).map((item, idx) => 
              item.name.toLowerCase() == component
              ?
              
                <div 
                  key={idx}
                  className="research-section-2-title"
                  onClick={() => window.open(`/component?title=${item.name}`, '_blank')}
                >
                  <img 
                    className="image" 
                    src={`${PUBLIC_FILES}/component/${item.icon}`} 
                    alt={item.name}
                    onError={(e) => e.target.src = 'https://www.salonlfc.com/wp-content/uploads/2018/01/image-not-found-scaled.png'}
                  />
                  <span>{item.name}</span>
                </div>
              :
              null
            )}
            {/* { component == '' && activatedComponents.length > 0 && activatedComponents[0].name
              ?
              <div 
              key={activatedComponents[0].name} className="research-section-2-title"
              onClick={() => window.open(`/component?title=${activatedComponents[0].name}`, '_blank')}
              >
                <img 
                  className="image" 
                  src={`${PUBLIC_FILES}/component/${activatedComponents[0].icon}`} 
                  alt={activatedComponents[0].name}
                  onError={(e) => e.target.src = 'https://www.salonlfc.com/wp-content/uploads/2018/01/image-not-found-scaled.png'}
                />
                <span>{activatedComponents[0].name}</span>
              </div>
              :
              null
            } */}


            { activatedComponents.length > 0 && activatedComponents.slice(0, 5).map((item, idx) => 
              item.name.toLowerCase() == component
              ?
              
                <div 
                  key={idx}
                  className="research-section-2-image"
                  onClick={() => window.open(`/component?title=${item.name}`, '_blank')}
                >
                  <img 
                    className="image" 
                    src={`${PUBLIC_FILES}/component/${item.image}`} 
                    alt={item.name}
                    onError={(e) => e.target.src = 'https://www.salonlfc.com/wp-content/uploads/2018/01/image-not-found-scaled.png'}
                  />
                </div>
              :
              null
            )}
            {/* { component == '' && activatedComponents.length > 0 && activatedComponents[0].name
              ?
              <div 
                className="research-section-2-image"
                onClick={() => window.open(`/component?title=${activatedComponents[0].name}`, '_blank')}
              >
                <img 
                  className="image" 
                  src={`${PUBLIC_FILES}/component/${activatedComponents[0].image}`} 
                  alt={activatedComponents[0].name}
                  onError={(e) => e.target.src = 'https://www.salonlfc.com/wp-content/uploads/2018/01/image-not-found-scaled.png'}
                />
              </div>
              :
              null
            } */}


            { activatedComponents.length > 0 && activatedComponents.slice(0, 5).map((item, idx) => 
              item.name.toLowerCase() == component
              ?
              
                <p 
                key={idx}
                onClick={() => window.open(`/component?title=${activatedComponents[0].name}`, '_blank')}
                >
                  {item.longDescription}
                </p>
              :
              null
            )}
            {/* { component == '' && activatedComponents.length > 0 && activatedComponents[0].name
              ?
              
              <p
                onClick={() => window.open(`/component?title=${item.name}`, '_blank')}
              >
                {activatedComponents[0].longDescription}
              </p>
              :
              null
            } */}
          </div>
        </div>

        <div className="research-section-3">
          <div className="research-section-3-content wrapper">
            <div className="research-section-3-title">{ facultyItems.length > 0 ? 'Faculty' : ''}</div>
              <div className="research-section-3-members">
                {facultyItems.length > 0 && facultyItems.map((item, idx) => 
                  <div key={idx} className="research-section-3-members-item">
                    <img 
                      src={`${PUBLIC_FILES}/faculty/${item.image}`} 
                      alt={item.name} 
                      onError={(e) => e.target.src = 'https://www.salonlfc.com/wp-content/uploads/2018/01/image-not-found-scaled.png'}
                    />
                    <div className="research-section-3-members-item-name">
                      <span></span>
                      <div>{item.title}{item.name}</div>
                    </div>
                  </div>
                )}
              </div>
          </div>
        </div>

        <div className="research-section-3">
          <div className="research-section-3-content wrapper">
            <div className="research-section-3-title">{ studentItems.length > 0 ? 'Students' : '' }</div>
              <div className="research-section-3-members">
                {studentItems.length > 0 && studentItems.map((item, idx) => 
                  <div key={idx} className="research-section-3-members-item">
                    <img 
                      src={`${PUBLIC_FILES}/student/${item.image}`} 
                      alt={item.name} 
                      onError={(e) => e.target.src = 'https://www.salonlfc.com/wp-content/uploads/2018/01/image-not-found-scaled.png'}
                    />
                    <div className="research-section-3-members-item-name">
                      <span></span>
                      <div>{item.title}{item.name}</div>
                    </div>
                  </div>
                )}
              </div>
          </div>
        </div>     
      </div>
      <Footer></Footer>
    </>
  )
}

export default Research
