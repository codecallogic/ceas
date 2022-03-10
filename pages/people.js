import { useState, useEffect } from 'react'
import Navigation from '../components/client/navigation'
import Footer from '../components/client/footer'
import { PUBLIC_FILES } from '../config'

const People = ({
  navMenus,
  openSearch,
  faculty,
  staff,
  students,

  //// METHODS
  setOpenSearch
}) => {
  console.log(students)
  const [type, setType] = useState('faculty')
  
  return (
    <>
    <Navigation
      navMenus={navMenus} 
      openSearch={openSearch}
      setOpenSearch={setOpenSearch}
    >
    </Navigation>
    <div className="people">
      <div className="people-cover" style={{backgroundImage: `url('/media/people/header.png')`}}></div>
      <div className="people-section-1 wrapper">
        <div className="people-section-1-title">People</div>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dignissim convallis aenean et tortor at risus viverra adipiscing. Montes nascetur ridiculus mus mauris vitae ultricies. Quis varius quam quisque id diam vel. Lacus laoreet non curabitur gravida arcu ac tortor. Elit ullamcorper dignissim cras tincidunt. Massa tincidunt dui ut ornare lectus. Dignissim convallis aenean et tortor at risus viverra adipiscing. Ultrices in iaculis nunc sed augue. Blandit aliquam etiam erat velit. Id diam maecenas ultricies mi eget mauris pharetra et ultrices. Facilisis leo vel fringilla est. Diam quis enim lobortis scelerisque fermentum dui faucibus. Mauris commodo quis imperdiet massa. Id diam maecenas ultricies mi eget mauris pharetra et ultrices. Facilisis leo vel fringilla est. Diam quis enim lobortis scelerisque fermentum dui faucibus. Mauris commodo quis imperdiet massa. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dignissim convallis aenean et tortor at risus viverra adipiscing. Montes nascetur ridiculus mus mauris vitae ultricies. </p>
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

        <div className="people-section-3-items">
          {type == 'faculty' && faculty.length > 0 && faculty.map((item, idk) => 
            <div className="people-section-3-items-item">
              <div className="people-section-3-items-item-image">
                <img 
                  src={`${PUBLIC_FILES}/faculty/${item.image}`} 
                  alt={item.name ? item.name : ''}
                  onError={(e) => e.target.src = 'https://icon-library.com/images/not-found-icon/not-found-icon-14.jpg'}
                />
              </div>
              <div className="people-section-3-items-item-description">
                <h3>{item.name ? item.name : 'No name'}</h3>
                {item.profession ? <span>{item.profession}</span>  : 'No profession'}
                <h4>Department</h4>
                {item.department ? <span> {item.department} </span> : 'No department'}
                {item.officeLocation ? <div><h4>Office</h4>: <span>item.officeLocation</span></div>: ''}
                {item.email ? <div><h4>Email</h4>: <span>{item.email}</span></div> : ''}
                {item.officePhone ? <div><h4>Phone</h4>: <span>{item.officePhone}</span></div> : ''}
                {item.website ? <div><h4>Website</h4>: <span><a href={item.website}>{item.website}</a></span></div> : ''}
              </div>
            </div>
          )}

          {type == 'staff' && staff.length > 0 && staff.map((item, idk) => 
            <div className="people-section-3-items-item">
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
                <h4>Postion</h4>
                {item.position ? <span> {item.position} </span> : 'No position'}
                {item.email ? <div><h4>Email</h4>: <span>{item.email}</span></div> : ''}
              </div>
            </div>
          )}

          {type == 'students' && students.length > 0 && students.map((item, idk) => 
            <div className="people-section-3-items-item">
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

export default People
