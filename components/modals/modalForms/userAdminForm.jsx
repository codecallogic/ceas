import SVG from '../../../files/svg'
import { useEffect, useRef, useState } from 'react'

const AdminForm = ({
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
            id="username" 
            value={stateData.username} 
            onChange={(e) => stateMethod(caseType, 'username', e.target.value)}/>
            <label 
            className={`input-label ` + (
              stateData.username.length > 0 || 
              typeof stateData.username == 'object' 
              ? ' labelHover' 
              : ''
            )}
            htmlFor="username">
              Username
            </label>
          </div>
          <div className="form-group">
            <input 
            id="firstName" 
            value={stateData.firstName} 
            onChange={(e) => stateMethod(caseType, 'firstName', e.target.value)}/>
            <label 
            className={`input-label ` + (
              stateData.firstName.length > 0 || 
              typeof stateData.firstName == 'object' 
              ? ' labelHover' 
              : ''
            )}
            htmlFor="firstName">
              First Name
            </label>
          </div>
          <div className="form-group">
            <input 
            id="lastName" 
            value={stateData.lastName} 
            onChange={(e) => stateMethod(caseType, 'lastName', e.target.value)}/>
            <label 
            className={`input-label ` + (
              stateData.lastName.length > 0 || 
              typeof stateData.lastName == 'object' 
              ? ' labelHover' 
              : ''
            )}
            htmlFor="lastName">
              Last Name
            </label>
          </div>
          <div className="form-group">
            <input
            onClick={() => setInputDropdown('admin_role')} 
            value={stateData.role.replace('_', ' ')} 
            onChange={(e) => (setInputDropdown(''), stateMethod(caseType, 'role', e.target.value))}/>
            <label 
            className={`input-label ` + (
              stateData.role.length > 0 || 
              typeof stateData.role == 'object' 
              ? ' labelHover' 
              : ''
            )}
            htmlFor="role">
              Role
            </label>
            <div 
            onClick={() => setInputDropdown('admin_role')}><SVG svg={'dropdown'}></SVG>
            </div>
            { input_dropdown == 'admin_role' &&
              <div 
              className="form-group-list" 
              ref={myRefs}>
                <div 
                className="form-group-list-item" 
                onClick={(e) => (setInputDropdown(''), stateMethod(caseType, 'role', 'main_admin'))}>
                  Main Admin
                </div>
                <div 
                className="form-group-list-item" 
                onClick={(e) => (setInputDropdown(''), stateMethod(caseType, 'role', 'regular_admin'))}>
                  Regular Admin
                </div>
              </div>
            }
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
        </div>
        <div className="modal-box-footer">
          {!edit && 
          <>
            {message.length > 0 ? <div className="form-group-message">{message}</div> : null}
            <button 
            className="form-group-button" 
            onClick={(e) => submitCreate(e, stateData, setMessage, setLoading, 'create_admin', 'adminUsers', 'auth/invite-admin', accessToken, allData, setAllData, resetMethod, resetType)}>
              {!loading && 
              <span>Save</span>
              } 
              {loading == 'create_admin' && 
              <div className="loading"><span></span><span></span><span></span></div>
              }
            </button>
          </>
          }
          {edit == 'update_admin' && 
          <>
            {message.length > 0 ? <div className="form-group-message">{message}</div> : null}
            <button 
            className="form-group-button" 
            onClick={(e) => submitUpdate(e, stateData, setMessage, setLoading, 'update_admin', 'adminUsers', 'auth/update-admin-profile', accessToken, allData, setAllData, resetMethod, resetType, setModal)}>
              {!loading && 
              <span>Update</span>
              } 
              {loading == 'update_admin' && 
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

export default AdminForm
