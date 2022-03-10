import Navigation from '../components/client/navigation'
import Footer from '../components/client/footer'
import { PUBLIC_FILES } from '../config'
import Toolbar from '../components/client/toolbar'

const About = ({
  navMenus,
  openSearch,
  equipment,

  //// METHODS
  setOpenSearch
}) => {
  
  return (
    <>
    <Toolbar></Toolbar>
    <Navigation
      navMenus={navMenus} 
      openSearch={openSearch}
      setOpenSearch={setOpenSearch}
    ></Navigation>
    <div className="about">
      <div className="about-cover" style={{backgroundImage: `url('/media/about/header.png')`}}></div>
      <div className="about-section-1 wrapper">
        <div className="about-section-1-title">The Center For Energy And Sustainability</div>
      </div>
      <div className="about-section-2 wrapper">
        <div className="about-section-2-paragraph">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dignissim convallis aenean et tortor at risus viverra adipiscing. Montes nascetur ridiculus mus mauris vitae ultricies. Quis varius quam quisque id diam vel. Lacus laoreet non curabitur gravida arcu ac tortor. Elit ullamcorper dignissim cras tincidunt. Massa tincidunt dui ut ornare lectus. Dignissim convallis aenean et tortor at risus viverra adipiscing. Ultrices in iaculis nunc sed augue. Blandit aliquam etiam erat velit. Id diam maecenas ultricies mi eget mauris pharetra et ultrices. Facilisis leo vel fringilla est. Diam quis enim lobortis scelerisque fermentum dui faucibus. Mauris commodo quis imperdiet massa. Id diam maecenas ultricies mi eget mauris pharetra et ultrices. Facilisis leo vel fringilla est. Diam quis enim lobortis scelerisque fermentum dui faucibus. Mauris commodo quis imperdiet massa.</p>
        </div>
        { equipment.length > 0 && equipment.map((item, idx) => 
          item.order == '1' ?
          <div className="about-section-2-image-container">
            <div className="about-section-2-image">
              <img
                className="image" 
                src={ item ? `${PUBLIC_FILES}/equipment/${item.image}` : 'https://icon-library.com/images/not-found-icon/not-found-icon-14.jpg'} 
                alt={ item ? item.name : ''}
                onError={(e) => e.target.src = 'https://icon-library.com/images/not-found-icon/not-found-icon-14.jpg'}
              >
              </img>
              <div dangerouslySetInnerHTML={{__html: item ? (`${item.description.substring(0, 70) + (item.description.length > 70 ? '...' : '')}`) : 'Diam quis enim lobortis scelerisque fermentum dui faucibus. Mauris commodo quis imperdiet massa.'}}></div>
            </div>
          </div>
          :
          <div className="about-section-2-image-container">
            <div className="about-section-2-image">
              <img
                className="image" 
                src={ 'https://icon-library.com/images/not-found-icon/not-found-icon-14.jpg'} 
                alt={ ''}
                onError={(e) => e.target.src = 'https://icon-library.com/images/not-found-icon/not-found-icon-14.jpg'}
              >
              </img>
              <div dangerouslySetInnerHTML={{__html: 'Diam quis enim lobortis scelerisque fermentum dui faucibus. Mauris commodo quis imperdiet massa.'}}></div>
            </div>
          </div>
        )}
      </div>
      <div className="about-section-2 wrapper">
        <div className="about-section-2-paragraph-full">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dignissim convallis aenean et tortor at risus viverra adipiscing. Montes nascetur ridiculus mus mauris vitae ultricies. Quis varius quam quisque id diam vel. Lacus laoreet non curabitur gravida arcu ac tortor. Elit ullamcorper dignissim cras tincidunt. Massa tincidunt dui ut ornare lectus. Dignissim convallis aenean et tortor at risus viverra adipiscing. Ultrices in iaculis nunc sed augue. Blandit aliquam etiam erat velit. Id diam maecenas ultricies mi eget mauris pharetra et ultrices. Facilisis leo vel fringilla est. Diam quis enim lobortis scelerisque fermentum dui faucibus. Mauris commodo quis imperdiet massa. Id diam maecenas ultricies mi eget mauris pharetra et ultrices. Facilisis leo vel fringilla est. Diam quis enim lobortis scelerisque fermentum dui faucibus. Mauris commodo quis imperdiet massa.</p>
        </div>
      </div>
      <div className="about-section-2 wrapper">
        <div className="about-section-2-paragraph">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dignissim convallis aenean et tortor at risus viverra adipiscing. Montes nascetur ridiculus mus mauris vitae ultricies. Quis varius quam quisque id diam vel. Lacus laoreet non curabitur gravida arcu ac tortor. Elit ullamcorper dignissim cras tincidunt. Massa tincidunt dui ut ornare lectus. Dignissim convallis aenean et tortor at risus viverra adipiscing. Ultrices in iaculis nunc sed augue. Blandit aliquam etiam erat velit. Id diam maecenas ultricies mi eget mauris pharetra et ultrices. Facilisis leo vel fringilla est. Diam quis enim lobortis scelerisque fermentum dui faucibus. Mauris commodo quis imperdiet massa. Id diam maecenas ultricies mi eget mauris pharetra et ultrices. Facilisis leo vel fringilla est. Diam quis enim lobortis scelerisque fermentum dui faucibus. Mauris commodo quis imperdiet massa.</p>
        </div>
        { equipment.length > 0 && equipment.map((item, idx) => 
        item.order == '2' ?
        <div className="about-section-2-image-container">
          <div className="about-section-2-image">
            <img
              className="image" 
              src={ item ? `${PUBLIC_FILES}/equipment/${item.image}` : 'https://icon-library.com/images/not-found-icon/not-found-icon-14.jpg'} 
              alt={ item ? item.name : ''}
              onError={(e) => e.target.src = 'https://icon-library.com/images/not-found-icon/not-found-icon-14.jpg'}
            >
            </img>
            <div dangerouslySetInnerHTML={{__html: item ? (`${item.description.substring(0, 70) + (item.description.length > 70 ? '...' : '')}`) : 'Diam quis enim lobortis scelerisque fermentum dui faucibus. Mauris commodo quis imperdiet massa.'}}></div>
          </div>
        </div>
        :
        <div className="about-section-2-image-container">
          <div className="about-section-2-image">
            <img
              className="image" 
              src={ 'https://icon-library.com/images/not-found-icon/not-found-icon-14.jpg'} 
              alt={ ''}
              onError={(e) => e.target.src = 'https://icon-library.com/images/not-found-icon/not-found-icon-14.jpg'}
            >
            </img>
            <div dangerouslySetInnerHTML={{__html: 'Diam quis enim lobortis scelerisque fermentum dui faucibus. Mauris commodo quis imperdiet massa.'}}></div>
          </div>
        </div>
        )}
      </div>

      <div className="about-section-2 wrapper">
        <div className="about-section-2-image-container-full">
          <div className="about-section-2-image">
            <img
               className="image" 
               src={ equipment[0] ? `${PUBLIC_FILES}/equipment/${equipment[0].image}` : 'https://icon-library.com/images/not-found-icon/not-found-icon-14.jpg'} 
               alt={equipment[0] ? equipment[0].name : ''}
               onError={(e) => e.target.src = 'https://icon-library.com/images/not-found-icon/not-found-icon-14.jpg'}
            >
            </img>
            <div dangerouslySetInnerHTML={{__html: equipment[0] ? (`${equipment[0].description.substring(0, 300) + (equipment[0].description.length > 300 ? '...' : '')}`) : 'Diam quis enim lobortis scelerisque fermentum dui faucibus. Mauris commodo quis imperdiet massa.'}}></div>
          </div>
        </div>
      </div>

      <div className="about-section-2 wrapper">
        <div className="about-section-2-paragraph-full">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dignissim convallis aenean et tortor at risus viverra adipiscing. Montes nascetur ridiculus mus mauris vitae ultricies. Quis varius quam quisque id diam vel. Lacus laoreet non curabitur gravida arcu ac tortor. Elit ullamcorper dignissim cras tincidunt. Massa tincidunt dui ut ornare lectus. Dignissim convallis aenean et tortor at risus viverra adipiscing. Ultrices in iaculis nunc sed augue. Blandit aliquam etiam erat velit. Id diam maecenas ultricies mi eget mauris pharetra et ultrices. Facilisis leo vel fringilla est. Diam quis enim lobortis scelerisque fermentum dui faucibus. Mauris commodo quis imperdiet massa. Id diam maecenas ultricies mi eget mauris pharetra et ultrices. Facilisis leo vel fringilla est. Diam quis enim lobortis scelerisque fermentum dui faucibus. Mauris commodo quis imperdiet massa.</p>
        </div>
      </div>
    </div>
    <Footer></Footer>
    </>
  )
}

export default About
