import {connect} from 'react-redux'
import {useState, useEffect} from 'react'
import SVG from '../../files/svg'
import {facultyTitles, centerAssociation} from '../../utilities/dropdowns'
import {PUBLIC_FILES} from '../../config'

const Modal = ({
  type,
  functionType,
  title,
  resetUI,
  setModal,
  setMessage,
  message,
  loading,
  preventEvent,
  setElementText,

  //// DATA
  data,

  //// REDUCERS
  createAdmin,
  admin,
  createComponent,
  component,
  createFaculty,
  faculty,

  //// CRUD FUNCTIONS
  createNewAdmin,
  updateProfile,
  changeEmail,
  updateAdmin,
  submitComponent,
  updateComponent,
  submitFaculty
}) => {
  const [dropdown, setDropdown] = useState('')

  const isNumber = (data) => {
    let reg = new RegExp(/[0-9\-\(\)\+\s]+/gm)
    return reg.test(data)
  }

  const validateIsPhoneNumber = (type, reducerKey, method) => {
    const input = document.getElementById(type)
    const cleanNum = input.value.toString().replace(/\D/g, '');

    input.onkeydown = function(event){
      if(event.keyCode == 8){
        if(cleanNum.length == 1) return method(reducerKey, '')
        return method(reducerKey, cleanNum.substr(0, cleanNum.length - 0))
      }
    }

    const match = cleanNum.match(/^(\d{3})(\d{0,3})(\d{0,4})$/);
    console.log(match)
    if (match) {
      return  method(reducerKey, ('(' + match[1] + ') ' + (match[2] ? match[2] + "-" : "") + match[3]));
    }

    return null;
  }
  
  return (
    <>
    {type == 'create_faculty' &&
      <div className="accountUpdateProfile-modal">
        <div className="accountUpdateProfile-modal-box">
          <div className="accountUpdateProfile-modal-box-svg" onClick={() => (resetUI(), setModal(''), setMessage(''))}><SVG svg={'close'}></SVG></div>
          <div className="accountUpdateProfile-modal-box-header">
            <div className="accountUpdateProfile-modal-box-header-title">{title}</div>
          </div>
          <div className="accountUpdateProfile-modal-box-content">
            <form action="" className="form-group">
              <div className="form-group-100 mb1">
              <div className="form-group-100">
                <div className="form-group-100-field-input-file">
                  { functionType == 'update_faculty' ?
                    <label htmlFor="profileImage">
                      {faculty.profileImage ? <img src={`${PUBLIC_FILES}/faculty/${faculty.profileImage}`}></img> : <SVG svg={'cloud-upload'}></SVG>} {faculty.profileImage ? faculty.profileImage : 'Upload Image'}
                    </label>
                    :
                    <label htmlFor="profileImage">
                      {faculty.profileImage ? <img src={URL.createObjectURL(faculty.profileImage)}></img> : <SVG svg={'cloud-upload'}></SVG>} {faculty.profileImage ? faculty.profileImage.name : 'Upload Image'}
                    </label>
                  }
                  <input 
                  type="file"
                  id="profileImage" 
                  onChange={(e) => (setMessage(''), createFaculty('profileImage', e.target.files[0]))}
                  />
                </div>
              </div>
                <div className="form-group-100-field">
                  <div 
                    id="title" 
                  />
                  <label 
                    className={(faculty.title.length > 0 ? ' labelHover' : '') + ` form-group-100-field-label-dropdown`}
                    onClick={() => dropdown == 'title' ? setDropdown('') : setDropdown('title')}
                  >
                    Title
                    <SVG svg={'dropdown'}></SVG>
                  </label>
                </div>
                { dropdown == 'title' &&
                <div className="form-group-100-field-dropdown">
                  {facultyTitles && facultyTitles.map((item, idx) => 
                    <div key={idx}
                    className="form-group-100-field-dropdown-item" 
                    onClick={() => (setElementText('title', item.title), createFaculty('title', item.title), setDropdown(''))}
                    >
                      {item.title}
                    </div>
                  )
                  }
                </div>
                }
              </div>
              <div className="form-group-100">
                <div className="form-group-100-field">
                  <div 
                  id="name" 
                  contentEditable="true" 
                  onInput={(e) => (preventEvent('name'), setMessage(''), createFaculty('name', e.target.innerText))}
                  />
                  <label 
                  className={faculty.name.length > 0 ? ' labelHover' : ''}>
                    Name
                  </label>
                </div>
              </div>
              <div className="form-group-100">
                <div className="form-group-100-field">
                  <div 
                  id="profession" 
                  contentEditable="true" 
                  onInput={(e) => (preventEvent('profession'), setMessage(''), createFaculty('profession', e.target.innerText))}
                  />
                  <label 
                  className={faculty.name.length > 0 ? ' labelHover' : ''}>
                    Profession
                  </label>
                </div>
              </div>
              <div className="form-group-100">
                <div className="form-group-100-field">
                  <div 
                  id="department" 
                  contentEditable="true" 
                  onInput={(e) => (preventEvent('department'), setMessage(''), createFaculty('department', e.target.innerText))}
                  />
                  <label 
                  className={faculty.department.length > 0 ? ' labelHover' : ''}>
                    Department
                  </label>
                </div>
              </div>
              <div className="form-group-100">
                <div className="form-group-100-field">
                  <div 
                  id="email" 
                  contentEditable="true" 
                  onInput={(e) => (preventEvent('email'), setMessage(''), createFaculty('email', e.target.innerText))}
                  />
                  <label 
                  className={faculty.email.length > 0 ? ' labelHover' : ''}>
                    Email
                  </label>
                </div>
              </div>
              <div className="form-group-100">
                <div className="form-group-100-field">
                  <div 
                  id="website" 
                  contentEditable="true" 
                  onInput={(e) => (preventEvent('website'), setMessage(''), createFaculty('website', e.target.innerText))}
                  />
                  <label 
                  className={faculty.website.length > 0 ? ' labelHover' : ''}>
                    Website
                  </label>
                </div>
              </div>
              <div className="form-group-100">
                <div className="form-group-100-field-input">
                  <input 
                  id="phone" 
                  value={faculty.officePhone}
                  onChange={(e) => (setMessage(''), e.target.value.length < 15 ? isNumber(e.target.value) ? (createFaculty('officePhone', e.target.value), validateIsPhoneNumber('phone', 'officePhone', createFaculty)): null : null)}
                  />
                  <label 
                  className={`input-label ` + (faculty.officePhone.length > 0 ? ' labelHover' : '')}>
                    Office Phone
                  </label>
                </div>
              </div>
              <div className="form-group-100">
                <div className="form-group-100-field">
                  <div 
                  id="officeLocation" 
                  contentEditable="true" 
                  onInput={(e) => (preventEvent('officeLocation'), setMessage(''), createFaculty('officeLocation', e.target.innerText))}
                  />
                  <label 
                  className={faculty.officeLocation.length > 0 ? ' labelHover' : ''}>
                    Office Location
                  </label>
                </div>
              </div>
              <div className="form-group-100 mb1">
                <div className="form-group-100-field">
                  <div 
                    id="centerAssociation" 
                  />
                  <label 
                    className={(faculty.centerAssociation.length > 0 ? ' labelHover' : '') + ` form-group-100-field-label-dropdown`}
                    onClick={() => dropdown == 'centerAssociation' ? setDropdown('') : setDropdown('centerAssociation')}
                  >
                    Center Association
                    <SVG svg={'dropdown'}></SVG>
                  </label>
                </div>
                { dropdown == 'centerAssociation' &&
                <div className="form-group-100-field-dropdown">
                  {centerAssociation && centerAssociation.map((item, idx) => 
                    <div key={idx}
                    className="form-group-100-field-dropdown-item" 
                    onClick={() => (setElementText('centerAssociation', item.association), createFaculty('centerAssociation', item.association), setDropdown(''))}
                    >
                      {item.association}
                    </div>
                  )
                  }
                </div>
                }
              </div>
              <div className="form-group-100 mb1">
                <div className="form-group-100-field">
                  <div 
                    id="componentOne" 
                  />
                  <label 
                    className={(faculty.componentOne.length > 0 ? ' labelHover' : '') + ` form-group-100-field-label-dropdown`}
                    onClick={() => dropdown == 'componentOne' ? setDropdown('') : setDropdown('componentOne')}
                  >
                    Component One
                    <SVG svg={'dropdown'}></SVG>
                  </label>
                </div>
                { dropdown == 'componentOne' &&
                <div className="form-group-100-field-dropdown">
                  {data.components && data.components.map((item, idx) => 
                    <div key={idx}
                    className="form-group-100-field-dropdown-item" 
                    onClick={() => (setElementText('componentOne', item.name), createFaculty('componentOne', item._id), setDropdown(''))}
                    >
                      {item.name}
                    </div>
                  )
                  }
                </div>
                }
              </div>
              <div className="form-group-100 mb1">
                <div className="form-group-100-field">
                  <div 
                    id="componentTwo" 
                  />
                  <label 
                    className={(faculty.componentTwo.length > 0 ? ' labelHover' : '') + ` form-group-100-field-label-dropdown`}
                    onClick={() => dropdown == 'componentTwo' ? setDropdown('') : setDropdown('componentTwo')}
                  >
                    Component Two
                    <SVG svg={'dropdown'}></SVG>
                  </label>
                </div>
                { dropdown == 'componentTwo' &&
                <div className="form-group-100-field-dropdown">
                  {data.components && data.components.map((item, idx) => 
                    <div key={idx}
                    className="form-group-100-field-dropdown-item" 
                    onClick={() => (setElementText('componentTwo', item.name), createFaculty('componentTwo', item._id), setDropdown(''))}
                    >
                      {item.name}
                    </div>
                  )
                  }
                </div>
                }
              </div>
              <div className="form-group-100 mb1">
                <div className="form-group-100-field">
                  <div 
                    id="componentThree" 
                  />
                  <label 
                    className={(faculty.componentThree.length > 0 ? ' labelHover' : '') + ` form-group-100-field-label-dropdown`}
                    onClick={() => dropdown == 'componentThree' ? setDropdown('') : setDropdown('componentThree')}
                  >
                    Component Three
                    <SVG svg={'dropdown'}></SVG>
                  </label>
                </div>
                { dropdown == 'componentThree' &&
                <div className="form-group-100-field-dropdown">
                  {data.components && data.components.map((item, idx) => 
                    <div key={idx}
                    className="form-group-100-field-dropdown-item" 
                    onClick={() => (setElementText('componentThree', item.name), createFaculty('componentThree', item._id), setDropdown(''))}
                    >
                      {item.name}
                    </div>
                  )
                  }
                </div>
                }
              </div>
              <div className="form-group-100">
                <div className="form-group-100-field-textarea">
                  <label 
                  className={faculty.researchInterests.length > 0 ? ' labelHover' : ''}>
                    Research Interests
                  </label>
                  <textarea 
                    id="researchInterests" 
                    rows="12" 
                    wrap="hard" 
                    maxLength="1500"
                    name="researchInterests" 
                    value={faculty.researchInterests} 
                    onChange={(e) => createFaculty('researchInterests', e.target.value)} 
                    onFocus={(e) => e.target.placeholder = ''} 
                    onKeyDown={(e) => e.keyCode == 13 ? e.preventDefault() : null}
                  />
                </div>
              </div>
            </form>
          </div>
          {message.length > 0 ? <div className="form-group-message">{message}</div> : null}
              {functionType == 'update_faculty' &&
                <button 
                className="form-group-button-100" 
                onClick={(e) => updateComponent(e)}
                >
                  {!loading && <span>Update</span>} 
                  {loading == 'update_component' && 
                    <div className="loading"><span></span><span></span><span></span></div>
                  }
                </button>
              }
              {functionType == undefined &&
                <button 
                className="form-group-button-100" 
                onClick={(e) => submitFaculty(e)}>
                  {!loading && <span>Save</span>} 
                  {loading == 'create_faculty' && 
                  <div className="loading"><span></span><span></span><span></span></div>
                  }
                </button>
              }
        </div>
      </div>
    }

    
    {type == 'create_component' &&
      <div className="accountUpdateProfile-modal">
        <div className="accountUpdateProfile-modal-box">
          <div className="accountUpdateProfile-modal-box-svg" onClick={() => (resetUI(), setModal(''), setMessage(''))}><SVG svg={'close'}></SVG></div>
          <div className="accountUpdateProfile-modal-box-header">
            <div className="accountUpdateProfile-modal-box-header-title">{title}</div>
          </div>
          <div className="accountUpdateProfile-modal-box-content">
            <form action="" className="form-group">
              <div className="form-group-100">
                <div className="form-group-100-field">
                  <div 
                  id="name" 
                  contentEditable="true" 
                  onInput={(e) => (preventEvent('name'), setMessage(''), createComponent('name', e.target.innerText))}
                  />
                  <label 
                  className={component.name.length > 0 ? ' labelHover' : ''}>
                    Name
                  </label>
                </div>
              </div>
              <div className="form-group-100 mb2">
                <div className="form-group-100-field">
                  <div 
                    id="leader" 
                  />
                  <label 
                    className={(component.leader.length > 0 ? ' labelHover' : '') + ` form-group-100-field-label-dropdown`}
                    onClick={() => dropdown == 'leader' ? setDropdown('') : setDropdown('leader')}
                  >
                    Leader
                    <SVG svg={'dropdown'}></SVG>
                  </label>
                </div>
                { dropdown == 'leader' &&
                <div className="form-group-100-field-dropdown">
                  <div 
                  className="form-group-100-field-dropdown-item" 
                  onClick={() => (setElementText('leader', 'main admin'), createComponent('leader', 'admin'), setDropdown(''))}
                  >
                    Gustavo
                  </div>
                  <div 
                  className="form-group-100-field-dropdown-item"
                  onClick={() => (setElementText('leader', 'regular admin'), createComponent('leader', 'regular_admin'), setDropdown(''))}
                  >
                    Dr. Matthias Selke
                  </div>
                </div>
                }
              </div>
              <div className="form-group-100 mb1">
                <div className="form-group-100-field">
                  <div 
                    id="active" 
                  />
                  <label 
                    className={(component.active.length > 0 ? ' labelHover' : '') + ` form-group-100-field-label-dropdown`}
                    onClick={() => dropdown == 'active' ? setDropdown('') : setDropdown('active')}
                  >
                    Active
                    <SVG svg={'dropdown'}></SVG>
                  </label>
                </div>
                { dropdown == 'active' &&
                <div className="form-group-100-field-dropdown">
                  <div 
                  className="form-group-100-field-dropdown-item" 
                  onClick={() => (setElementText('active', 'activated'), createComponent('active', 'activated'), setDropdown(''))}
                  >
                    Activate
                  </div>
                  <div 
                  className="form-group-100-field-dropdown-item"
                  onClick={() => (setElementText('active', 'deactivated'), createComponent('active', 'deactivated'), setDropdown(''))}
                  >
                    Deactivated
                  </div>
                </div>
                }
              </div>
              <div className="form-group-100">
                <div className="form-group-100-field-textarea">
                  <label 
                  className={component.shortDescription.length > 0 ? ' labelHover' : ''}>
                    Short Description
                  </label>
                  <textarea 
                    id="shortDescription" 
                    rows="4" 
                    wrap="hard" 
                    maxLength="250"
                    name="shortDescription" 
                    value={component.shortDescription} 
                    onChange={(e) => createComponent('shortDescription', e.target.value)} 
                    onFocus={(e) => e.target.placeholder = ''} 
                    onKeyDown={(e) => e.keyCode == 13 ? e.preventDefault() : null}
                  />
                </div>
              </div>
              <div className="form-group-100">
                <div className="form-group-100-field-textarea">
                  <label 
                  className={component.longDescription.length > 0 ? ' labelHover' : ''}>
                    Long Description
                  </label>
                  <textarea 
                    id="longDescription" 
                    rows="12" 
                    wrap="hard" 
                    maxLength="1500"
                    name="longDescription" 
                    value={component.longDescription} 
                    onChange={(e) => createComponent('longDescription', e.target.value)} 
                    onFocus={(e) => e.target.placeholder = ''} 
                    onKeyDown={(e) => e.keyCode == 13 ? e.preventDefault() : null}
                  />
                </div>
              </div>
            </form>
          </div>
          {message.length > 0 ? <div className="form-group-message">{message}</div> : null}
          {functionType == 'update_component' &&
            <button 
            className="form-group-button-100" 
            onClick={(e) => updateComponent(e)}
            >
              {!loading && <span>Update</span>} 
              {loading == 'update_component' && 
                <div className="loading"><span></span><span></span><span></span></div>
              }
            </button>
          }
          {functionType == undefined &&
            <button 
            className="form-group-button-100" 
            onClick={(e) => submitComponent(e)}>
              {!loading && <span>Save</span>} 
              {loading == 'component' && 
              <div className="loading"><span></span><span></span><span></span></div>
              }
            </button>
          }
        </div>
      </div>
    }
    

    {type == 'create_admin' &&
      <div className="accountUpdateProfile-modal">
        <div className="accountUpdateProfile-modal-box">
          <div className="accountUpdateProfile-modal-box-header">
            <div className="accountUpdateProfile-modal-box-svg" onClick={() => (resetUI(), setModal(''), setMessage(''))}><SVG svg={'close'}></SVG></div>
            <div className="accountUpdateProfile-modal-box-header-title">{title}</div>
          </div>
          <div className="accountUpdateProfile-modal-box-content">
            <form action="" className="form-group">
              <div className="form-group-100">
                <div className="form-group-100-field">
                  <div 
                  id="username" 
                  contentEditable="true" 
                  onInput={(e) => (preventEvent('username'), setMessage(''), createAdmin('username', e.target.innerText))}
                  />
                  <label 
                  className={admin.username.length > 0 ? ' labelHover' : ''}>
                    Username
                  </label>
                </div>
              </div>
              <div className="form-group-100">
                <div className="form-group-100-field">
                  <div 
                    id="firstName" 
                    contentEditable="true"
                    onInput={(e) => 
                    (preventEvent('firstName'), setMessage(''), createAdmin('firstName', e.target.innerText))}
                  />
                  <label 
                    className={admin.firstName.length > 0 ? ' labelHover' : ''}
                  >
                    First Name
                  </label>
                </div>
              </div>
              <div className="form-group-100">
                <div className="form-group-100-field">
                  <div 
                    id="lastName" 
                    contentEditable="true"
                    onInput={(e) => 
                    (preventEvent('lastName'), setMessage(''), createAdmin('lastName', e.target.innerText))}
                  />
                  <label 
                    className={admin.lastName.length > 0 ? ' labelHover' : ''}
                  >
                    Last Name
                  </label>
                </div>
              </div>
              <div className="form-group-100">
                <div className="form-group-100-field">
                  <div 
                    id="email" 
                    contentEditable="true"
                    onInput={(e) => 
                    (preventEvent('email'), setMessage(''), createAdmin('email', e.target.innerText))}
                  />
                  <label 
                    className={admin.email.length > 0 ? ' labelHover' : ''}
                  >
                    Email
                  </label>
                </div>
              </div>
              <div className="form-group-100 mb2">
                <div className="form-group-100-field">
                  <div 
                    id="role" 
                  />
                  <label 
                    className={(admin.role.length > 0 ? ' labelHover' : '') + ` form-group-100-field-label-dropdown`}
                    onClick={() => dropdown == 'role' ? setDropdown('') : setDropdown('role')}
                  >
                    Role
                    <SVG svg={'dropdown'}></SVG>
                  </label>
                </div>
                { dropdown == 'role' &&
                <div className="form-group-100-field-dropdown">
                  <div 
                  className="form-group-100-field-dropdown-item" 
                  onClick={() => (setElementText('role', 'main admin'), createAdmin('role', 'admin'), setDropdown(''))}
                  >
                    Main admin
                  </div>
                  <div 
                  className="form-group-100-field-dropdown-item"
                  onClick={() => (setElementText('role', 'regular admin'), createAdmin('role', 'regular_admin'), setDropdown(''))}
                  >
                    Regular admin
                  </div>
                </div>
                }
                
              </div>
            </form>
          </div>
          {message.length > 0 ? <div className="form-group-message">{message}</div> : null}
          {functionType == 'update_admin' &&
            <button 
            className="form-group-button-100" 
            onClick={(e) => updateAdmin(e)}
            >
              {!loading && <span>Update</span>} 
              {loading == 'update_admin' && 
                <div className="loading"><span></span><span></span><span></span></div>
              }
            </button>
          }
          {functionType == undefined &&
            <button 
            className="form-group-button-100" 
            onClick={(e) => createNewAdmin(e)}>
              {!loading && <span>Save</span>} 
              {loading == 'admin' && 
              <div className="loading"><span></span><span></span><span></span></div>
              }
            </button>
          }
        </div>
      </div>
    }


    {type == 'update_admin' && 
      <div className="accountUpdateProfile-modal">
        <div className="accountUpdateProfile-modal-box">
          <div className="accountUpdateProfile-modal-box-header">
            <div className="accountUpdateProfile-modal-box-svg" onClick={() => (resetUI(), setModal(''), setMessage(''))}><SVG svg={'close'}></SVG></div>
            <div className="accountUpdateProfile-modal-box-header-title">{title}</div>
          </div>
          <div className="accountUpdateProfile-modal-box-content">
            <form action="" className="form-group">
            <div className="form-group-100">
              <div className="form-group-100-field">
                <div 
                id="username" 
                contentEditable="true" 
                onInput={(e) => (preventEvent('username'), setMessage(''), createAdmin('username', e.target.innerText))}
                />
                <label 
                className={admin.username.length > 0 ? ' labelHover' : ''}>
                  Username
                </label>
              </div>
            </div>
            <div className="form-group-100">
              <div className="form-group-100-field">
              <div 
                id="firstName" 
                contentEditable="true"
                onInput={(e) => (preventEvent('firstName'), setMessage(''), createAdmin('firstName', e.target.innerText))}
              />
              <label 
                className={admin.firstName.length > 0 ? ' labelHover' : ''}
              >
                First Name
              </label>
              </div>
            </div>
            <div className="form-group-100">
              <div className="form-group-100-field">
              <div 
                id="lastName" 
                contentEditable="true"
                onInput={(e) => 
                (preventEvent('lastName'), setMessage(''), createAdmin('lastName', e.target.innerText))}
              />
              <label 
                className={admin.lastName.length > 0 ? ' labelHover' : ''}
              >
                Last Name
              </label>
              </div>
            </div>
            </form>
          </div>
          {message.length > 0 ? <div className="form-group-message">{message}</div> : null}
          <button className="form-group-button-100" onClick={(e) => updateProfile(e)}>{!loading && <span>Save</span>} {loading == 'profile' && <div className="loading"><span></span><span></span><span></span></div>}</button>
        </div>
      </div>
    }


    {type == 'change_email' &&
      <div className="accountUpdateProfile-modal">
        <div className="accountUpdateProfile-modal-box">
          <div className="accountUpdateProfile-modal-box-header">
            <div className="accountUpdateProfile-modal-box-svg" onClick={() => (resetUI(), setModal(''), setMessage(''))}><SVG svg={'close'}></SVG></div>
            <div className="accountUpdateProfile-modal-form-title">Change Email</div>
          </div>
          <div className="accountUpdateProfile-modal-box-content">
            <form className="form-group">
              <div className="form-group-100">
                <div className="form-group-100">
                  <div className="form-group-100-field">
                    <div 
                    id="email" 
                    contentEditable="true" 
                    onInput={(e) => (preventEvent('email'), setMessage(''), createAdmin('email', e.target.innerText))}
                    />
                    <label 
                    className={admin.email.length > 0 ? ' labelHover' : ''}>
                      Email
                    </label>
                  </div>
                </div>
              </div>
            </form>
          </div>
          {message.length > 0 ? <div className="form-group-message">{message}</div> : null}
          <button className="form-group-button-100" onClick={(e) => changeEmail(e)}>{!loading && <span>Change Email</span>} {loading == 'email' && <div className="loading"><span></span><span></span><span></span></div>}</button>
        </div>
      </div>
    }


    </>
  )
}

const mapStateToProps = state => {
  return {
    admin: state.admin,
    component: state.component,
    faculty: state.faculty
  }
}

const mapDispatchToProps = dispatch => {
  return {
    createAdmin: (name, value) => dispatch({type: 'CREATE_ADMIN', name: name, value: value}),
    createComponent: (name, value) => dispatch({type: 'CREATE_COMPONENT', name: name, value: value}),
    createFaculty: (name, value) => dispatch({type: 'CREATE_FACULTY', name: name, value: value}),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Modal)
