import SVG from '../../../files/svg'
import { useEffect, useRef, useState } from 'react'
import { manageFormFields } from '../../../helpers/forms'
import { publicationType } from '../../../utilities/dropdowns'
import { PUBLIC_FILES } from '../../../config'
import { isNumber, validateIsPhoneNumber, validateDate } from '../../../helpers/validations'

const StaffForm = ({
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

  const addItem = 'CREATE_PUBLICATION_ARRAY_ITEM'
  const deleteItem = 'DELETE_PUBLICATION_ARRAY_ITEM'
  const myRefs = useRef(null)
  const [input_dropdown, setInputDropdown] = useState('')
  const [author, setAuthor] = useState('')
  const [venue, setVenue] = useState('')

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
            { edit == 'update_publication' && (typeof stateData.file !== 'object' && stateData.file !== null) ?
              <label htmlFor="file">
                {stateData.file ? <SVG svg={'file'}></SVG> : <SVG svg={'cloud-upload'}></SVG>} {stateData.file ? stateData.file : 'Upload File'}
              </label>
              :
              <label htmlFor="file">
                {stateData.file ? <SVG svg={'file'}></SVG> : <SVG svg={'cloud-upload'}></SVG>} {stateData.file ? stateData.file.name : 'Upload File'}
              </label>
            }
            <input 
              type="file"
              id="file" 
              onChange={(e) => (
                setMessage(''), 
                typeof stateData.file !== 'object' && stateData.file !== null ? stateMethod(caseType, 'previousFile', stateData.file) : null,
                stateMethod(caseType, 'file', e.target.files[0])
              )}
            />
          </div>
          <div className="form-group">
            <input 
            id="date" 
            value={stateData.date} 
            onChange={(e) => e.target.value.length < 15 ? isNumber(e.target.value) ? (stateMethod(caseType, 'date', e.target.value),  validateDate(e, caseType, 'date', stateMethod)) : null : null}/>
            <label 
            className={`input-label ` + (
              stateData.date.length > 0 || 
              typeof stateData.date == 'object' 
              ? ' labelHover' 
              : ''
            )}
            htmlFor="date">
              Date
            </label>
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
            id="authors" 
            value={author} 
            onChange={(e) => setAuthor(e.target.value)}
            onKeyPress={(e) => e.key == 'Enter' ? (stateMethod(addItem, 'authors', e.target.value), setAuthor('')) : null}
            />
            <label 
            className={`input-label ` + (
              author.length > 0 || 
              typeof author == 'object' 
              ? ' labelHover' 
              : ''
            )}
            htmlFor="authors">
              Authors (Press enter to add)
            </label>
          </div>
          {stateData.authors && stateData.authors.length > 0 &&
            <div className="form-group-tags">
              {stateData.authors && stateData.authors.map((item, idx) => 
                <div key={idx}>{item}<span onClick={(e) => stateMethod(deleteItem, 'authors', idx)}>X</span></div>
              )}
            </div>
          }
          <div className="form-group">
            <input 
            id="venues" 
            value={venue} 
            onChange={(e) => setVenue(e.target.value)}
            onKeyPress={(e) => e.key == 'Enter' ? (stateMethod(addItem, 'venues', e.target.value), setVenue('')) : null}
            />
            <label 
            className={`input-label ` + (
              venue.length > 0 || 
              typeof venue == 'object' 
              ? ' labelHover' 
              : ''
            )}
            htmlFor="venues">
              Venues (Press enter to add)
            </label>
          </div>
          {stateData.venues && stateData.venues.length > 0 &&
            <div className="form-group-tags">
              {stateData.venues && stateData.venues.map((item, idx) => 
                <div key={idx}>{item}<span onClick={(e) => stateMethod(deleteItem, 'venues', idx)}>X</span></div>
              )}
            </div>
          }

          <div className="form-group">
            <input
            onClick={() => setInputDropdown('publication_type')} 
            value={stateData.type} 
            onChange={(e) => (setInputDropdown(''), stateMethod(caseType, 'type', e.target.value))}/>
            <label 
            className={`input-label ` + (
              stateData.type.length > 0 || 
              typeof stateData.type == 'object' 
              ? ' labelHover' 
              : ''
            )}
            htmlFor="type">
              Type
            </label>
            <div 
            onClick={() => setInputDropdown('publication_type')}><SVG svg={'dropdown'}></SVG>
            </div>
            { input_dropdown == 'publication_type' &&
              <div 
              className="form-group-list" 
              ref={myRefs}>
                {publicationType && publicationType.map( (item, idx) => (
                <div 
                key={idx} 
                className="form-group-list-item" 
                onClick={(e) => (stateMethod(caseType, 'type', item.type), setInputDropdown(''))}>
                  {item.type}
                </div>
                ))}
              </div>
            }
          </div>
          <div className="form-group">
            <input
            onClick={() => setInputDropdown('publication_component')} 
            readOnly
            onChange={(e) => (setInputDropdown(''), stateMethod(caseType, 'components', e.target.value))}/>
            <label 
            className={`input-label ` + (
              stateData.components.length > 0 
              ? ' labelHover' 
              : ''
            )}
            htmlFor="component">
              Component
            </label>
            <div 
            onClick={() => setInputDropdown('publication_component')}><SVG svg={'dropdown'}></SVG>
            </div>
            { input_dropdown == 'publication_component' &&
              <div 
              className="form-group-list" 
              ref={myRefs}>
                {allData.components && allData.components.map( (item, idx) => (
                <div 
                key={idx} 
                className="form-group-list-item" 
                onClick={(e) => (stateMethod(addItem, 'components', item._id), setInputDropdown(''))}>
                  {item.name} <div className="form-group-list-item-svg">{
                  typeof stateData.components[idx] == 'object' ? 
                    stateData.components[idx] && stateData.components[idx]['_id'] == item._id ? <SVG svg={'checkmark'}></SVG> : ''
                    : stateData.components.includes(item._id) ? <SVG svg={'checkmark'}></SVG> : ''
                  }
                </div>
                </div>
                ))}
              </div>
            }
          </div>
          {stateData.components && stateData.components.length > 0 &&
            <div className="form-group-tags">
              {stateData.components && stateData.components.map((item, idx) => 
                <div key={idx}>
                  {allData.components[allData.components.findIndex((index) => { return index._id == (typeof item == 'object' ? item._id : item)})].name}
                  <span onClick={(e) => stateMethod(deleteItem, 'components', idx)}>X</span>
                </div>
              )}
            </div>
          }
          <div className="form-group">
            <input
            onClick={() => setInputDropdown('publication_faculty')} 
            readOnly
            onChange={(e) => (setInputDropdown(''), stateMethod(caseType, 'faculty', e.target.value))}/>
            <label 
            className={`input-label ` + (
              stateData.faculty.length > 0 
              ? ' labelHover' 
              : ''
            )}
            htmlFor="faculty">
              Faculty
            </label>
            <div 
            onClick={() => setInputDropdown('publication_faculty')}><SVG svg={'dropdown'}></SVG>
            </div>
            { input_dropdown == 'publication_faculty' &&
              <div 
              className="form-group-list" 
              ref={myRefs}>
                {allData.faculty && allData.faculty.map( (item, idx) => (
                <div 
                key={idx} 
                className="form-group-list-item" 
                onClick={(e) => (stateMethod(addItem, 'faculty', item._id), setInputDropdown(''))}>
                  {item.name} <div className="form-group-list-item-svg">{stateData.faculty.includes(item._id) ? <SVG svg={'checkmark'}></SVG> : ''}</div>
                </div>
                ))}
              </div>
            }
          </div>
          {stateData.faculty && stateData.faculty.length > 0 &&
            <div className="form-group-tags">
              {stateData.faculty && stateData.faculty.map((item, idx) => 
                <div key={idx}>
                  {allData.faculty[allData.faculty.findIndex((index) => { return index._id == (typeof item == 'object' ? item._id : item)})].name}
                  <span onClick={(e) => stateMethod(deleteItem, 'faculty', idx)}>X</span>
                </div>
              )}
            </div>
          }
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
            onClick={(e) => (e.stopPropagation(), submitCreate(e, stateData, setMessage, setLoading, 'create_publication', 'publications', 'publication/create-publication', accessToken, allData, setAllData, resetMethod, resetType, 'file'))}>
              {!loading && 
              <span>Save</span>
              } 
              {loading == 'create_publication' && 
              <div className="loading"><span></span><span></span><span></span></div>
              }
            </button>
          </>
          }
          {edit == 'update_publication' && 
          <>
            {message.length > 0 ? <div className="form-group-message">{message}</div> : null}
            <button 
            className="form-group-button" 
            onClick={(e) => submitUpdate(e, stateData, setMessage, setLoading, 'update_publication', 'publications', 'publication/update-publication', accessToken, allData, setAllData, resetMethod, resetType, setModal, 'file')}>
              {!loading && 
              <span>Update</span>
              } 
              {loading == 'update_publication' && 
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

export default StaffForm
