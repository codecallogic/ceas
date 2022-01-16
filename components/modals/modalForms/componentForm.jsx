import SVG from '../../../files/svg'

const componentForm = ({
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

    //// REDUX    
    component,
    createComponent,
    resetComponent,

    //// CRUD
    updateComponent,
    submitComponent

  }) => {

  return (
    <div className="accountUpdateProfile-modal">
      <div className="accountUpdateProfile-modal-box">
        <div className="accountUpdateProfile-modal-box-svg" onClick={() => (resetUI(), setModal(''), setMessage(''), resetComponent())}><SVG svg={'close'}></SVG></div>
        <div className="accountUpdateProfile-modal-box-header">
          <div className="accountUpdateProfile-modal-box-header-title">{title}</div>
        </div>
        <div className="accountUpdateProfile-modal-box-content">
          <form action="" className="form-group">
            <div className="form-group-100">
              <div className="form-group-100-field">
                <div 
                id="name" 
                contentEditable="true" 
                onInput={(e) => (preventEvent('name'), setMessage(''), createComponent('name', e.target.innerText))}
                />
                <label 
                className={component.name.length > 0 ? ' labelHover' : ''}>
                  Name
                </label>
              </div>
            </div>
            <div className="form-group-100 mb2">
              <div className="form-group-100-field">
                <div 
                  id="leader" 
                />
                <label 
                  className={(component.leader.length > 0 ? ' labelHover' : '') + ` form-group-100-field-label-dropdown`}
                  onClick={() => dropdown == 'leader' ? setDropdown('') : setDropdown('leader')}
                >
                  Leader
                  <SVG svg={'dropdown'}></SVG>
                </label>
              </div>
              { dropdown == 'leader' &&
              <div className="form-group-100-field-dropdown">
                {data.faculty && data.faculty.map( (item, idx) => 
                  <div
                  key={idx} 
                  className="form-group-100-field-dropdown-item" 
                  onClick={() => (setElementText('leader', item.name), createComponent('leader', item._id), setDropdown(''))}
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
                  id="active" 
                />
                <label 
                  className={(component.active.length > 0 ? ' labelHover' : '') + ` form-group-100-field-label-dropdown`}
                  onClick={() => dropdown == 'active' ? setDropdown('') : setDropdown('active')}
                >
                  Active
                  <SVG svg={'dropdown'}></SVG>
                </label>
              </div>
              { dropdown == 'active' &&
              <div className="form-group-100-field-dropdown">
                <div 
                className="form-group-100-field-dropdown-item" 
                onClick={() => (setElementText('active', 'activated'), createComponent('active', 'activated'), setDropdown(''))}
                >
                  Activate
                </div>
                <div 
                className="form-group-100-field-dropdown-item"
                onClick={() => (setElementText('active', 'deactivated'), createComponent('active', 'deactivated'), setDropdown(''))}
                >
                  Deactivated
                </div>
              </div>
              }
            </div>
            <div className="form-group-100">
              <div className="form-group-100-field-textarea">
                <label 
                className={component.shortDescription.length > 0 ? ' labelHover' : ''}>
                  Short Description
                </label>
                <textarea 
                  id="shortDescription" 
                  rows="4" 
                  wrap="hard" 
                  maxLength="250"
                  name="shortDescription" 
                  value={component.shortDescription} 
                  onChange={(e) => createComponent('shortDescription', e.target.value)} 
                  onFocus={(e) => e.target.placeholder = ''} 
                  onKeyDown={(e) => e.keyCode == 13 ? e.preventDefault() : null}
                />
              </div>
            </div>
            <div className="form-group-100">
              <div className="form-group-100-field-textarea">
                <label 
                className={component.longDescription.length > 0 ? ' labelHover' : ''}>
                  Long Description
                </label>
                <textarea 
                  id="longDescription" 
                  rows="12" 
                  wrap="hard" 
                  maxLength="1500"
                  name="longDescription" 
                  value={component.longDescription} 
                  onChange={(e) => createComponent('longDescription', e.target.value)} 
                  onFocus={(e) => e.target.placeholder = ''} 
                  onKeyDown={(e) => e.keyCode == 13 ? e.preventDefault() : null}
                />
              </div>
            </div>
          </form>
        </div>
        {message.length > 0 ? <div className="form-group-message">{message}</div> : null}
        {functionType == 'update_component' &&
          <button 
          className="form-group-button-100" 
          onClick={(e) => updateComponent(e)}
          >
            {!loading && <span>Update</span>} 
            {loading == 'update_component' && 
              <div className="loading"><span></span><span></span><span></span></div>
            }
          </button>
        }
        {functionType == undefined &&
          <button 
          className="form-group-button-100" 
          onClick={(e) => submitComponent(e)}>
            {!loading && <span>Save</span>} 
            {loading == 'component' && 
            <div className="loading"><span></span><span></span><span></span></div>
            }
          </button>
        }
      </div>
    </div>
  )
}

export default componentForm
