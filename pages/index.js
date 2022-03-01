import { useState, useEffect } from 'react'
import SVG from '../files/svg'
import io from 'socket.io-client'
import { SOCKET } from '../config';

//// COMPONENTS
import DesktopNav from '../components/client/navigation'
import Header from '../components/client/home/header'
import Carousel from '../components/client/carousel'
import Search from '../components/client/search'

const socket = io.connect(SOCKET, {transports: ['websocket', 'polling', 'flashsocket']});

const Home = ({}) => {
  
  const [navMenus, setNavMenus] = useState([])
  const [slides, setSlides] = useState([])
  const [components, setComponents] = useState([])
  const [news, setNews] = useState([])
  const [openSearch, setOpenSearch] = useState(false)
  
  useEffect(() => {
    
    socket.on('navigation', (data) => {
      setNavMenus(data)
    })

    socket.on('slides', (data) => {
      setSlides(data)
    })

    socket.on('components', (data) => {
      setComponents(data)
    })

    socket.on('news', (data) => {
      setNews(data)
    })

  }, [])
  
  return (
    <div className="home">
      <DesktopNav navMenus={navMenus} setOpenSearch={setOpenSearch}></DesktopNav>
      <Header slides={slides}></Header>
      
      <div className="home-section-1" style={{backgroundImage: `url('/media/home/city-welcome.png')`}}>
        <div className="home-section-1-cover" style={{backgroundImage: `url('./media/home/city-welcome-backdrop.png')`}}></div>
        <div className="home-section-1-content wrapper">
          <div className="home-section-1-title">Welcome</div>
          <p>The concept of sustainable energy research, as realized by CEaS, involves a multi-disciplinary effort to address issues of making existing energy technologies more efficient while pursuing emerging alternate energy technologies that are not reliant on fossil fules. We conduct transformative research to promote energy diversity, efficiency, and sustainability while training diverse and talented engineers and scientists to catalyze change in this field. We also engage policymakers, schools, and the public to ensure that the technological advances are robust, widely understood and adopted</p>
        </div>
      </div>

      <div className="home-section-2">
        <div className="home-section-2-cover" style={{backgroundImage: `url('/media/home/research.png')`}}></div>
        <div className="home-section-2-content wrapper">
          <div className="home-section-2-title">Research Thrust Center</div>
          <p><mark>The Center involves 27 faculty members from eight interdisciplinary departments at Cal State LA who lead efforts in 5 research thrust areas. Several projects address short-term mitigations of current energy concerns, while some projects address long-term goals of moving away from carbon-based energy dependence.</mark></p>
          <div className="home-section-2-content-items">
            { components.length > 0 && components.slice(0, 6).map((item, idx) => 
              item.active == 'activated' 
              ?
              <div key={idx} className="home-section-2-content-items-item">
                <img 
                  className="image" 
                  src={`/media/home/${item.name.toLowerCase()}.png`} 
                  alt={item.name}
                  onError={(e) => e.target.src = 'https://icon-library.com/images/not-found-icon/not-found-icon-14.jpg'}
                />
                <span>{item.name}</span>
              </div>
              :
              null
            )}
          </div>
        </div>
      </div>

      <div className="home-section-3">
        <div className="home-section-3-cover" style={{backgroundImage: `url('/media/home/application.png')`}}></div>
        <div className="home-section-3-contents wrapper">
          <div className="home-section-3-title">Application Resource Center</div>
          <p>Our programs at California State University, Los Angeles for graduate and undergraduate students in the sciences and engineering fields are offered to students who are interested in research in the broad field of energy and sustainability. Students will work with faculty in various fields, including chemistry, biology, geography, physics, civil, mechanical, and electrical engineering, computer science and technology to conduct research on topics related to photovoltaics (solar cells), fuel cells, combustion, biofuels creation and characterization, carbon sequestration, and others. The research spans the range from computational to wet chemistry to field research, all under the direct mentorship of faculty.</p>
          <div className="home-section-3-items">
            <div className="home-section-3-items-item">
              <div className="home-section-3-items-item-image"><img src="/media/home/icon-undergraduate.png" alt="Undergraduate Student Fellowship"/></div>
              <span>Undergraduate Student Fellowship</span>
              <div className="home-section-3-items-item-image"><img src="/media/home/icon-graduate.png" alt="Graduate Student Fellowship"/></div>
              <span>Graduate Student Fellowship</span>
            </div>
          </div>
        </div>
      </div>


      <div className="home-section-4">
        <div className="home-section-4-contents wrapper">
          <div className="home-section-4-title">Announcements</div>
          <Carousel news={news} setNews={setNews}></Carousel>
          <div className="home-section-4-button-container">
            <div className="home-section-4-button">
              <span>See All Announcements</span>
              <SVG svg={'chevron-right'}></SVG>
            </div>
          </div>
        </div>
      </div>

      <div className="home-section-5">
        <div className="home-section-5-cover" style={{backgroundImage: `url('/media/home/partners.png')`}}></div>
        <div className="home-section-5-contents wrapper">
          <div className="home-section-5-title">Partners</div>
          <div className="home-section-5-items">
              <div className="home-section-5-items-item">
                <img src="/media/home/logo-ceas.png" alt="Logo CEAS"/>
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

      <div className="home-section-6">
        <div className="home-section-6-cover" style={{backgroundImage: `url('/media/home/footer.png')`}}></div>
        <div className="home-section-6-contents wrapper">
          <div className="home-section-6-title">Contact</div>
          <div className="home-section-6-columns">
            <img src="/media/home/logo-footer.png" className="home-section-6-columns-logo"/>
            <div className="home-section-6-columns-column">
              <strong>Location</strong>
              <span>TET C253</span>
              <span>California State University Los Angeles</span>
              <span>Los Angeles, CA 90032</span>
              <strong>Phone</strong>
              <span>(323) 343-5399</span>
              <strong>Email</strong>
              <span>ceas@calstatela.edu</span>
              <strong>Social</strong>
              <div className="home-section-6-columns-column-icons">
                <img src="/media/home/icon-twitter.png" alt="Twitter"/>
                <img src="/media/home/icon-facebook.png" alt="Facebook" />
              </div>
            </div>
            <div className="home-section-6-columns-column">
              <strong>Menu</strong>
              <a>Home</a>
              <a>Research</a>
              <a>Resources</a>
              <a>About</a>
              <a>Apply</a>
              <a>Annoucements</a>
            </div>
            <div className="home-section-6-columns-column">
              <span>&#169; Copyright 2022. All rights reserved.</span>
            </div>
          </div>
        </div>
      </div>
      
      <img 
        src="/media/home/icon-arrow-top.png" alt="" className="home-top"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth"})}
      />
      
     {openSearch && <Search setOpenSearch={setOpenSearch}></Search>}
      
    </div>
  )
}

export default Home
