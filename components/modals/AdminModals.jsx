import {connect} from 'react-redux'
import {useState, useEffect} from 'react'
import SVG from '../../files/svg'

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

  //// REDUCERS
  createAdmin,
  admin,
  createComponent,
  component,
  

  //// CRUD FUNCTIONS
  createNewAdmin,
  updateProfile,
  changeEmail,
  updateAdmin,
  submitComponent,
  updateComponent
}) => {
  const [dropdown, setDropdown] = useState('')
  
  return (
    <>
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
            </form>
          </div>
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
            </form>
          </div>
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
            {message.length > 0 ? <div className="form-group-message">{message}</div> : null}
            <button className="form-group-button-100" onClick={(e) => updateProfile(e)}>{!loading && <span>Save</span>} {loading == 'profile' && <div className="loading"><span></span><span></span><span></span></div>}</button>
            </form>
          </div>
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
              {message.length > 0 ? <div className="form-group-message">{message}</div> : null}
              <button className="form-group-button-100" onClick={(e) => changeEmail(e)}>{!loading && <span>Change Email</span>} {loading == 'email' && <div className="loading"><span></span><span></span><span></span></div>}</button>
            </form>
          </div>
        </div>
      </div>
    }


    </>
  )
}

const mapStateToProps = state => {
  return {
    admin: state.admin,
    component: state.component
  }
}

const mapDispatchToProps = dispatch => {
  return {
    createAdmin: (name, value) => dispatch({type: 'CREATE_ADMIN', name: name, value: value}),
    resetAdministrator: () => dispatch({type: 'RESET_ADMIN'}),
    createComponent: (name, value) => dispatch({type: 'CREATE_COMPONENT', name: name, value: value}),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Modal)
