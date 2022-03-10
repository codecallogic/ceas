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

  useEffect(() => {
    let active = components.filter((item) => item.active.toLowerCase() == 'activated')

    setActivatedComponents([...active])
    
  }, [components])
  
  return (
    <>
      <Toolbar></Toolbar>
      <Navigation 
        navMenus={navMenus} 
        openSearch={openSearch}
        setOpenSearch={setOpenSearch}
      ></Navigation>
      <div className="research">

        <div className="research-section-1">
          <div className="research-section-1-cover" style={{backgroundImage: `url('/media/home/research.png')`}}></div>
          <div className="research-section-1-content wrapper">
            <div className="research-section-1-title">CEAS Research</div>
            <p><mark>The overarching goal of the Center for Energy and Sustainability is to research and develop new technologies that can potentially help the world meet its growing energy demand while considering the sustainability of these technologies and their impact to environmental systems. Faculty specialty areas at California State University Los Angeles has led to the development of the research components shown below. Click here for a complete list of publications developed at CEaS</mark>
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
              
                <div key={idx}className="research-section-2-title">
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
            { component == '' && activatedComponents.length > 0 && activatedComponents[0].name
              ?
              <div key={activatedComponents[0].name} className="research-section-2-title">
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
            }


            { activatedComponents.length > 0 && activatedComponents.slice(0, 5).map((item, idx) => 
              item.name.toLowerCase() == component
              ?
              
                <div className="research-section-2-image">
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
            { component == '' && activatedComponents.length > 0 && activatedComponents[0].name
              ?
              <div className="research-section-2-image">
                <img 
                  className="image" 
                  src={`${PUBLIC_FILES}/component/${activatedComponents[0].image}`} 
                  alt={activatedComponents[0].name}
                  onError={(e) => e.target.src = 'https://www.salonlfc.com/wp-content/uploads/2018/01/image-not-found-scaled.png'}
                />
              </div>
              :
              null
            }


            { activatedComponents.length > 0 && activatedComponents.slice(0, 5).map((item, idx) => 
              item.name.toLowerCase() == component
              ?
              
                <p>{item.longDescription}</p>
              :
              null
            )}
            { component == '' && activatedComponents.length > 0 && activatedComponents[0].name
              ?
              
              <p>{activatedComponents[0].longDescription}</p>
              :
              null
            }
          </div>
        </div>

        <div className="research-section-3">
          <div className="research-section-3-content wrapper">
            <div className="research-section-3-title">Faculty</div>
              <div className="research-section-3-members">
                {faculty.length > 0 && faculty.map((item, idx) => 
                  <div className="research-section-3-members-item">
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
            <div className="research-section-3-title">Students</div>
              <div className="research-section-3-members">
                {students.length > 0 && students.map((item, idx) => 
                  <div className="research-section-3-members-item">
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
