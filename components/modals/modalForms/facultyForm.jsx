import SVG from '../../../files/svg'
import {facultyTitles, centerAssociation} from '../../../utilities/dropdowns'
import {PUBLIC_FILES} from '../../../config'

const facultyForm = ({
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
    resetFaculty,
    faculty,
    createFaculty,

    //// CRUD
    updateFaculty,
    submitFaculty
    
  }) => {
  
  return (
      <div className="accountUpdateProfile-modal">
        <div className="accountUpdateProfile-modal-box">
          <div className="accountUpdateProfile-modal-box-svg" onClick={() => (resetUI(), setModal(''), setMessage(''), resetFaculty())}><SVG svg={'close'}></SVG></div>
          <div className="accountUpdateProfile-modal-box-header">
            <div className="accountUpdateProfile-modal-box-header-title">{title}</div>
          </div>
          <div className="accountUpdateProfile-modal-box-content">
            <form action="" className="form-group">
              <div className="form-group-100 mb1">
              <div className="form-group-100">
                <div className="form-group-100-field-input-file">
                  { functionType == 'update_faculty' && (typeof faculty.profileImage !== 'object' && faculty.profileImage !== null) ?
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
                  onChange={(e) => (
                    setMessage(''), 
                    typeof faculty.profileImage !== 'object' && faculty.profileImage !== null ? createFaculty('previousProfileImage', faculty.profileImage) : null,
                    createFaculty('profileImage', e.target.files[0])
                  )}
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
                onClick={(e) => updateFaculty(e)}
                >
                  {!loading && <span>Update</span>} 
                  {loading == 'update_faculty' && 
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
  )
}

export default facultyForm
