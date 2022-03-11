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
          <p>The Center for Energy and Sustainability came into being in the fall of 2009 with the support of a National Science Foundation grant. The Center is part of NSF's vision to fund Centers of Research Excellence in Science and Technology (CRESTs) that address issues critical to the advancement of technologies and the resolution of the issues that affect the wellbeing of the nation and the world. The Center builds upon the expertise in sustainability issues that Cal State LA has developed as the result of prior NSF findings of CEA-CREST, which focused on environmental analysis research. The new Center for Energy and Sustainability (CEaS) was funded in 2009. The Center's funding will continue for 5 years, with an option to renew for an additional 5 years</p>
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
          <p>The concept of sustainable energy research, as realized by the Center, involves a multi-disciplinary effort to address issues of making existing energy technologies more efficient, while at the same time promoting emerging alternative energy technologies that are not reliant on fossil fuels. The Center seeks to promote energy diversity, energy sustainability, and energy efficiency. Along with conducting research, the Center also needs to educate policymakers and the public about the value and applicability of alternative energy technologies, as well as about the environmental impacts of current energy technologies. A further focus of the Center is to educate and prepare students who will advance to higher education and pursue research and teaching positions that will promote the goals and values of sustainable energy. It is up to future educators and researchers to make sustainable energy a reality.</p>
        </div>
      </div>
      <div className="about-section-2 wrapper">
        <div className="about-section-2-paragraph">
          <p>The Center involves 27 faculty members from eight interdisciplinary departments at Cal State LA who lead efforts in 5 research thrust areas: Advanced Materials for Photovoltaic Cells, Microfluid-based Fuel Cells and Optimization, Properties and Applications of Overdoped High-Temperature Superconductors, Modeling and Simulation, and Education and Outreach, Several of these projects address short-term mitigations of current energy concerns such as the impact of carbon emissions on global warming, while several others address the longer term goals of moving away from carbon-based energy dependence.</p>
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
          <p>The Center performs a significant amount of outreach and educational efforts to train both students and educators in energy awareness, advocate for enviromental justice and policy change, and prepare students to enter the sustainable energy workforce as more sustainable technologies come online. The Center is also partnering with other universities to develop a Ph.D. program relevant to sustainability energy analysis and to recruit, train, and mentor promising graduate students, particularly those who have been historically under-represented in the Science, Technology, Engineering, and Mathematics(STEM) fields. Cal State LA has traditionally served this under-represented population, and ranks 12th in the nation in awarding STEM degrees to Hispanics. Over 70 graduate and undergraduate students who are minorities in STEM fields will be supported in their research efforts by the Center over a 5-year period, along with middle and high school students and their teachers. In this way, the Center will build upon the unprecedented success of its predecessor, CEA-CREST, which in its 10-year history at Cal State LA placed 33 of its research fellows in Ph.D. programs, 70% of whom were under-represented minorities.</p>
          <br />
          <p>Center for Energy and Sustainability is funded by the National Science Foundation (NSF) under Grant No HRD-0932421</p>
        </div>
      </div>
    </div>
    <Footer></Footer>
    </>
  )
}

export default About
