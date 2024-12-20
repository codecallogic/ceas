import { useState, useEffect } from 'react'
import Navigation from '../components/client/navigation'
import Footer from '../components/client/footer'
import SVG from '../files/svg'
import { useRouter } from 'next/router';

const Resource = ({
  navMenus,
  openSearch,
  labs,
  sections,

  //// METHODS
  setOpenSearch
}) => {
  const router = useRouter();
  const { query } = router;
  const [lab, setLab] = useState('');

  useEffect(() => {
    if(query.lab) setLab(query.lab)
  }, [query])
  
  return (
    <>
    {/* <Toolbar></Toolbar> */}
    <Navigation 
      navMenus={navMenus} 
      openSearch={openSearch}
      setOpenSearch={setOpenSearch}
    ></Navigation>
    <div className="resource wrapper">
      <div className="resource-section-1 wrapper">
        {sections.length && sections.sort((a, b) => +a.order > +b.order ? 1 : -1).map((item, idx) =>
          item.path == router.pathname && item.order == 1 ? 
          <div key={idx}>
            <h1 className="resource-section-1-title">{item.title}</h1>
            <div className="resource-section-1-description" dangerouslySetInnerHTML={{ __html: item.description }}></div>
          </div>
          : 
          null
        )}
      </div>
      {!lab && labs.length > 0 && labs.map((item, idx) => 
        <div 
          key={idx} 
          className="resource-section-2 wrapper"
        >
          <h1 
            className="resource-section-2-title"
            onClick={() => (
              setLab(item._id),
              window.scrollTo(0, 0)
            )}
          >
            {item.icon &&
            <img 
               className="image" 
               src={`${item.icon}`} 
               alt={item.name}
               onError={(e) => e.target.src = 'https://www.salonlfc.com/wp-content/uploads/2018/01/image-not-found-scaled.png'}
            >
            </img>
            }
            <span>{item.name}</span>
          </h1>
          <div className="resource-section-2-subtitle">
            <div 
              className="clickable"
              onClick={() => window.location.href = `/people?faculty=${item.faculty[0].name}`}
            ><span>Lead Researcher: </span> {item.faculty[0] ? item.faculty[0].title : ''} {item.faculty[0] ? item.faculty[0].name : ''}</div>
            <div><span>Lab Resources: </span> {item.labLocation ? item.labLocation : ''}</div>
          </div>
          {item.image &&
          <div className="resource-section-2-image">
            <img 
              className="image" 
              src={`${item.image}`} 
              alt={item.name}
              onError={(e) => e.target.src = 'https://www.salonlfc.com/wp-content/uploads/2018/01/image-not-found-scaled.png'}
            />
          </div>
          }
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
        item._id == lab
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
            <h1 className="resource-section-3-announcement-title">{item.name} - {item.labLocation}</h1>
            <div className="resource-section-3-announcement-image">              
              <img 
                src={`${item.image}`} 
                alt={item.name}
                onError={(e) => e.target.src = 'https://www.salonlfc.com/wp-content/uploads/2018/01/image-not-found-scaled.png'}
              />
            </div>
            <div className="resource-section-3-announcement-paragraph" dangerouslySetInnerHTML={{ __html: `${item.description}`}}></div>
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
                <h1 className="resource-section-3-announcement-content-equipment-title">{item.name}</h1>
                <div className="resource-section-3-announcement-content-equipment-content">
                  <div key={idx} className="resource-section-3-announcement-content-equipment-content-image-container">
                    <div className="resource-section-3-announcement-content-equipment-content-image">
                      <img 
                        src={`${item.image}`} 
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
  
  let id = null

  if(query.lab) id = query.id

  return {
    labID: id ? id : null
  }
}

export default Resource
