import SVG from '../../../files/svg'
import { useEffect, useRef, useState } from 'react'
import { manageFormFields } from '../../../helpers/forms'
import {facultyTitles, centerAssociation} from '../../../utilities/dropdowns'
import {PUBLIC_FILES} from '../../../config'
import { isNumber, validateIsPhoneNumber } from '../../../helpers/validations'

const ComponentForm = ({
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
          {/* <div className="form-group">
            <input
            onClick={() => setInputDropdown('component_leader')} 
            value={manageFormFields(stateData.leader, 'name')} 
            onChange={(e) => (setInputDropdown(''), stateMethod(caseType, 'leader', e.target.value))}/>
            <label 
            className={`input-label ` + (
              stateData.leader.length > 0 || 
              typeof stateData.leader == 'object' 
              ? ' labelHover' 
              : ''
            )}
            htmlFor="leader">
              Leader
            </label>
            <div 
            onClick={() => setInputDropdown('component_leader')}><SVG svg={'dropdown'}></SVG>
            </div>
            { input_dropdown == 'component_leader' &&
              <div 
              className="form-group-list" 
              ref={myRefs}>
                {allData && allData.faculty.sort( (a, b) => a.name > b.name ? 1 : -1).map( (item, idx) => (
                <div 
                key={idx} 
                className="form-group-list-item" 
                onClick={(e) => (stateMethod(caseType, 'leader', item), setInputDropdown(''))}>
                  {item.name}
                </div>
                ))}
              </div>
            }
          </div>
          <div className="form-group">
            <input
            onClick={() => setInputDropdown('component_active_state')} 
            value={stateData.active} 
            onChange={(e) => (setInputDropdown(''), stateMethod(caseType, 'active', e.target.value))}/>
            <label 
            className={`input-label ` + (
              stateData.active.length > 0 || 
              typeof stateData.active == 'object' 
              ? ' labelHover' 
              : ''
            )}
            htmlFor="active">
              Active State
            </label>
            <div 
            onClick={() => setInputDropdown('component_active_state')}><SVG svg={'dropdown'}></SVG>
            </div>
            { input_dropdown == 'component_active_state' &&
              <div 
              className="form-group-list" 
              ref={myRefs}>
                <div 
                className="form-group-list-item" 
                onClick={(e) => (setInputDropdown(''), stateMethod(caseType, 'active', e.target.innerText))}>
                  Activated
                </div>
                <div 
                className="form-group-list-item" 
                onClick={(e) => (setInputDropdown(''), stateMethod(caseType, 'active', e.target.innerText))}>
                  Deactivated
                </div>
              </div>
            }
          </div>
          <div className="form-group-textarea">
            <label 
            className={stateData.shortDescription.length > 0 ? ' labelHover' : ''}>
              Short Description
            </label>
            <textarea 
              id="shortDescription" 
              rows="5" 
              wrap="hard" 
              maxLength="400"
              name="shortDescription" 
              value={stateData.shortDescription} 
              onChange={(e) => stateMethod(caseType, 'shortDescription', e.target.value)} 
            />
          </div>
          <div className="form-group-textarea">
            <label 
            className={stateData.longDescription.length > 0 ? ' labelHover' : ''}>
              Long Description
            </label>
            <textarea 
              id="longDescription" 
              rows="5" 
              wrap="hard" 
              maxLength="400"
              name="longDescription" 
              value={stateData.longDescription} 
              onChange={(e) => stateMethod(caseType, 'longDescription', e.target.value)} 
            />
          </div> */}
        </div>
        <div className="modal-box-footer">
          {!edit && 
          <>
            {message.length > 0 ? <div className="form-group-message">{message}</div> : null}
            <button 
            className="form-group-button" 
            onClick={(e) => submitCreate(e, stateData, setMessage, setLoading, modal, 'components', 'component/create-component', accessToken, allData, setAllData, resetMethod, resetType)}>
              {!loading && 
              <span>Save</span>
              } 
              {loading == modal && 
              <div className="loading"><span></span><span></span><span></span></div>
              }
            </button>
          </>
          }
          {edit == 'update_component' && 
          <>
            {message.length > 0 ? <div className="form-group-message">{message}</div> : null}
            <button 
            className="form-group-button" 
            onClick={(e) => submitUpdate(e, stateData, setMessage, setLoading, modal, 'components', 'component/update-component', accessToken, allData, setAllData, resetMethod, resetType, setModal)}>
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

export default ComponentForm
