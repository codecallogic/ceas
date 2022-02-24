import SVG from '../../../files/svg'
import { useEffect, useRef, useState } from 'react'
import { manageFormFields } from '../../../helpers/forms'

const NavItemForm = ({
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
            id="link" 
            value={stateData.link} 
            onChange={(e) => stateMethod(caseType, 'link', e.target.value)}/>
            <label 
            className={`input-label ` + (
              stateData.link.length > 0 || 
              typeof stateData.link == 'object' 
              ? ' labelHover' 
              : ''
            )}
            htmlFor="link">
              Link
            </label>
          </div>
        </div>
        <div className="modal-box-footer">
          {!edit && 
          <>
            {message.length > 0 ? <div className="form-group-message">{message}</div> : null}
            <button 
            className="form-group-button" 
            onClick={(e) => submitCreate(e, stateData, setMessage, setLoading, 'create_nav_item', 'navItems', 'navigation/create-nav-item', accessToken, allData, setAllData, resetMethod, resetType)}>
              {!loading && 
              <span>Save</span>
              } 
              {loading == 'create_nav_item' && 
              <div className="loading"><span></span><span></span><span></span></div>
              }
            </button>
          </>
          }
          {edit == 'update_nav_item' && 
          <>
            {message.length > 0 ? <div className="form-group-message">{message}</div> : null}
            <button 
            className="form-group-button" 
            onClick={(e) => submitUpdate(e, stateData, setMessage, setLoading, 'update_nav_item', 'navItems', 'navigation/update-nav-item', accessToken, allData, setAllData, resetMethod, resetType, setModal)}>
              {!loading && 
              <span>Update</span>
              } 
              {loading == 'update_nav_item' && 
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

export default NavItemForm
