import SVG from '../../../files/svg'
import { useEffect, useRef, useState } from 'react'
import { manageFormFields } from '../../../helpers/forms'
import {PUBLIC_FILES} from '../../../config'
import { isNumber, validateIsPhoneNumber, validateDate } from '../../../helpers/validations'
import dynamic from 'next/dynamic'
import 'react-quill/dist/quill.snow.css'
const ReactQuill = dynamic(() => import('react-quill'), {ssr: false, loading: () => <p>Loading ...</p>})


const modules = {
  toolbar: [
    [{ 'header': [1, 2, 3, 4, 5, false] }],
    ['bold', 'italic', 'underline','strike', 'blockquote'],
    [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
    ['link', 'image', 'video'],
    ['clean']
  ]
}

const NewsForm = ({
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
  const editorRef = useRef(null);
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
            { edit == 'update_form' && (typeof stateData.file !== 'object' && stateData.file !== null) ?
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
          <div className="form-group-textarea">
            <label 
            className={stateData.description.length > 0 ? ' labelHover' : ''}>
              Description
            </label>
            <textarea 
              id="description" 
              rows="5" 
              wrap="hard" 
              maxLength="1000"
              name="description" 
              value={stateData.description} 
              onChange={(e) => stateMethod(caseType, 'description', e.target.value)} 
            />
          </div>
        </div>
        <div className="modal-box-footer">
          {!edit && 
          <>
            {message.length > 0 ? <div className="form-group-message">{message}</div> : null}
            <button 
            className="form-group-button" 
            onClick={(e) => submitCreate(e, stateData, setMessage, setLoading, 'create_form', 'forms', 'form/create-form', accessToken, allData, setAllData, resetMethod, resetType, 'file')}>
              {!loading && 
              <span>Save</span>
              } 
              {loading == 'create_form' && 
              <div className="loading"><span></span><span></span><span></span></div>
              }
            </button>
          </>
          }
          {edit == 'update_form' && 
          <>
            {message.length > 0 ? <div className="form-group-message">{message}</div> : null}
            <button 
            className="form-group-button" 
            onClick={(e) => submitUpdate(e, stateData, setMessage, setLoading, 'update_form', 'forms', 'form/update-form', accessToken, allData, setAllData, resetMethod, resetType, setModal, 'file')}>
              {!loading && 
              <span>Update</span>
              } 
              {loading == 'update_form' && 
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

export default NewsForm
