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
            { edit == 'update_news' && (typeof stateData.image !== 'object' && stateData.image !== null) ?
              <label htmlFor="image">
                {stateData.image ? <img src={`${PUBLIC_FILES}/news/${stateData.image}`}></img> : <SVG svg={'cloud-upload'}></SVG>} {stateData.image ? stateData.image : 'Upload Image'}
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
            onClick={() => setInputDropdown('news_component')} 
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
            onClick={() => setInputDropdown('news_component')}><SVG svg={'dropdown'}></SVG>
            </div>
            { input_dropdown == 'news_component' &&
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
          <ReactQuill 
            placeholder="Write something..."
            className="form-group-quill"
            theme="snow"
            name="news"
            onChange={(e) => stateMethod(caseType, 'news', e)}
            value={stateData.news}
            modules={modules}
            required
          />
        </div>
        <div className="modal-box-footer">
          {!edit && 
          <>
            {message.length > 0 ? <div className="form-group-message">{message}</div> : null}
            <button 
            className="form-group-button" 
            onClick={(e) => submitCreate(e, stateData, setMessage, setLoading, 'create_news', 'news', 'news/create-news', accessToken, allData, setAllData, resetMethod, resetType, 'image')}>
              {!loading && 
              <span>Save</span>
              } 
              {loading == 'create_news' && 
              <div className="loading"><span></span><span></span><span></span></div>
              }
            </button>
          </>
          }
          {edit == 'update_news' && 
          <>
            {message.length > 0 ? <div className="form-group-message">{message}</div> : null}
            <button 
            className="form-group-button" 
            onClick={(e) => submitUpdate(e, stateData, setMessage, setLoading, 'update_news', 'news', 'news/update-news', accessToken, allData, setAllData, resetMethod, resetType, setModal, 'image')}>
              {!loading && 
              <span>Update</span>
              } 
              {loading == 'update_news' && 
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
