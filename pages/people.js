import { useState, useEffect } from 'react'
import Navigation from '../components/client/navigation'
import Footer from '../components/client/footer'
import { PUBLIC_FILES } from '../config'
import { groupBy } from '../helpers/tables'
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
  const [graduated, setGraduated] = useState([])
  const [active, setActive] = useState([])
  const [terminated, setTerminated] = useState([])
  const [studentsCategorized, setStudentsCategorized] = useState([])

  const facultySort = ['director (pi)', 'associate director (co-pi)', 'center faculty (co-pi)', 'center faculty']

  useEffect(() => {
    
    let element = document.getElementById(router.query.faculty)
    if(element) element.scrollIntoView({ block: 'end',  behavior: 'smooth' })
    
  }, [])

  useEffect(() => {
    if(students.length > 0){

      students.map((item) => {

        if(item.status == 'Graduated'){
          setGraduated( oldArray => [...oldArray, item])
        }

        if(item.status == 'Active'){
          setActive( oldArray => [...oldArray, item])
        }

        if(item.status == 'Terminated'){
          setTerminated( oldArray => [...oldArray, item])
        }
        
      })
      
    }

    const centerAssociation = groupBy(students, 'centerAssociation')

    setStudentsCategorized(centerAssociation)
    
  }, [students])
  
  return (
    <>
    {/* <Toolbar></Toolbar> */}
    <Navigation
      navMenus={navMenus} 
      openSearch={openSearch}
      setOpenSearch={setOpenSearch}
    >
    </Navigation>
    <div className="people wrapper">
      <div className="people-cover" style={{backgroundImage: `url('/media/people/header.png')`}}></div>
      <div className="people-section-1 wrapper">
        {sections.length && sections.sort((a, b) => +a.order > +b.order ? 1 : -1).map((item, idx) =>
           item.path == router.pathname ? 
          <div key={idx}>
          {item.title ? <h1 className="about-section-2-title">{item.title}</h1> : null }
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
        <h1 className="people-section-3-title">
          <img src={`/media/people/${type}-blue.png`} alt={type} />
          <span>{type}</span>
        </h1>
        
        <div className="people-section-3-items">
          {type == 'faculty' && faculty.length > 0 && faculty.sort((a, b) => facultySort.indexOf(a.centerAssociation.toLowerCase()) > facultySort.indexOf(b.centerAssociation.toLowerCase()) ? 1 : -1).map((item, idx) => 
            <div key={idx} id={item.name} className="people-section-3-items-item">
              <div className="people-section-3-items-item-image">
                <img 
                  src={`${PUBLIC_FILES}/faculty/${item.image}`} 
                  alt={item.name ? item.name : ''}
                  onError={(e) => e.target.src = 'https://secure.gravatar.com/avatar/9cd4b9709939e0ce4b8645e55e96c8d0?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Fdefault-avatar-0.png'}
                />
              </div>
              <div className="people-section-3-items-item-description">
                <h3>{item.name ? item.name : 'No name'}</h3>
                {item.profession ? <span>{item.profession}, {item.centerAssociation}</span>  : 'No profession'}
                <h4>Department</h4>
                {item.department ? <span> {item.department} </span> : 'No department'}
                {item.officeLocation ? <div><h4>Office</h4>: <span>{item.officeLocation}</span></div>: ''}
                {item.email ? <div><h4>Email</h4>: <span>{item.email.substring(0, 30)}</span></div> : ''}
                {item.officePhone ? <div><h4>Phone</h4>: <span>{item.officePhone}</span></div> : ''}
                {item.website ? <div><h4>Visit</h4>: <span><a href={item.website}>{item.website.substring(0,30)}</a></span></div> : ''}
              </div>
            </div>
          )}

          {type == 'staff' && staff.length > 0 && staff.map((item, idx) => 
            <div key={idx} className="people-section-3-items-item">
              <div className="people-section-3-items-item-image">
                <img 
                  src={`${PUBLIC_FILES}/staff/${item.image}`} 
                  alt={item.name ? item.name : ''}
                  onError={(e) => e.target.src = 'https://secure.gravatar.com/avatar/9cd4b9709939e0ce4b8645e55e96c8d0?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Fdefault-avatar-0.png'}
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

        </div>
        
        {type == 'students' && Object.keys(studentsCategorized).length > 0 && Object.keys(studentsCategorized).map((item) => 
          <>
          <div className="people-section-3-subtitle">{item}</div>
          <div className="people-section-3-items">
            {studentsCategorized[item].map((student, idx) =>             
              <div key={idx} className="people-section-3-items-item">
                <div className="people-section-3-items-item-image">
                  <img 
                    src={`${PUBLIC_FILES}/student/${student.image}`} 
                    alt={student.name ? student.name : ''}
                    onError={(e) => e.target.src = 'https://secure.gravatar.com/avatar/9cd4b9709939e0ce4b8645e55e96c8d0?d=https%3A%2F%2Favatar-management--avatars.us-west-2.prod.public.atl-paas.net%2Fdefault-avatar-0.png'}
                  />
                </div>
                <div className="people-section-3-items-item-description">
                  <h3>{student.name ? student.name : 'No name'}</h3>
                  <h4>Department</h4>
                  {student.department ? <span> {student.department} </span> : 'No department'}
                  {student.location ? <div><h4>Location</h4>: <span>{student.location}</span></div>: ''}
                  {student.email ? <div><h4>Email</h4>: <span>{student.email}</span></div> : ''}
                </div>
              </div>
            )}
          </div>
          </>
        )}
        
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
