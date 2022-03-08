import Navigation from '../components/client/navigation'
import Footer from '../components/client/footer'
import { PUBLIC_FILES } from '../config'

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
    <Navigation 
      navMenus={navMenus} 
      openSearch={openSearch}
      setOpenSearch={setOpenSearch}
    ></Navigation>
    <div className="resource">
      <div className="resource-section-1 wrapper">
        <div className="resource-section-1-title">Research Facilities</div>
        <p className="resource-section-1-description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
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
