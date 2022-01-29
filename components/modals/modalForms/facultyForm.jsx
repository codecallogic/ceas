import SVG from '../../../files/svg'
import { useEffect, useRef, useState } from 'react'
import { manageFormFields } from '../../../helpers/forms'
import {facultyTitles, centerAssociation} from '../../../utilities/dropdowns'
import {PUBLIC_FILES} from '../../../config'
import { isNumber, validateIsPhoneNumber } from '../../../helpers/validations'

const FacultyForm = ({
    accessToken,
    title,
    resetUI,
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
            { edit == 'update_faculty' && (typeof stateData.image !== 'object' && stateData.image !== null) ?
              <label htmlFor="image">
                {stateData.image ? <img src={`${PUBLIC_FILES}/faculty/${stateData.image}`}></img> : <SVG svg={'cloud-upload'}></SVG>} {stateData.image ? stateData.image : 'Upload Image'}
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
            onClick={() => setInputDropdown('faculty_title')} 
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
            onClick={() => setInputDropdown('faculty_title')}><SVG svg={'dropdown'}></SVG>
            </div>
            { input_dropdown == 'faculty_title' &&
              <div 
              className="form-group-list" 
              ref={myRefs}>
                {facultyTitles && facultyTitles.map( (item, idx) => (
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
            id="profession" 
            value={stateData.profession} 
            onChange={(e) => stateMethod(caseType, 'profession', e.target.value)}/>
            <label 
            className={`input-label ` + (
              stateData.profession.length > 0 || 
              typeof stateData.profession == 'object' 
              ? ' labelHover' 
              : ''
            )}
            htmlFor="profession">
              Profession
            </label>
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
            id="website" 
            value={stateData.website} 
            onChange={(e) => stateMethod(caseType, 'website', e.target.value)}/>
            <label 
            className={`input-label ` + (
              stateData.website.length > 0 || 
              typeof stateData.website == 'object' 
              ? ' labelHover' 
              : ''
            )}
            htmlFor="website">
              Website
            </label>
          </div>
          <div className="form-group">
            <input 
            id="officePhone" 
            value={stateData.officePhone} 
            onChange={(e) =>  e.target.value.length < 15 ? isNumber(e.target.value) ? (stateMethod(caseType, 'officePhone', e.target.value), validateIsPhoneNumber('officePhone', caseType, 'officePhone', stateMethod)): null : null
            }/>
            <label 
            className={`input-label ` + (
              stateData.officePhone.length > 0 || 
              typeof stateData.officePhone == 'object' 
              ? ' labelHover' 
              : ''
            )}
            htmlFor="officePhone">
              Office Phone
            </label>
          </div>
          <div className="form-group">
            <input 
            id="officeLocation" 
            value={stateData.officeLocation} 
            onChange={(e) => stateMethod(caseType, 'officeLocation', e.target.value)}/>
            <label 
            className={`input-label ` + (
              stateData.officeLocation.length > 0 || 
              typeof stateData.officeLocation == 'object' 
              ? ' labelHover' 
              : ''
            )}
            htmlFor="officeLocation">
              Office Location
            </label>
          </div>
          <div className="form-group">
            <input
            onClick={() => setInputDropdown('faculty_association')} 
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
            onClick={() => setInputDropdown('faculty_association')}><SVG svg={'dropdown'}></SVG>
            </div>
            { input_dropdown == 'faculty_association' &&
              <div 
              className="form-group-list" 
              ref={myRefs}>
                {centerAssociation && centerAssociation.map( (item, idx) => (
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
            onClick={() => setInputDropdown('faculty_componentOne')} 
            value={manageFormFields(stateData.componentOne, 'name')} 
            onChange={(e) => (setInputDropdown(''), stateMethod(caseType, 'componentOne', e.target.value))}/>
            <label 
            className={`input-label ` + (
              stateData.componentOne.length > 0 || 
              typeof stateData.componentOne == 'object' 
              ? ' labelHover' 
              : ''
            )}
            htmlFor="componentOne">
              Component One
            </label>
            <div 
            onClick={() => setInputDropdown('faculty_componentOne')}><SVG svg={'dropdown'}></SVG>
            </div>
            { input_dropdown == 'faculty_componentOne' &&
              <div 
              className="form-group-list" 
              ref={myRefs}>
                {allData && allData.components.map( (item, idx) => (
                <div 
                key={idx} 
                className="form-group-list-item" 
                onClick={(e) => (stateMethod(caseType, 'componentOne', item), setInputDropdown(''))}>
                  {item.name}
                </div>
                ))}
              </div>
            }
          </div>
          <div className="form-group">
            <input
            onClick={() => setInputDropdown('faculty_componentTwo')} 
            value={manageFormFields(stateData.componentTwo, 'name')} 
            onChange={(e) => (setInputDropdown(''), stateMethod(caseType, 'componentTwo', e.target.value))}/>
            <label 
            className={`input-label ` + (
              stateData.componentTwo.length > 0 || 
              typeof stateData.componentTwo == 'object' 
              ? ' labelHover' 
              : ''
            )}
            htmlFor="componentTwo">
              Component Two
            </label>
            <div 
            onClick={() => setInputDropdown('faculty_componentTwo')}><SVG svg={'dropdown'}></SVG>
            </div>
            { input_dropdown == 'faculty_componentTwo' &&
              <div 
              className="form-group-list" 
              ref={myRefs}>
                {allData && allData.components.map( (item, idx) => (
                <div 
                key={idx} 
                className="form-group-list-item" 
                onClick={(e) => (stateMethod(caseType, 'componentTwo', item), setInputDropdown(''))}>
                  {item.name}
                </div>
                ))}
              </div>
            }
          </div>
          <div className="form-group">
            <input
            onClick={() => setInputDropdown('faculty_componentThree')} 
            value={manageFormFields(stateData.componentThree, 'name')} 
            onChange={(e) => (setInputDropdown(''), stateMethod(caseType, 'componentThree', e.target.value))}/>
            <label 
            className={`input-label ` + (
              stateData.componentThree.length > 0 || 
              typeof stateData.componentThree == 'object' 
              ? ' labelHover' 
              : ''
            )}
            htmlFor="componentThree">
              Component Three
            </label>
            <div 
            onClick={() => setInputDropdown('faculty_componentThree')}><SVG svg={'dropdown'}></SVG>
            </div>
            { input_dropdown == 'faculty_componentThree' &&
              <div 
              className="form-group-list" 
              ref={myRefs}>
                {allData && allData.components.map( (item, idx) => (
                <div 
                key={idx} 
                className="form-group-list-item" 
                onClick={(e) => (stateMethod(caseType, 'componentThree', item), setInputDropdown(''))}>
                  {item.name}
                </div>
                ))}
              </div>
            }
          </div>
          <div className="form-group-textarea">
            <label 
            className={stateData.researchInterests.length > 0 ? ' labelHover' : ''}>
              Research Interests
            </label>
            <textarea 
              id="researchInterests" 
              rows="5" 
              wrap="hard" 
              maxLength="1000"
              name="longDescription" 
              value={stateData.researchInterests} 
              onChange={(e) => stateMethod(caseType, 'researchInterests', e.target.value)} 
            />
          </div>
        </div>
        <div className="modal-box-footer">
          {!edit && 
          <>
            {message.length > 0 ? <div className="form-group-message">{message}</div> : null}
            <button 
            className="form-group-button" 
            onClick={(e) => submitCreate(e, stateData, setMessage, setLoading, 'create_faculty', 'faculty', 'faculty/create-faculty', accessToken, allData, setAllData, resetMethod, resetType, 'image')}>
              {!loading && 
              <span>Save</span>
              } 
              {loading == 'create_faculty' && 
              <div className="loading"><span></span><span></span><span></span></div>
              }
            </button>
          </>
          }
          {edit == 'update_faculty' && 
          <>
            {message.length > 0 ? <div className="form-group-message">{message}</div> : null}
            <button 
            className="form-group-button" 
            onClick={(e) => submitUpdate(e, stateData, setMessage, setLoading, 'update_faculty', 'faculty', 'faculty/update-faculty', accessToken, allData, setAllData, resetMethod, resetType, setModal, 'image')}>
              {!loading && 
              <span>Update</span>
              } 
              {loading == 'update_faculty' && 
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

export default FacultyForm
