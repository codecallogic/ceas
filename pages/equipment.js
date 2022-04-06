import { useState, useEffect } from 'react'
import Navigation from '../components/client/navigation'
import Footer from '../components/client/footer'
import { PUBLIC_FILES } from '../config'
import SVG from '../files/svg'
import Toolbar from '../components/client/toolbar'

const Equipment = ({
  navMenus,
  openSearch,

  //// METHODS
  setOpenSearch,

  //// DATA
  equipment,
  title
  
}) => {

  const [selected, setSelected] = useState(title)

  return (
    <>
      {/* <Toolbar></Toolbar> */}
      <Navigation 
        navMenus={navMenus} 
        openSearch={openSearch}
        setOpenSearch={setOpenSearch}
      ></Navigation>
      <div className="equipment">
        <div className="equipment-section-1 wrapper">
          {!selected && equipment.length > 0 && equipment.map((item, idx) => 
            <div 
              key={idx} 
              className="equipment-section-1-announcement "
              onClick={() => setSelected(item.name)}
            >
              <div className="equipment-section-1-announcement-title">{item.name}</div>
              <div className="equipment-section-1-announcement-content">
                <div className="equipment-section-1-announcement-content-equipment">
                  <img 
                    src={`${PUBLIC_FILES}/equipment/${item.image}`} 
                    alt={item.name}
                    onError={(e) => e.target.src = 'https://www.salonlfc.com/wp-content/uploads/2018/01/image-not-found-scaled.png'}
                  />
                  <div dangerouslySetInnerHTML={{ __html: `${item.description.substring(0, 500)}...`}}>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {selected ? 
          <div 
            className="resource-section-3-breadcrumb wrapper"
            onClick={() => setSelected('')}
          >
            <SVG svg={'arrow-left'}></SVG>
            <span>Back to all</span>
          </div>
          :
          null
        }

        {selected && equipment.length > 0 && equipment.map((item, idx) => 
          item.name == selected 
          ?
          <div className="equipment-section-2 wrapper">
            <div 
              key={idx} 
              className="equipment-section-2-announcement"
            >
              <div className="equipment-section-2-announcement-title">{item.name}</div>
              <div className="equipment-section-2-announcement-image">              
                <img 
                  src={`${PUBLIC_FILES}/equipment/${item.image}`} 
                  alt={item.name}
                  onError={(e) => e.target.src = 'https://www.salonlfc.com/wp-content/uploads/2018/01/image-not-found-scaled.png'}
                />
              </div>
              <div className="equipment-section-2-announcement-paragraph" dangerouslySetInnerHTML={{ __html: `${item.description.substring(0, 500)}...`}}></div>
            </div>
          </div>
          :
          null
        )}

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
