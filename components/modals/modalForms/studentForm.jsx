import SVG from '../../../files/svg'
import {studentTitles, centerAssociation, statusStudent} from '../../../utilities/dropdowns'
import { handleDate } from '../../../helpers/validations'
import {PUBLIC_FILES} from '../../../config'

const studentForm = ({
    data,
    resetUI,
    setModal,
    setMessage,
    title,
    dropdown,
    setDropdown,
    setElementText,
    preventEvent,
    functionType,
    message,
    loading,

    //// VALIDATION
    isNumber,
    validateIsPhoneNumber,
    
    //// REDUX    
    resetStudent,
    student,
    createStudent,

    //// CRUD
    updateStudent,
    submitStudent
    
  }) => {

  return (
      <div className="accountUpdateProfile-modal">
        <div className="accountUpdateProfile-modal-box">
          <div className="accountUpdateProfile-modal-box-svg" onClick={() => (resetUI(), setModal(''), setMessage(''), resetStudent())}><SVG svg={'close'}></SVG></div>
          <div className="accountUpdateProfile-modal-box-header">
            <div className="accountUpdateProfile-modal-box-header-title">{title}</div>
          </div>
          <div className="accountUpdateProfile-modal-box-content">
            <form action="" className="form-group">
              <div className="form-group-100 mb1">
              <div className="form-group-100">
                <div className="form-group-100-field-input-file">
                  { functionType == 'update_student' && (typeof student.profileImage !== 'object' && student.profileImage !== null) ?
                    <label htmlFor="profileImage">
                      {student.profileImage ? <img src={`${PUBLIC_FILES}/student/${student.profileImage}`}></img> : <SVG svg={'cloud-upload'}></SVG>} {student.profileImage ? student.profileImage : 'Upload Image'}
                    </label>
                    :
                    <label htmlFor="profileImage">
                      {student.profileImage ? <img src={URL.createObjectURL(student.profileImage)}></img> : <SVG svg={'cloud-upload'}></SVG>} {student.profileImage ? student.profileImage.name : 'Upload Image'}
                    </label>
                  }
                  <input 
                  type="file"
                  id="profileImage" 
                  onChange={(e) => (
                    setMessage(''), 
                    typeof student.profileImage !== 'object' && student.profileImage !== null ? createStudent('previousProfileImage', student.profileImage) : null,
                    createStudent('profileImage', e.target.files[0])
                  )}
                  />
                </div>
              </div>
                <div className="form-group-100-field">
                  <div 
                    id="title" 
                  />
                  <label 
                    className={(student.title.length > 0 ? ' labelHover' : '') + ` form-group-100-field-label-dropdown`}
                    onClick={() => dropdown == 'title' ? setDropdown('') : setDropdown('title')}
                  >
                    Title
                    <SVG svg={'dropdown'}></SVG>
                  </label>
                </div>
                { dropdown == 'title' &&
                <div className="form-group-100-field-dropdown">
                  {studentTitles && studentTitles.map((item, idx) => 
                    <div key={idx}
                    className="form-group-100-field-dropdown-item" 
                    onClick={() => (setElementText('title', item.title), createStudent('title', item.title), setDropdown(''))}
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
                  onInput={(e) => (preventEvent('name'), setMessage(''), createStudent('name', e.target.innerText))}
                  />
                  <label 
                  className={student.name.length > 0 ? ' labelHover' : ''}>
                    Name
                  </label>
                </div>
              </div>
              <div className="form-group-100 mb1">
                <div className="form-group-100-field">
                  <div 
                    id="advisor" 
                  />
                  <label 
                    className={(student.advisor.length > 0 ? ' labelHover' : '') + ` form-group-100-field-label-dropdown`}
                    onClick={() => dropdown == 'advisor' ? setDropdown('') : setDropdown('advisor')}
                  >
                    Advisor
                    <SVG svg={'dropdown'}></SVG>
                  </label>
                </div>
                { dropdown == 'advisor' &&
                <div className="form-group-100-field-dropdown">
                  {data.faculty && data.faculty.map((item, idx) => 
                    <div key={idx}
                    className="form-group-100-field-dropdown-item" 
                    onClick={() => (setElementText('advisor', item.name), createStudent('advisor', item._id), setDropdown(''))}
                    >
                      {item.name}
                    </div>
                  )
                  }
                </div>
                }
              </div>
              <div className="form-group-100">
                <div className="form-group-100-field">
                  <div 
                  id="department" 
                  contentEditable="true" 
                  onInput={(e) => (preventEvent('department'), setMessage(''), createStudent('department', e.target.innerText))}
                  />
                  <label 
                  className={student.department.length > 0 ? ' labelHover' : ''}>
                    Department
                  </label>
                </div>
              </div>
              <div className="form-group-100">
                <div className="form-group-100-field">
                  <div 
                  id="email" 
                  contentEditable="true" 
                  onInput={(e) => (preventEvent('email'), setMessage(''), createStudent('email', e.target.innerText))}
                  />
                  <label 
                  className={student.email.length > 0 ? ' labelHover' : ''}>
                    Email
                  </label>
                </div>
              </div>
              <div className="form-group-100 mb1">
                <div className="form-group-100-field">
                  <div 
                    id="centerAssociation" 
                  />
                  <label 
                    className={(student.centerAssociation.length > 0 ? ' labelHover' : '') + ` form-group-100-field-label-dropdown`}
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
                    onClick={() => (setElementText('centerAssociation', item.association), createStudent('centerAssociation', item.association), setDropdown(''))}
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
                    id="component" 
                  />
                  <label 
                    className={(student.component.length > 0 ? ' labelHover' : '') + ` form-group-100-field-label-dropdown`}
                    onClick={() => dropdown == 'component' ? setDropdown('') : setDropdown('component')}
                  >
                    Component
                    <SVG svg={'dropdown'}></SVG>
                  </label>
                </div>
                { dropdown == 'component' &&
                <div className="form-group-100-field-dropdown">
                  {data.components && data.components.map((item, idx) => 
                    <div key={idx}
                    className="form-group-100-field-dropdown-item" 
                    onClick={() => (setElementText('component', item.name), createStudent('component', item._id), setDropdown(''))}
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
                    id="status" 
                  />
                  <label 
                    className={(student.status.length > 0 ? ' labelHover' : '') + ` form-group-100-field-label-dropdown`}
                    onClick={() => dropdown == 'status' ? setDropdown('') : setDropdown('status')}
                  >
                    Status
                    <SVG svg={'dropdown'}></SVG>
                  </label>
                </div>
                { dropdown == 'status' &&
                <div className="form-group-100-field-dropdown">
                  {statusStudent && statusStudent.map((item, idx) => 
                    <div key={idx}
                    className="form-group-100-field-dropdown-item" 
                    onClick={() => (setElementText('status', item.status), createStudent('status', item.status), setDropdown(''))}
                    >
                      {item.status}
                    </div>
                  )
                  }
                </div>
                }
              </div>
              <div className="form-group-100">
                <div className="form-group-100-field-input">
                  <input 
                  id="phone" 
                  value={student.phone}
                  onChange={(e) => (setMessage(''), e.target.value.length < 15 ? isNumber(e.target.value) ? (createStudent('phone', e.target.value), validateIsPhoneNumber('phone', 'phone', createStudent)): null : null)}
                  />
                  <label 
                  className={`input-label ` + (student.phone.length > 0 ? ' labelHover' : '')}>
                    Phone
                  </label>
                </div>
              </div>
              <div className="form-group-100">
                <div className="form-group-100-field">
                  <div 
                  id="location" 
                  contentEditable="true" 
                  onInput={(e) => (preventEvent('location'), setMessage(''), createStudent('location', e.target.innerText))}
                  />
                  <label 
                  className={student.location.length > 0 ? ' labelHover' : ''}>
                    Location
                  </label>
                </div>
              </div>
              <div className="form-group-100">
                <div className="form-group-100-field-input">
                  <input 
                  id="startDate"
                  name="startDate"
                  value={student.startDate}
                  onChange={(e) => (setMessage(''), e.target.value.length < 15 ? isNumber(e.target.value) ? (createStudent('startDate', e.target.value), handleDate(e, 'startDate', createStudent)): null : null)}
                  />
                  <label 
                  className={`input-label ` + (student.startDate.length > 0 ? ' labelHover' : '')}>
                    Start Date
                  </label>
                </div>
              </div>
              <div className="form-group-100">
                <div className="form-group-100-field-input">
                  <input 
                  id="endDate"
                  name="endDate"
                  value={student.endDate}
                  onChange={(e) => (setMessage(''), e.target.value.length < 15 ? isNumber(e.target.value) ? (createStudent('endDate', e.target.value), handleDate(e, 'endDate', createStudent)): null : null)}
                  />
                  <label 
                  className={`input-label ` + (student.endDate.length > 0 ? ' labelHover' : '')}>
                    End Date
                  </label>
                </div>
              </div>
              <div className="form-group-100">
                <div className="form-group-100-field">
                  <div 
                  id="postGraduation" 
                  contentEditable="true" 
                  onInput={(e) => (preventEvent('postGraduation'), setMessage(''), createStudent('postGraduation', e.target.innerText))}
                  />
                  <label 
                  className={student.postGraduation.length > 0 ? ' labelHover' : ''}>
                    Post Graduation
                  </label>
                </div>
              </div>
            </form>
          </div>
          {message.length > 0 ? <div className="form-group-message">{message}</div> : null}
          {functionType == 'update_student' &&
            <button 
            className="form-group-button-100" 
            onClick={(e) => updateStudent(e)}
            >
              {!loading && <span>Update</span>} 
              {loading == 'update_student' && 
                <div className="loading"><span></span><span></span><span></span></div>
              }
            </button>
          }
          {functionType == undefined &&
            <button 
            className="form-group-button-100" 
            onClick={(e) => submitStudent(e)}>
              {!loading && <span>Save</span>} 
              {loading == 'create_student' && 
              <div className="loading"><span></span><span></span><span></span></div>
              }
            </button>
          }
        </div>
      </div>
  )
}

export default studentForm
