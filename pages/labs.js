import { useState, useEffect } from 'react'
import Navigation from '../components/client/navigation'
import Footer from '../components/client/footer'
import { PUBLIC_FILES } from '../config'
import Toolbar from '../components/client/toolbar'

const Equipment = ({
  navMenus,
  openSearch,

  //// METHODS
  setOpenSearch,

  //// DATA
  labs,
  title
  
}) => {
  console.log(labs)

  return (
    <>
      <Toolbar></Toolbar>
      <Navigation 
        navMenus={navMenus} 
        openSearch={openSearch}
        setOpenSearch={setOpenSearch}
      ></Navigation>
      <div className="lab">
        <div className="lab-section-1 wrapper">
          {!title && labs.length > 0 && labs.map((item, idx) => 
            <div 
              key={idx} 
              className="lab-section-1-announcement "
              onClick={() => window.location = `/labs?title=${item.name}`}
            >
              <div className="lab-section-1-announcement-title">{item.name} - {item.labLocation}</div>
              <div className="lab-section-1-announcement-content">
                <div className="lab-section-1-announcement-content-researcher">
                  <img 
                    src={`${PUBLIC_FILES}/faculty/${item.faculty[0] ? item.faculty[0].image : ''}`}
                    alt={item.faculty[0] ? item.faculty[0].name : ''}
                    onError={(e) => e.target.src = 'https://www.salonlfc.com/wp-content/uploads/2018/01/image-not-found-scaled.png'}
                  />
                  <div className="lab-section-1-announcement-content-researcher-content">
                    <h2>{item.faculty[0] ? item.faculty[0].title : ''} {item.faculty[0] ? item.faculty[0].name : ''}</h2>
                    <h3>{item.faculty[0] ? item.faculty[0].profession : ''}</h3>
                    <h3>{item.faculty[0] ? item.faculty[0].email : ''}</h3>
                    <h3>{item.faculty[0] ? item.faculty[0].officePhone : ''}</h3>
                  </div>
                </div>
                <div className="lab-section-1-announcement-content-lab">
                  <img 
                    src={`${PUBLIC_FILES}/labs/${item.image}`} 
                    alt={item.name}
                    onError={(e) => e.target.src = 'https://www.salonlfc.com/wp-content/uploads/2018/01/image-not-found-scaled.png'}
                  />
                  <div dangerouslySetInnerHTML={{ __html: `${item.description.substring(0, 500)}...`}}>
                  </div>
                </div>
              </div>
            </div>
          )}

          {title && labs.length > 0 && labs.map((item, idx) => 
            item.name == title 
            ?
            <div 
              key={idx} 
              className="lab-section-2-announcement"
            >
              <div className="lab-section-2-researcher">
                <img 
                  src={`${PUBLIC_FILES}/faculty/${item.faculty[0] ? item.faculty[0].image : ''}`}
                  alt={item.faculty[0].name}
                  onError={(e) => e.target.src = 'https://www.salonlfc.com/wp-content/uploads/2018/01/image-not-found-scaled.png'}
                />
                <div className="lab-section-2-researcher-content">
                  <h2>{item.faculty[0] ? item.faculty[0].title : ''} {item.faculty[0] ? item.faculty[0].name : ''}</h2>
                  <h3>{item.faculty[0] ? item.faculty[0].profession : ''}</h3>
                  <h3>{item.faculty[0] ? item.faculty[0].email : ''}</h3>
                  <h3>{item.faculty[0] ? item.faculty[0].officePhone : ''}</h3>
                </div>
              </div>
              <div className="lab-section-2-announcement-title">{item.name} - {item.labLocation}</div>
              <div className="lab-section-2-announcement-image">              
                <img 
                  src={`${PUBLIC_FILES}/labs/${item.image}`} 
                  alt={item.name}
                  onError={(e) => e.target.src = 'https://www.salonlfc.com/wp-content/uploads/2018/01/image-not-found-scaled.png'}
                />
              </div>
              <div className="lab-section-2-announcement-paragraph" dangerouslySetInnerHTML={{ __html: `${item.description.substring(0, 500)}...`}}></div>
              { item.equipment.length > 0 && item.equipment.map((item, idx) => 
                <div className="lab-section-1-announcement-content-equipment">
                  <div className="lab-section-1-announcement-content-equipment-title">{item.name}</div>
                  <div className="lab-section-1-announcement-content-equipment-content">
                    <div key={idx} className="lab-section-1-announcement-content-equipment-content-image-container">
                      <div className="lab-section-1-announcement-content-equipment-content-image">
                        <img 
                          src={`${PUBLIC_FILES}/equipment/${item.image}`} 
                          alt={`${item.name}`}
                          onError={(e) => e.target.src = 'https://www.salonlfc.com/wp-content/uploads/2018/01/image-not-found-scaled.png'}
                        />
                      </div>
                    </div>
                    {item.description 
                      ?  
                      <div 
                        className="lab-section-1-announcement-content-equipment-content-paragraph" 
                        dangerouslySetInnerHTML={{ __html: item.description}} 
                      />
                      :
                      null
                    }
                   
                  </div>
                </div>
              )}
            </div>
            :
            null
          )}
        </div>
      </div>
      <Footer></Footer>
    </>
  )
}

Equipment.getInitialProps = ({query}) => {
  
  let title = null

  if(query.title) title = query.title

  return {
    title: title ? title : null
  }
}

export default Equipment
