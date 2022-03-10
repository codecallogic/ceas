import SVG from '../../../files/svg'
import { useEffect, useRef, useState } from 'react'
import { manageFormFields } from '../../../helpers/forms'
import { PUBLIC_FILES } from '../../../config'
import { orderList } from '../../../utilities/dropdowns'
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
            { edit == 'update_equipment' && (typeof stateData.image !== 'object' && stateData.image !== null) ?
              <label htmlFor="image">
                {stateData.image ? <img src={`${PUBLIC_FILES}/equipment/${stateData.image}`}></img> : <SVG svg={'cloud-upload'}></SVG>} {stateData.image ? stateData.image : 'Upload Image'}
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
            onClick={() => setInputDropdown('equipment_lab')} 
            value={manageFormFields(stateData.lab, 'name')} 
            onChange={(e) => (setInputDropdown(''), stateMethod(caseType, 'lab', e.target.value))}/>
            <label 
            className={`input-label ` + (
              stateData.lab.length > 0 || 
              typeof stateData.lab == 'object' 
              ? ' labelHover' 
              : ''
            )}
            htmlFor="lab">
              Lab
            </label>
            <div 
            onClick={() => setInputDropdown('equipment_lab')}><SVG svg={'dropdown'}></SVG>
            </div>
            { input_dropdown == 'equipment_lab' &&
              <div 
              className="form-group-list" 
              ref={myRefs}>
                {allData && allData.labs.map( (item, idx) => (
                <div 
                key={idx} 
                className="form-group-list-item" 
                onClick={(e) => (stateMethod(caseType, 'lab', item), setInputDropdown(''))}>
                  {item.name}
                </div>
                ))}
              </div>
            }
          </div>
          <div className="form-group">
            <input
            value={stateData.order}
            onClick={() => setInputDropdown('equipment_order')} 
            onChange={(e) => (setInputDropdown('equipment_order'), stateMethod(caseType, 'order', e.target.value))}
            readOnly
            />
            <label 
            className={`input-label ` + (
              stateData.order.length > 0 
              ? ' labelHover' 
              : ''
            )}
            htmlFor="order">
              Order
            </label>
            <div 
            onClick={() => setInputDropdown('equipment_order')}><SVG svg={'dropdown'}></SVG>
            </div>
            { input_dropdown == 'equipment_order' &&
              <div 
              className="form-group-list" 
              ref={myRefs}>
                {orderList && orderList.map( (item, idx) => (
                <div 
                key={idx} 
                className="form-group-list-item" 
                onClick={(e) => (stateMethod(caseType, 'order', item.number), setInputDropdown(''))}>
                  {item.number} 
                </div>
                ))}
              </div>
            }
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
          <ReactQuill 
            placeholder="Write something..."
            className="form-group-quill"
            theme="snow"
            name="description"
            onChange={(e) => stateMethod(caseType, 'description', e)}
            value={stateData.description}
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
            onClick={(e) => submitCreate(e, stateData, setMessage, setLoading, 'create_equipment', 'equipment', 'equipment/create-equipment', accessToken, allData, setAllData, resetMethod, resetType, 'image')}>
              {!loading && 
              <span>Save</span>
              } 
              {loading == 'create_equipment' && 
              <div className="loading"><span></span><span></span><span></span></div>
              }
            </button>
          </>
          }
          {edit == 'update_equipment' && 
          <>
            {message.length > 0 ? <div className="form-group-message">{message}</div> : null}
            <button 
            className="form-group-button" 
            onClick={(e) => submitUpdate(e, stateData, setMessage, setLoading, 'update_equipment', 'equipment', 'equipment/update-equipment', accessToken, allData, setAllData, resetMethod, resetType, setModal, 'image')}>
              {!loading && 
              <span>Update</span>
              } 
              {loading == 'update_equipment' && 
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
