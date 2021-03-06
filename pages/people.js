import { useState, useEffect } from 'react'
import Navigation from '../components/client/navigation'
import Footer from '../components/client/footer'
import { PUBLIC_FILES } from '../config'
import Toolbar from '../components/client/toolbar'
import { useRouter } from 'next/router'

const People = ({
  navMenus,
  openSearch,
  faculty,
  staff,
  students,
  title,

  //// METHODS
  setOpenSearch,

  //// DATA
  sections
}) => {

  const router = useRouter()
  
  const [type, setType] = useState('faculty')

  const facultySort = ['director (pi)', 'associate director (co-pi)', 'center faculty (co-pi)', 'center faculty']

  useEffect(() => {
    
    let element = document.getElementById(router.query.faculty)
    if(element) element.scrollIntoView({ block: 'end',  behavior: 'smooth' })
    
  })
  
  return (
    <>
    {/* <Toolbar></Toolbar> */}
    <Navigation
      navMenus={navMenus} 
      openSearch={openSearch}
      setOpenSearch={setOpenSearch}
    >
    </Navigation>
    <div className="people">
      <div className="people-cover" style={{backgroundImage: `url('/media/people/header.png')`}}></div>
      <div className="people-section-1 wrapper">
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
      </div>

      <div className="people-section-2 wrapper">
        <div className={`people-section-2-item ${type == 'faculty' ? 'color-scheme-3' : ''}`} onClick={() => setType('faculty')}>
          <img 
            src={`/media/people/${type == 'faculty' ? `${type}-blue` : 'faculty'}.png`} 
            alt="Faculty" 
          />
          <span>Faculty</span>
        </div>
        <div className={`people-section-2-item ${type == 'staff' ? 'color-scheme-3' : ''}`}  onClick={() => setType('staff')}>
          <img 
            src={`/media/people/${type == 'staff' ? `${type}-blue` : 'staff'}.png`} 
            alt="Staff" 
          />
          <span>Staff</span>
        </div>
        <div className={`people-section-2-item ${type == 'students' ? 'color-scheme-3' : ''}`} onClick={() => setType('students')}>
          <img 
            src={`/media/people/${type == 'students' ? `${type}-blue` : 'students'}.png`} 
            alt="Students"
            onClick={() => setType('students')}
          />
          <span>Students</span>
        </div>
      </div>

      <div className="people-section-3 wrapper">
        <div className="people-section-3-title">
          <img src={`/media/people/${type}-blue.png`} alt={type} />
          <span>{type}</span>
        </div>
        {/* console.log(facultySort.indexOf(a.centerAssociation.toLowerCase() - facultySort.indexOf(b.centerAssociation.toLowerCase()))) */}
        <div className="people-section-3-items">
          {type == 'faculty' && faculty.length > 0 && faculty.sort((a, b) => facultySort.indexOf(a.centerAssociation.toLowerCase()) > facultySort.indexOf(b.centerAssociation.toLowerCase()) ? 1 : -1).map((item, idx) => 
            <div key={idx} id={item.name} className="people-section-3-items-item">
              <div className="people-section-3-items-item-image">
                <img 
                  src={`${PUBLIC_FILES}/faculty/${item.image}`} 
                  alt={item.name ? item.name : ''}
                  onError={(e) => e.target.src = 'https://icon-library.com/images/not-found-icon/not-found-icon-14.jpg'}
                />
              </div>
              <div className="people-section-3-items-item-description">
                <h3>{item.name ? item.name : 'No name'}</h3>
                {item.profession ? <span>{item.profession}, {item.centerAssociation}</span>  : 'No profession'}
                <h4>Department</h4>
                {item.department ? <span> {item.department} </span> : 'No department'}
                {item.officeLocation ? <div><h4>Office</h4>: <span>{item.officeLocation}</span></div>: ''}
                {item.email ? <div><h4>Email</h4>: <span>{item.email}</span></div> : ''}
                {item.officePhone ? <div><h4>Phone</h4>: <span>{item.officePhone}</span></div> : ''}
                {item.website ? <div><h4>Website</h4>: <span><a href={item.website}>{item.website}</a></span></div> : ''}
              </div>
            </div>
          )}

          {type == 'staff' && staff.length > 0 && staff.map((item, idx) => 
            <div key={idx} className="people-section-3-items-item">
              <div className="people-section-3-items-item-image">
                <img 
                  src={`${PUBLIC_FILES}/staff/${item.image}`} 
                  alt={item.name ? item.name : ''}
                  onError={(e) => e.target.src = 'https://icon-library.com/images/not-found-icon/not-found-icon-14.jpg'}
                />
              </div>
              <div className="people-section-3-items-item-description">
                <h3>{item.name ? item.name : 'No name'}</h3>
                {item.title ? <span>{item.title}</span>  : 'No title'}
                <h4>Position</h4>
                {item.position ? <span> {item.position} </span> : 'No position'}
                {item.email ? <div><h4>Email</h4>: <span>{item.email}</span></div> : ''}
              </div>
            </div>
          )}

          {type == 'students' && students.length > 0 && students.map((item, idx) => 
            <div key={idx} className="people-section-3-items-item">
              <div className="people-section-3-items-item-image">
                <img 
                  src={`${PUBLIC_FILES}/staff/${item.image}`} 
                  alt={item.name ? item.name : ''}
                  onError={(e) => e.target.src = 'https://icon-library.com/images/not-found-icon/not-found-icon-14.jpg'}
                />
              </div>
              <div className="people-section-3-items-item-description">
                <h3>{item.name ? item.name : 'No name'}</h3>
                <h4>Department</h4>
                {item.department ? <span> {item.department} </span> : 'No department'}
                {item.location ? <div><h4>Location</h4>: <span>{item.location}</span></div>: ''}
                {item.email ? <div><h4>Email</h4>: <span>{item.email}</span></div> : ''}
                {item.advisor[0] ? <div><h4>Advisor</h4>: <span>{item.advisor[0].title} {item.advisor[0].name}</span></div> : ''}
              </div>
            </div>
          )}
        </div>
        
      </div>
      
    </div>
    <Footer></Footer>
    </>
  )
}

People.getInitialProps = ({query}) => {

  let title

  if(query) title = query.faculty
  
  return {
    title: title ? title : ''
  }
  
}

export default People
