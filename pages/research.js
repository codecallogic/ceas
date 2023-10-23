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

        <div className="research-section-1 wrapper">
          <div className="research-section-1-cover" style={{backgroundImage: `url('/media/home/research-light.png')`}}></div>
          <div className="research-section-1-content">
            <h1 className="research-section-1-title">CATSUS Research</h1>
            <p><mark>The vision of the proposed CREST Center for Advancement toward Sustainable Urban Systems (CATSUS) is to become a leader in conducting transformative research on the challenges involving energy and water sustainability in urban settings, by promoting faculty engagement in high-level research, and further enhancing the research capability of Cal State LA, while training diverse and talented students who will become the engineers and scientists that will catalyze change in this field. Faculty specialty areas at California State University Los Angeles has led to the development of the research components shown below.</mark>
            </p>
            <div className="research-section-1-content-items">
            { activatedComponents.length > 0 && activatedComponents.slice(0, 5).map((item, idx) => 
              item.active.toLowerCase() == 'activated' 
              ?
              <div key={idx} className="research-section-1-content-items-item" onClick={() => (document.getElementById('section-2').scrollIntoView(), setComponent(item.name.toLowerCase()))}>
                <img 
                  className="image" 
                  src={`${PUBLIC_FILES}/component/${item.icon}`} 
                  // src={`/media/home/${item.name.toLowerCase()}.png`} 
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
              
                <h1 
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
                </h1>
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
          <div className="research-section-3-content wrapper-2">
            <h1 className="research-section-3-title">{ facultyItems.length > 0 ? 'Faculty' : ''}</h1>
              <div className="research-section-3-members">
                {facultyItems.length > 0 && facultyItems.map((item, idx) => 
                  <div key={idx} className="research-section-3-members-item">
                    <div className="research-section-3-members-item-image">
                      <img 
                        src={`${PUBLIC_FILES}/faculty/${item.image}`} 
                        alt={item.name} 
                        onError={(e) => e.target.src = 'https://www.salonlfc.com/wp-content/uploads/2018/01/image-not-found-scaled.png'}
                      />
                    </div>
                    <div className="research-section-3-members-item-description">
                      <h3>{item.name ? item.name : 'No name'}</h3>
                      {item.profession ? <span>{item.profession.substring(0, 15)}, {item.centerAssociation.substring(0, 15)}</span>  : 'No profession'}
                      <h4>Department</h4>
                      {item.department ? <span> {item.department} </span> : 'No department'}
                      {item.officeLocation ? <div><h4>Office</h4>: <span>{item.officeLocation}</span></div>: ''}
                      {item.email ? <div><h4>Email</h4>: <span>{item.email.substring(0, 30)}</span></div> : ''}
                      {item.officePhone ? <div><h4>Phone</h4>: <span>{item.officePhone}</span></div> : ''}
                      {item.website ? <div><h4>Visit</h4>: <span><a href={item.website}>{item.website.substring(0,30)}</a></span></div> : ''}
                    </div>
                    {/* <div className="research-section-3-members-item-name">
                      <span></span>
                      <div>{item.title}{item.name}</div>
                    </div> */}
                  </div>
                )}
              </div>
          </div>
        </div>

        <div className="research-section-3">
          <div className="research-section-3-content wrapper">
            <h1 className="research-section-3-title">{ studentItems.length > 0 ? 'Students' : '' }</h1>
              <div className="research-section-3-members">
                {studentItems.length > 0 && studentItems.map((item, idx) => 
                  <div key={idx} className="research-section-3-members-item">
                    <div className="research-section-3-members-item-image">
                      <img 
                        src={`${PUBLIC_FILES}/student/${item.image}`} 
                        alt={item.name} 
                        onError={(e) => e.target.src = 'https://www.salonlfc.com/wp-content/uploads/2018/01/image-not-found-scaled.png'}
                      />
                    </div>
                    <div className="research-section-3-members-item-description">
                      <h3>{item.name ? item.name : 'No name'}</h3>
                      <h4>Department</h4>
                      {item.department ? <span> {item.department} </span> : 'No department'}
                      {item.officeLocation ? <div><h4>Office</h4>: <span>{item.officeLocation}</span></div>: ''}
                      {item.email ? <div><h4>Email</h4>: <span>{item.email.substring(0, 30)}</span></div> : ''}
                      {item.officePhone ? <div><h4>Phone</h4>: <span>{item.officePhone}</span></div> : ''}
                      {item.website ? <div><h4>Visit</h4>: <span><a href={item.website}>{item.website.substring(0,30)}</a></span></div> : ''}
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
