import SVG from '../../../files/svg'
import { useEffect, useRef, useState } from 'react'
import { manageFormFields } from '../../../helpers/forms'
import {facultyTitles, centerAssociation} from '../../../utilities/dropdowns'
import {PUBLIC_FILES} from '../../../config'
import { isNumber, validateIsPhoneNumber } from '../../../helpers/validations'

const SlideForm = ({
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
            { edit == 'update_slide' && (typeof stateData.image !== 'object' && stateData.image !== null) ?
              <label htmlFor="image">
                {stateData.image ? <img src={`${PUBLIC_FILES}/slides/${stateData.image}`}></img> : <SVG svg={'cloud-upload'}></SVG>} {stateData.image ? stateData.image : 'Upload Image'}
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
            id="title" 
            value={stateData.title} 
            onChange={(e) => stateMethod(caseType, 'title', e.target.value)}/>
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
          </div>
          <div className="form-group">
            <input 
            id="caption" 
            value={stateData.caption} 
            onChange={(e) => stateMethod(caseType, 'caption', e.target.value)}/>
            <label 
            className={`input-label ` + (
              stateData.caption.length > 0 || 
              typeof stateData.caption == 'object' 
              ? ' labelHover' 
              : ''
            )}
            htmlFor="caption">
              Caption
            </label>
          </div>
          <div className="form-group">
            <input
            onClick={() => setInputDropdown('slide_component')} 
            value={manageFormFields(stateData.component, 'name')} 
            onChange={(e) => (setInputDropdown(''), stateMethod(caseType, 'component', e.target.value))}/>
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
            onClick={() => setInputDropdown('slide_component')}><SVG svg={'dropdown'}></SVG>
            </div>
            { input_dropdown == 'slide_component' &&
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
        </div>
        <div className="modal-box-footer">
          {!edit && 
          <>
            {message.length > 0 ? <div className="form-group-message">{message}</div> : null}
            <button 
            className="form-group-button" 
            onClick={(e) => submitCreate(e, stateData, setMessage, setLoading, 'create_slide', 'slides', 'slide/create-slide', accessToken, allData, setAllData, resetMethod, resetType, 'image')}>
              {!loading && 
              <span>Save</span>
              } 
              {loading == 'create_slide' && 
              <div className="loading"><span></span><span></span><span></span></div>
              }
            </button>
          </>
          }
          {edit == 'update_slide' && 
          <>
            {message.length > 0 ? <div className="form-group-message">{message}</div> : null}
            <button 
            className="form-group-button" 
            onClick={(e) => submitUpdate(e, stateData, setMessage, setLoading, 'update_slide', 'slides', 'slide/update-slide', accessToken, allData, setAllData, resetMethod, resetType, setModal, 'image')}>
              {!loading && 
              <span>Update</span>
              } 
              {loading == 'update_slide' && 
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

export default SlideForm
