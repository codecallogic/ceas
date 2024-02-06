import { useState, useEffect } from 'react'
import SVG from '../files/svg'
import { PUBLIC_FILES } from '../config'
import { useRouter } from 'next/router'

//// COMPONENTS
import DesktopNav from '../components/client/navigation'
import Header from '../components/client/home/header'
import Carousel from '../components/client/carousel'
import Footer from '../components/client/footer'
import Toolbar from '../components/client/toolbar'

const Home = ({
  navMenus,
  slides, 
  components, 
  news,
  openSearch,
  sections,

  //// METHODS
  setNews,
  setOpenSearch
}) => {
  
  const router = useRouter()

  const [activatedComponents, setActivatedComponents] = useState([])

  useEffect(() => {
    
    let active
    
    if(components.length > 0 ){
      active = components.filter((item) => item.active.toLowerCase() == 'activated')
    }

    setActivatedComponents(active)
    
  }, [components])
  
  return (
    <>
    {/* <Toolbar></Toolbar> */}
    <div className="home">
      <DesktopNav 
        navMenus={navMenus} 
        openSearch={openSearch}
        setOpenSearch={setOpenSearch}
      ></DesktopNav>
      <Header slides={slides}></Header>
      
      <div className="home-section-1 wrapper" style={{backgroundImage: `url('/media/home/city-welcome.png')`}}>
        <div className="home-section-1-cover" style={{backgroundImage: `url('./media/home/city-welcome-backdrop.png')`}}></div>
        <div className="home-section-1-content">
        {sections.length && sections.sort((a, b) => +a.order > +b.order ? 1 : -1).map((item, idx) =>
          item.path == router.pathname && item.order == 1 ? 
          <div key={idx}>
            <h1 className="home-section-1-title">{item.title}</h1>
            <div dangerouslySetInnerHTML={{ __html: item.description }}></div>
          </div>
          : 
          null
        )}
        </div>
      </div>

      <div className="home-section-2 wrapper">
        <div className="home-section-2-cover" style={{backgroundImage: `url('/media/home/research-light.png')`}}></div>
        <div className="home-section-2-content">
          {sections.length && sections.sort((a, b) => +a.order > +b.order ? 1 : -1).map((item, idx) =>
            item.path == router.pathname && item.order == 2 ? 
            <div key={idx}>
              <h1 className="home-section-2-title">{item.title}</h1>
              <div dangerouslySetInnerHTML={{ __html: item.description }}></div>
            </div>
            : 
            null
          )}
          <div className="home-section-2-content-items">
            { activatedComponents && activatedComponents.slice(0, 5).map((item, idx) => 
              item.active.toLowerCase() == 'activated' 
              ?
              <div 
                key={idx} className="home-section-2-content-items-item"
                role="button"
                onClick={() => window.open(`/component?title=${item.name}`, '_blank')}
              >
                <div className="home-section-2-content-items-item-image">
                  <img 
                    className="image" 
                    src={`${PUBLIC_FILES}/component/${item.icon}`} 
                    alt={item.name}
                    onError={(e) => e.target.src = 'https://icon-library.com/images/not-found-icon/not-found-icon-14.jpg'}
                  />
                </div>
                <div className="home-section-2-content-items-item-box">
                  <span>{item.name}</span>
                </div>
              </div>
              :
              null
            )}
          </div>
        </div>
      </div>

      <div className="home-section-3 wrapper">
        <div className="home-section-3-cover" style={{backgroundImage: `url('/media/home/application.png')`}}></div>
        <div className="home-section-3-contents">
          {sections.length && sections.sort((a, b) => +a.order > +b.order ? 1 : -1).map((item, idx) =>
            item.path == router.pathname && item.order == 3 ? 
            <div key={idx}>
              <h1 className="home-section-3-title">{item.title}</h1>
              <div dangerouslySetInnerHTML={{ __html: item.description }}></div>
            </div>
            : 
            null
          )}
          {/* <h1 className="home-section-3-title">Application Resource Center</h1>
          <p>Our programs at California State University, Los Angeles for graduate and undergraduate students in the sciences and engineering fields are offered to students who are interested in research in the broad field of energy and sustainability. Students will work with faculty in various fields, including chemistry, biology, geography, physics, civil, mechanical, and electrical engineering, computer science and technology to conduct research on topics related to urban sustainability.</p> */}
          <div className="home-section-3-items">
            <div className="home-section-3-items-item">
              <div 
                className="home-section-3-items-item-image"
                role="button"
                onClick={ () => window.open("https://csula-my.sharepoint.com/personal/rrosell_calstatela_edu/_layouts/15/onedrive.aspx?id=%2Fpersonal%2Frrosell%5Fcalstatela%5Fedu%2FDocuments%2FCATSUS%20March2023%2FCREST%2DCATSUS%20Information%2FForms%2FCATSUS%20Application1%5F9%2E01%2E22%5Fupdated%2Epdf&parent=%2Fpersonal%2Frrosell%5Fcalstatela%5Fedu%2FDocuments%2FCATSUS%20March2023%2FCREST%2DCATSUS%20Information%2FForms&ct=1694113050455&or=OWA%2DNT&cid=0f8751d2%2D5215%2Db215%2Dcbf3%2D1c70a8193c53&ga=1&WSL=1", "_blank")}
              >
                <img src="/media/home/icon-undergraduate.png" alt="CATSUS Fellowship Application"/>
              </div>
              <span>CATSUS Fellowship Application</span>
              <div 
                className="home-section-3-items-item-image"
                role="button"
                onClick={ () => window.open("https://csula-my.sharepoint.com/personal/rrosell_calstatela_edu/_layouts/15/onedrive.aspx?id=%2Fpersonal%2Frrosell%5Fcalstatela%5Fedu%2FDocuments%2FCATSUS%20March2023%2FCREST%2DCATSUS%20Information%2FForms%2FCATSUS%20Undergraduate%20Research%20Fellow%202022%20%281%29%2Epdf&parent=%2Fpersonal%2Frrosell%5Fcalstatela%5Fedu%2FDocuments%2FCATSUS%20March2023%2FCREST%2DCATSUS%20Information%2FForms&ct=1694113452341&or=OWA%2DNT&cid=062f3015%2Dbcb0%2D2f38%2Dae14%2Dee6fdb7342ad&ga=1&WSL=1", "_blank")}
              >
                <img src="/media/home/icon-graduate.png" alt="U-Research Application"/></div>
              <span>U-Research Application</span>
            </div>
          </div>
        </div>
      </div>


      <div className="home-section-4 wrapper-3">
        <div className="home-section-4-contents">
          <h1 className="home-section-4-title">Announcements</h1>
          <Carousel news={news} setNews={setNews}></Carousel>
          <div className="home-section-4-button-container">
            <div className="home-section-4-button" onClick={() => window.location = '/news'}>
              <span>See All Announcements</span>
              <SVG svg={'chevron-right'}></SVG>
            </div>
          </div>
        </div>
      </div>

      <div className="home-section-5 wrapper">
        {/* <div className="home-section-5-cover"></div> */}
        <div className="home-section-5-contents">
          {/* <h1 className="home-section-5-title">Partners</h1> */}
          <div className="home-section-5-items">
              <div className="home-section-5-items-item">
                <img src="/logo_nav.png" alt="Logo CATSUS"/>
              </div>
              <div className="home-section-5-items-item">
                <img src="/media/home/logo-la.png" alt="Logo LA" />
              </div>
              <div className="home-section-5-items-item">
                <img src="/media/home/logo-nsf.png" alt="Logo NSF" />
              </div>
          </div>
        </div>
      </div>

      <Footer></Footer>
      
    </div>
    </>
  )
}

export default Home
