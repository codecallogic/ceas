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
      <div className="equipment wrapper">
        <div className="equipment-section-1 wrapper">
          {!selected && equipment.length > 0 && equipment.map((item, idx) => 
            <div 
              key={idx} 
              className="equipment-section-1-announcement "
              onClick={() => setSelected(item.name)}
            >
              <h1 className="equipment-section-1-announcement-title">{item.name}</h1>
              <div className="equipment-section-1-announcement-content">
                <div className="equipment-section-1-announcement-content-equipment">
                  {item.image && 
                  <img 
                    src={`${PUBLIC_FILES}/equipment/${item.image}`} 
                    alt={item.name}
                    onError={(e) => e.target.src = 'https://www.salonlfc.com/wp-content/uploads/2018/01/image-not-found-scaled.png'}
                  />
                  }
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
              <h1 className="equipment-section-2-announcement-title">{item.name}</h1>
              <div className="equipment-section-2-announcement-image">              
                <img 
                  src={`${PUBLIC_FILES}/equipment/${item.image}`} 
                  alt={item.name}
                  onError={(e) => e.target.src = 'https://www.salonlfc.com/wp-content/uploads/2018/01/image-not-found-scaled.png'}
                />
              </div>
              <div className="equipment-section-2-announcement-paragraph" dangerouslySetInnerHTML={{ __html: `${item.description}`}}></div>
            </div>
          </div>
          :
          null
        )}

        {selected && equipment.length > 0 && equipment.map( (item, idx) => 
            item.name == selected ?
            item.lab.map((lab) => 
            <div 
              className="resource-section-3-announcement-content-equipment wrapper"
              onClick={() => window.location.href = `/resources?lab=${lab._id}`}
            >
              <h1 className="resource-section-3-announcement-content-equipment-title">{lab.name}</h1>
              <div className="resource-section-3-announcement-content-equipment-content">
                <div key={idx} className="resource-section-3-announcement-content-equipment-content-image-container">
                  <div className="resource-section-3-announcement-content-equipment-content-image">
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
                    className="resource-section-3-announcement-content-equipment-content-paragraph" 
                    dangerouslySetInnerHTML={{ __html: item.description}} 
                  />
                  :
                  null
                }
              </div>
            </div>
            )
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
