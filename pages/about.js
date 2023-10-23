import { useEffect, useState } from 'react'
import Navigation from '../components/client/navigation'
import Footer from '../components/client/footer'
import { PUBLIC_FILES } from '../config'
import Toolbar from '../components/client/toolbar'
import { useRouter } from 'next/router'


const About = ({
  navMenus,
  openSearch,

  //// METHODS
  setOpenSearch,

  //// DATA
  sections
}) => {
  
  const router = useRouter()
  
  return (
    <>
    {/* <Toolbar></Toolbar> */}
    <Navigation
      navMenus={navMenus} 
      openSearch={openSearch}
      setOpenSearch={setOpenSearch}
    ></Navigation>
    <br />
    <br />
    <br />
    <br />
    <div className="about wrapper">
      <div className="about-cover" style={{backgroundImage: `url('/media/about/header.png')`}}></div>
      <div className="about-section-2 wrapper">
        <h1 className="about-section-2-title">About</h1>
        {sections.length && sections.sort((a, b) => +a.order > +b.order ? 1 : -1).map((item, idx) =>
           item.path == router.pathname ? 
          <div key={idx}>
          {item.title ? <div className="about-section-2-title">{item.title}</div> : null }
          <div className="about-section-2-content">
            { item.description 
              ?
              <div 
              className="about-section-2-content-paragraph" 
              dangerouslySetInnerHTML={{ __html: item.description ? item.description : '' }} 
              />
              : 
              null
            }
            { item.image ? 
              <div key={idx} className="about-section-2-content-image-container">
                <div className="about-section-2-content-image">
                  <img
                    className="image" 
                    src={`${PUBLIC_FILES}/section/${item.image}`} 
                    alt={ item.image ? item.image : ''}
                    onError={(e) => e.target.src = 'https://icon-library.com/images/not-found-icon/not-found-icon-14.jpg'}
                  >
                  </img>
                  <div dangerouslySetInnerHTML={{__html: item.description ? (`${item.description.substring(0, 70) + (item.description.length > 70 ? '...' : '')}`) : 'Diam quis enim lobortis scelerisque fermentum dui faucibus. Mauris commodo quis imperdiet massa.'}}></div>
                </div>
              </div>
              : 
              null
            }
          </div>
          </div>
          : 
          null
        )}
        <br />
        <br />
        <br />
        <br />
      </div>
    </div>
    <Footer></Footer>
    </>
  )
}

export default About
