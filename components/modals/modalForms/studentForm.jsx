import SVG from '../../../files/svg'
import { useEffect, useRef, useState } from 'react'
import { manageFormFields } from '../../../helpers/forms'
import {studentTitles, centerAssociationStudent, statusStudent} from '../../../utilities/dropdowns'
import {PUBLIC_FILES} from '../../../config'
import { isNumber, validateIsPhoneNumber, validateDate } from '../../../helpers/validations'

const StudentForm = ({
    accessToken,
    title,
    resetUI,
    modal,
    setModal,
    setMessage,
    message,
    loading,
    setLoading,
    edit,
    setEdit, 

    // DATA
    allData,
    setAllData,
    
    // REDUX
    stateData,
    stateMethod,
    caseType,
    resetMethod,
    resetType,

    // CRUD
    submitCreate,
    submitUpdate
    
  }) => {

  const myRefs = useRef(null)
  const [input_dropdown, setInputDropdown] = useState('')

  const handleClickOutside = (event) => {
    if(myRefs.current){
      if(!myRefs.current.contains(event.target)){
        setInputDropdown('')
      }
    }
  }

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, [])
    
  return (
    <div className="modal">
      <div className="modal-box">
        <div className="modal-box-header">
          <div 
          className="modal-box-svg" 
          onClick={() => (resetUI(), setModal(''), setMessage(''), setEdit(''), resetMethod(resetType))}
          >
            <SVG svg={'close'}></SVG>
          </div>
          <div className="modal-box-header-title">{title}</div>
        </div>
        <div className="modal-box-content">
          <div className="form-group-file">
            { edit == 'update_student' && (typeof stateData.image !== 'object' && stateData.image !== null) ?
              <label htmlFor="image">
                {stateData.image ? <img src={`${PUBLIC_FILES}/student/${stateData.image}`}></img> : <SVG svg={'cloud-upload'}></SVG>} {stateData.image ? stateData.image : 'Upload Image'}
              </label>
              :
              <label htmlFor="image">
                {stateData.image ? <img src={URL.createObjectURL(stateData.image)}></img> : <SVG svg={'cloud-upload'}></SVG>} {stateData.image ? stateData.image.name : 'Upload Image'}
              </label>
            }
            <input 
              type="file"
              id="image" 
              onChange={(e) => (
                setMessage(''), 
                typeof stateData.image !== 'object' && stateData.image !== null ? stateMethod(caseType, 'previousImage', stateData.image) : null,
                stateMethod(caseType, 'image', e.target.files[0])
              )}
            />
          </div>
          <div className="form-group">
            <input
            onClick={() => setInputDropdown('student_title')} 
            value={stateData.title} 
            onChange={(e) => (setInputDropdown(''), stateMethod(caseType, 'title', e.target.value))}/>
            <label 
            className={`input-label ` + (
              stateData.title.length > 0 || 
              typeof stateData.title == 'object' 
              ? ' labelHover' 
              : ''
            )}
            htmlFor="title">
              Title
            </label>
            <div 
            onClick={() => setInputDropdown('student_title')}><SVG svg={'dropdown'}></SVG>
            </div>
            { input_dropdown == 'student_title' &&
              <div 
              className="form-group-list" 
              ref={myRefs}>
                {studentTitles && studentTitles.map( (item, idx) => (
                <div 
                key={idx} 
                className="form-group-list-item" 
                onClick={(e) => (stateMethod(caseType, 'title', item.title), setInputDropdown(''))}>
                  {item.title}
                </div>
                ))}
              </div>
            }
          </div>
          <div className="form-group">
            <input 
            id="name" 
            value={stateData.name} 
            onChange={(e) => stateMethod(caseType, 'name', e.target.value)}/>
            <label 
            className={`input-label ` + (
              stateData.name.length > 0 || 
              typeof stateData.name == 'object' 
              ? ' labelHover' 
              : ''
            )}
            htmlFor="name">
              Name
            </label>
          </div>
          <div className="form-group">
            <input
            onClick={() => setInputDropdown('student_advisor')} 
            value={manageFormFields(stateData.advisor, 'name')} 
            onChange={(e) => (setInputDropdown(''), stateMethod(caseType, 'advisor', e.target.value))}/>
            <label 
            className={`input-label ` + (
              stateData.advisor.length > 0 || 
              typeof stateData.advisor == 'object' 
              ? ' labelHover' 
              : ''
            )}
            htmlFor="advisor">
              Advisor
            </label>
            <div 
            onClick={() => setInputDropdown('student_advisor')}><SVG svg={'dropdown'}></SVG>
            </div>
            { input_dropdown == 'student_advisor' &&
              <div 
              className="form-group-list" 
              ref={myRefs}>
                {allData && allData.faculty.map( (item, idx) => (
                <div 
                key={idx} 
                className="form-group-list-item" 
                onClick={(e) => (stateMethod(caseType, 'advisor', item), setInputDropdown(''))}>
                  {item.name}
                </div>
                ))}
              </div>
            }
          </div>
          <div className="form-group">
            <input 
            id="department" 
            value={stateData.department} 
            onChange={(e) => stateMethod(caseType, 'department', e.target.value)}/>
            <label 
            className={`input-label ` + (
              stateData.department.length > 0 || 
              typeof stateData.department == 'object' 
              ? ' labelHover' 
              : ''
            )}
            htmlFor="department">
              Department
            </label>
          </div>
          <div className="form-group">
            <input 
            id="email" 
            value={stateData.email} 
            onChange={(e) => stateMethod(caseType, 'email', e.target.value)}/>
            <label 
            className={`input-label ` + (
              stateData.email.length > 0 || 
              typeof stateData.email == 'object' 
              ? ' labelHover' 
              : ''
            )}
            htmlFor="email">
              Email
            </label>
          </div>
          <div className="form-group">
            <input
            onClick={() => setInputDropdown('student_association')} 
            value={stateData.centerAssociation} 
            onChange={(e) => (setInputDropdown(''), stateMethod(caseType, 'centerAssociation', e.target.value))}/>
            <label 
            className={`input-label ` + (
              stateData.centerAssociation.length > 0 || 
              typeof stateData.centerAssociation == 'object' 
              ? ' labelHover' 
              : ''
            )}
            htmlFor="centerAssociation">
              Center Association
            </label>
            <div 
            onClick={() => setInputDropdown('student_association')}><SVG svg={'dropdown'}></SVG>
            </div>
            { input_dropdown == 'student_association' &&
              <div 
              className="form-group-list" 
              ref={myRefs}>
                {centerAssociationStudent && centerAssociationStudent.map( (item, idx) => (
                <div 
                key={idx} 
                className="form-group-list-item" 
                onClick={(e) => (stateMethod(caseType, 'centerAssociation', item.association), setInputDropdown(''))}>
                  {item.association}
                </div>
                ))}
              </div>
            }
          </div>
          <div className="form-group">
            <input
            onClick={() => setInputDropdown('student_component')} 
            value={manageFormFields(stateData.component, 'name')} 
            onChange={(e) => (setInputDropdown(''), stateMethod(caseType, 'component', e.target.value))}
            readOnly
            />
            <label 
            className={`input-label ` + (
              stateData.component.length > 0 || 
              typeof stateData.component == 'object' 
              ? ' labelHover' 
              : ''
            )}
            htmlFor="component">
              Component
            </label>
            <div 
            onClick={() => setInputDropdown('student_component')}><SVG svg={'dropdown'}></SVG>
            </div>
            { input_dropdown == 'student_component' &&
              <div 
              className="form-group-list" 
              ref={myRefs}>
                {allData && allData.components.map( (item, idx) => (
                <div 
                key={idx} 
                className="form-group-list-item" 
                onClick={(e) => (stateMethod(caseType, 'component', item), setInputDropdown(''))}>
                  {item.name}
                </div>
                ))}
              </div>
            }
          </div>
          <div className="form-group">
            <input
            onClick={() => setInputDropdown('student_status')} 
            value={stateData.status} 
            onChange={(e) => (setInputDropdown(''), stateMethod(caseType, 'status', e.target.value))}/>
            <label 
            className={`input-label ` + (
              stateData.status.length > 0 || 
              typeof stateData.status == 'object' 
              ? ' labelHover' 
              : ''
            )}
            htmlFor="status">
              Status
            </label>
            <div 
            onClick={() => setInputDropdown('student_status')}><SVG svg={'dropdown'}></SVG>
            </div>
            { input_dropdown == 'student_status' &&
              <div 
              className="form-group-list" 
              ref={myRefs}>
                {statusStudent && statusStudent.map( (item, idx) => (
                <div 
                key={idx} 
                className="form-group-list-item" 
                onClick={(e) => (stateMethod(caseType, 'status', item.status), setInputDropdown(''))}>
                  {item.status}
                </div>
                ))}
              </div>
            }
          </div>
          <div className="form-group">
            <input 
            id="phone" 
            value={stateData.phone} 
            onChange={(e) =>  e.target.value.length < 15 ? isNumber(e.target.value) ? (stateMethod(caseType, 'phone', e.target.value), validateIsPhoneNumber('phone', caseType, 'phone', stateMethod)): null : null
            }/>
            <label 
            className={`input-label ` + (
              stateData.phone.length > 0 || 
              typeof stateData.phone == 'object' 
              ? ' labelHover' 
              : ''
            )}
            htmlFor="phone">
              Phone
            </label>
          </div>
          <div className="form-group">
            <input 
            id="location" 
            value={stateData.location} 
            onChange={(e) => stateMethod(caseType, 'location', e.target.value)}/>
            <label 
            className={`input-label ` + (
              stateData.location.length > 0 || 
              typeof stateData.location == 'object' 
              ? ' labelHover' 
              : ''
            )}
            htmlFor="location">
              Location
            </label>
          </div>
          <div className="form-group">
            <input 
            id="startDate" 
            value={stateData.startDate} 
            onChange={(e) => e.target.value.length < 15 ? isNumber(e.target.value) ? (stateMethod(caseType, 'startDate', e.target.value),  validateDate(e, caseType, 'startDate', stateMethod)) : null : null}/>
            <label 
            className={`input-label ` + (
              stateData.startDate.length > 0 || 
              typeof stateData.startDate == 'object' 
              ? ' labelHover' 
              : ''
            )}
            htmlFor="startDate">
              Start Date
            </label>
          </div>
          <div className="form-group">
            <input 
            id="endDate" 
            value={stateData.endDate} 
            onChange={(e) => e.target.value.length < 15 ? isNumber(e.target.value) ? (stateMethod(caseType, 'endDate', e.target.value),  validateDate(e, caseType, 'endDate', stateMethod)) : null : null}/>
            <label 
            className={`input-label ` + (
              stateData.endDate.length > 0 || 
              typeof stateData.endDate == 'object' 
              ? ' labelHover' 
              : ''
            )}
            htmlFor="endDate">
              End Date
            </label>
          </div>
          <div className="form-group">
            <input 
            id="postGraduation" 
            value={stateData.postGraduation} 
            onChange={(e) => stateMethod(caseType, 'postGraduation', e.target.value)}/>
            <label 
            className={`input-label ` + (
              stateData.postGraduation.length > 0 || 
              typeof stateData.postGraduation == 'object' 
              ? ' labelHover' 
              : ''
            )}
            htmlFor="postGraduation">
              Post Graduation
            </label>
          </div>
        </div>
        <div className="modal-box-footer">
          {!edit && 
          <>
            {message.length > 0 ? <div className="form-group-message">{message}</div> : null}
            <button 
            className="form-group-button" 
            onClick={(e) => submitCreate(e, stateData, setMessage, setLoading, modal, 'students', 'student/create-student', accessToken, allData, setAllData, resetMethod, resetType, 'image')}>
              {!loading && 
              <span>Save</span>
              } 
              {loading == modal && 
              <div className="loading"><span></span><span></span><span></span></div>
              }
            </button>
          </>
          }
          {edit == 'update_student' && 
          <>
            {message.length > 0 ? <div className="form-group-message">{message}</div> : null}
            <button 
            className="form-group-button" 
            onClick={(e) => submitUpdate(e, stateData, setMessage, setLoading, modal, 'students', 'student/update-student', accessToken, allData, setAllData, resetMethod, resetType, setModal, 'image')}>
              {!loading && 
              <span>Update</span>
              } 
              {loading == modal && 
              <div className="loading"><span></span><span></span><span></span></div>
              }
            </button>
          </>
          }
        </div>
      </div>
    </div>
  )
}

export default StudentForm
