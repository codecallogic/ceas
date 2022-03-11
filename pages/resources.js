import Navigation from '../components/client/navigation'
import Footer from '../components/client/footer'
import { PUBLIC_FILES } from '../config'
import Toolbar from '../components/client/toolbar'

const Resource = ({
  navMenus,
  openSearch,
  labs,

  //// METHODS
  setOpenSearch
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
    <div className="resource">
      <div className="resource-section-1 wrapper">
        <div className="resource-section-1-title">Research Facilities</div>
        <p className="resource-section-1-description">
          The Center for Energy and Sustainability research faculty and students have access to state-of-the-art facilities, laboratories and research equipment. Recently, the faculty was awarded $1.7 million through NSF ARI2 to renovate several research labs and more than $2 million through NSF MRI grants for the acquisition of new equipment, including a Scanning Electron Microscope, ICP-MS and an high-payload centrifuge. Lab renovations and equipment acquisition will support the institutionalization of the Center.
        </p>
      </div>
      {labs.length > 0 && labs.map((item, idx) => 
        <div key={idx} className="resource-section-2 wrapper">
          <div className="resource-section-2-title">
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
            <div><span>Lead Researcher: </span> {item.faculty[0] ? item.faculty[0].title : ''} {item.faculty[0] ? item.faculty[0].name : ''}</div>
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
    </div>
    <Footer></Footer>
    </>
  )
}

export default Resource
