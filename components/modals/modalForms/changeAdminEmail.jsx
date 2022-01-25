import SVG from '../../../files/svg'

const ChangeAdminEmail = ({
    title,
    resetUI,
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
    changeEmail,
    
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
          {message.length > 0 ? <div className="form-group-message">{message}</div> : null}
          <button 
          className="form-group-button" 
          onClick={(e) => changeEmail(e)}>
            {!loading && 
            <span>Save</span>
            } 
            {loading == 'change_email' && 
            <div className="loading"><span></span><span></span><span></span></div>
            }
          </button>
        </div>
      </div>
    </div>
  )
}

export default ChangeAdminEmail
