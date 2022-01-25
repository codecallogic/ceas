import SVG from '../../../files/svg'

const UpdateAdmin = ({
    title,
    resetUI,
    modal,
    setModal,
    setMessage,
    message,
    loading,
    
    // REDUX
    stateData,
    stateMethod,
    caseType,
    resetMethod,
    resetType,

    // CRUD
    updateProfile
    
  }) => {

  return (
    <div className="modal">
      <div className="modal-box">
        <div className="modal-box-header">
          <div 
          className="modal-box-svg" 
          onClick={() => (resetUI(), setModal(''), setMessage(''), resetMethod(resetType))}
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
        </div>
        <div className="modal-box-footer">
          {message.length > 0 ? <div className="form-group-message">{message}</div> : null}
          <button 
          className="form-group-button" 
          onClick={(e) => updateProfile(e)}>
            {!loading && 
            <span>Save</span>
            } 
            {loading == modal && 
            <div className="loading"><span></span><span></span><span></span></div>
            }
          </button>
        </div>
      </div>
    </div>
  )
}

export default UpdateAdmin
