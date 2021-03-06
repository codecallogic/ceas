import { useState, useEffect } from 'react'
import Navigation from '../components/client/navigation'
import Footer from '../components/client/footer'
import { PUBLIC_FILES } from '../config'
import SVG from '../files/svg'
import Toolbar from '../components/client/toolbar'

const Resource = ({
  navMenus,
  openSearch,
  labs,
  title,

  //// METHODS
  setOpenSearch
}) => {
  
  const [lab, setLab] = useState(title)
  
  return (
    <>
    {/* <Toolbar></Toolbar> */}
    <Navigation 
      navMenus={navMenus} 
      openSearch={openSearch}
      setOpenSearch={setOpenSearch}
    ></Navigation>
    <div className="resource">
      <div className="resource-section-1 wrapper">
        <div className="resource-section-1-title">Research Facilities</div>
        <p className="resource-section-1-description">
          The Center for Energy and Sustainability research faculty and students have access to state-of-the-art facilities, laboratories and research equipment. Recently, the faculty was awarded $1.7 million through NSF ARI2 to renovate several research labs and more than $2 million through NSF MRI grants for the acquisition of new equipment, including a Scanning Electron Microscope, ICP-MS and an high-payload centrifuge. Lab renovations and equipment acquisition will support the institutionalization of the Center.
        </p>
      </div>
      {!lab && labs.length > 0 && labs.map((item, idx) => 
        <div 
          key={idx} 
          className="resource-section-2 wrapper"
        >
          <div 
            className="resource-section-2-title"
            onClick={() => (
              setLab(item.name),
              window.scrollTo(0, 0)
            )}
          >
            <img 
               className="image" 
               src={`${PUBLIC_FILES}/labs/${item.icon}`} 
               alt={item.name}
               onError={(e) => e.target.src = 'https://www.salonlfc.com/wp-content/uploads/2018/01/image-not-found-scaled.png'}
            >
            </img>
            <span>{item.name}</span>
          </div>
          <div className="resource-section-2-subtitle">
            <div 
              className="clickable"
              onClick={() => window.location.href = `/people?faculty=${item.faculty[0].name}`}
            ><span>Lead Researcher: </span> {item.faculty[0] ? item.faculty[0].title : ''} {item.faculty[0] ? item.faculty[0].name : ''}</div>
            <div><span>Lab Resources: </span> {item.labLocation ? item.labLocation : ''}</div>
          </div>
          <div className="resource-section-2-image">
            <img 
              className="image" 
              src={`${PUBLIC_FILES}/labs/${item.image}`} 
              alt={item.name}
              onError={(e) => e.target.src = 'https://www.salonlfc.com/wp-content/uploads/2018/01/image-not-found-scaled.png'}
            />
          </div>
          <div className="resource-section-2-image" dangerouslySetInnerHTML={{__html: item.description ? item.description : ''}}></div>
        </div>
      )}

      {lab ? 
        <div 
          className="resource-section-3-breadcrumb wrapper"
          onClick={() => setLab('')}
        >
          <SVG svg={'arrow-left'}></SVG>
          <span>Back to all</span>
        </div>
        :
        null
      }

      {lab && labs.length > 0 && labs.map((item, idx) => 
        item.name == lab
        ?
        <div className="resource-section-3 wrapper">
          <div 
            key={idx} 
            className="resource-section-3-announcement"
          >
            {/* <div className="lab-section-2-researcher">
              <div className="lab-section-2-researcher-content">
                <h2>{item.faculty[0] ? item.faculty[0].title : ''} {item.faculty[0] ? item.faculty[0].name : ''}</h2>
                <h3>{item.faculty[0] ? item.faculty[0].profession : ''}</h3>
                <h3>{item.faculty[0] ? item.faculty[0].email : ''}</h3>
                <h3>{item.faculty[0] ? item.faculty[0].officePhone : ''}</h3>
              </div>
            </div> */}
            <div className="resource-section-3-announcement-title">{item.name} - {item.labLocation}</div>
            <div className="resource-section-3-announcement-image">              
              <img 
                src={`${PUBLIC_FILES}/labs/${item.image}`} 
                alt={item.name}
                onError={(e) => e.target.src = 'https://www.salonlfc.com/wp-content/uploads/2018/01/image-not-found-scaled.png'}
              />
            </div>
            <div className="resource-section-3-announcement-paragraph" dangerouslySetInnerHTML={{ __html: `${item.description.substring(0, 500)}...`}}></div>
            <div 
              className="resource-section-3-announcement-researcher"
              onClick={() => window.location.href = `people?faculty=${item.faculty[0] ? item.faculty[0].name : ''}`}
            >
              Lead researcher: {item.faculty[0] ? item.faculty[0].name : ''}
            </div>
            { item.equipment.length > 0 && item.equipment.map((item, idx) => 
              <div 
                className="resource-section-3-announcement-content-equipment"
                onClick={() => window.location.href = `/equipment?title=${item.name}`}
              >
                <div className="resource-section-3-announcement-content-equipment-title">{item.name}</div>
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
            )}
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

Resource.getInitialProps = ({query}) => {
  
  let title = null

  if(query.title) title = query.title

  return {
    title: title ? title : null
  }
}

export default Resource
