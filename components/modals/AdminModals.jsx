import {connect} from 'react-redux'
import {useState, useEffect} from 'react'
import ComponentForm from '../modals/modalForms/componentForm'
import FacultyForm from '../modals/modalForms/facultyForm'
import StudentForm from '../modals/modalForms/studentForm'
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

  //// DATA
  data,

  //// REDUX
  createAdmin,
  admin,
  createComponent,
  component,
  resetComponent,
  createFaculty,
  faculty,
  resetFaculty,
  student,
  createStudent,
  resetStudent,

  //// CRUD FUNCTIONS
  createNewAdmin,
  updateProfile,
  changeEmail,
  updateAdmin,
  submitComponent,
  updateComponent,
  submitFaculty,
  updateFaculty,
  submitStudent,
  updateStudent
  
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

    if (match) {
      return  method(reducerKey, ('(' + match[1] + ') ' + (match[2] ? match[2] + "-" : "") + match[3]));
    }

    return null;
  }
  
  return (
    <>
     {type == 'create_student' &&
      <StudentForm
        data={data}
        resetUI={resetUI}
        setModal={setModal}
        setMessage={setMessage}
        resetStudent={resetStudent}
        title={title}
        student={student}
        createStudent={createStudent}
        dropdown={dropdown}
        setDropdown={setDropdown}
        setElementText={setElementText}
        preventEvent={preventEvent}
        isNumber={isNumber}
        validateIsPhoneNumber={validateIsPhoneNumber}
        updateStudent={updateStudent}
        submitStudent={submitStudent}
        functionType={functionType}
        message={message}
        loading={loading}
      >
      </StudentForm>
    }
    {type == 'create_faculty' &&
      <FacultyForm
        data={data}
        resetUI={resetUI}
        setModal={setModal}
        setMessage={setMessage}
        resetFaculty={resetFaculty}
        title={title}
        faculty={faculty}
        createFaculty={createFaculty}
        dropdown={dropdown}
        setDropdown={setDropdown}
        setElementText={setElementText}
        preventEvent={preventEvent}
        isNumber={isNumber}
        validateIsPhoneNumber={validateIsPhoneNumber}
        updateFaculty={updateFaculty}
        submitFaculty={submitFaculty}
        functionType={functionType}
        message={message}
        loading={loading}
      >
      </FacultyForm>
    }
    {type == 'create_component' &&
      <ComponentForm
        data={data}
        resetUI={resetUI}
        setModal={setModal}
        setMessage={setMessage}
        resetFaculty={resetFaculty}
        title={title}
        component={component}
        createComponent={createComponent}
        resetComponent={resetComponent}
        dropdown={dropdown}
        setDropdown={setDropdown}
        setElementText={setElementText}
        preventEvent={preventEvent}
        updateComponent={updateComponent}
        submitComponent={submitComponent}
        functionType={functionType}
        message={message}
        loading={loading}
      >
      </ComponentForm>
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
    faculty: state.faculty,
    student: state.student
  }
}

const mapDispatchToProps = dispatch => {
  return {
    createAdmin: (name, value) => dispatch({type: 'CREATE_ADMIN', name: name, value: value}),
    createComponent: (name, value) => dispatch({type: 'CREATE_COMPONENT', name: name, value: value}),
    createFaculty: (name, value) => dispatch({type: 'CREATE_FACULTY', name: name, value: value}),
    createStudent: (name, value) => dispatch({type: 'CREATE_STUDENT', name: name, value: value}),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Modal)
