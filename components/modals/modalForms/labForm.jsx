import SVG from '../../../files/svg'
import { useEffect, useRef, useState } from 'react'
import { manageFormFields } from '../../../helpers/forms'
import {PUBLIC_FILES} from '../../../config'
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

  const addItem = 'CREATE_LAB_ARRAY_ITEM'
  const deleteItem = 'DELETE_LAB_ARRAY_ITEM'
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
            { edit == 'update_lab' && (typeof stateData.icon !== 'object' && stateData.icon !== null) ?
              <label htmlFor="icon">
                {stateData.icon ? <img src={`${PUBLIC_FILES}/labs/${stateData.icon}`}></img> : <SVG svg={'cloud-upload'}></SVG>} {stateData.icon ? stateData.icon : 'Upload Icon'}
              </label>
              :
              <label htmlFor="icon">
                {stateData.icon ? <img src={URL.createObjectURL(stateData.icon)}></img> : <SVG svg={'cloud-upload'}></SVG>} {stateData.icon ? stateData.icon.name : 'Upload Icon'}
              </label>
            }
            <input 
              type="file"
              id="icon" 
              onChange={(e) => (
                setMessage(''), 
                typeof stateData.icon !== 'object' && stateData.icon !== null ? stateMethod(caseType, 'previousIcon', stateData.icon) : null,
                stateMethod(caseType, 'icon', e.target.files[0])
              )}
            />
          </div>
          <div className="form-group-file">
            { edit == 'update_lab' && (typeof stateData.image !== 'object' && stateData.image !== null) ?
              <label htmlFor="image">
                {stateData.image ? <img src={`${PUBLIC_FILES}/labs/${stateData.image}`}></img> : <SVG svg={'cloud-upload'}></SVG>} {stateData.image ? stateData.image : 'Upload Image'}
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
            onClick={() => setInputDropdown('lab_faculty')} 
            value={manageFormFields(stateData.faculty, 'name')} 
            onChange={(e) => (setInputDropdown(''), stateMethod(caseType, 'faculty', e.target.value))}/>
            <label 
            className={`input-label ` + (
              stateData.faculty.length > 0 || 
              typeof stateData.faculty == 'object' 
              ? ' labelHover' 
              : ''
            )}
            htmlFor="faculty">
              Faculty
            </label>
            <div 
            onClick={() => setInputDropdown('lab_faculty')}><SVG svg={'dropdown'}></SVG>
            </div>
            { input_dropdown == 'lab_faculty' &&
              <div 
              className="form-group-list" 
              ref={myRefs}>
                {allData && allData.faculty.map( (item, idx) => (
                <div 
                key={idx} 
                className="form-group-list-item" 
                onClick={(e) => (stateMethod(caseType, 'faculty', item), setInputDropdown(''))}>
                  {item.name}
                </div>
                ))}
              </div>
            }
          </div>
          <div className="form-group">
            <input
            onClick={() => setInputDropdown('lab_equipment')} 
            readOnly
            onChange={(e) => (setInputDropdown(''), stateMethod(caseType, 'equipment', e.target.value))}
            />
            <label 
            className={`input-label ` + (
              stateData.equipment.length > 0 
              ? ' labelHover' 
              : ''
            )}
            htmlFor="equipment">
              Equipment
            </label>
            <div 
            onClick={() => setInputDropdown('lab_equipment')}><SVG svg={'dropdown'}></SVG>
            </div>
            { input_dropdown == 'lab_equipment' &&
              <div 
              className="form-group-list" 
              ref={myRefs}>
                {allData.equipment && allData.equipment.map( (item, idx) => (
                <div 
                key={idx} 
                className="form-group-list-item" 
                onClick={(e) => (stateMethod(addItem, 'equipment', item._id), setInputDropdown(''))}>
                  {item.name} <div className="form-group-list-item-svg">{
                  typeof stateData.equipment[idx] == 'object' ? 
                    stateData.equipment[idx] && stateData.equipment[idx]['_id'] == item._id 
                    ? 
                    <SVG svg={'checkmark'}></SVG> 
                    : ''
                    : stateData.equipment.includes(item._id) ? <SVG svg={'checkmark'}></SVG> 
                    : ''
                  }
                </div>
                </div>
                ))}
              </div>
            }
          </div>
          {stateData.equipment && stateData.equipment.length > 0 &&
            <div className="form-group-tags">
              {stateData.equipment && stateData.equipment.map((item, idx) => 
                <div key={idx}>
                  {allData.equipment[allData.equipment.findIndex((index) => { return index._id == (typeof item == 'object' ? item._id : item)})].name}
                  <span onClick={(e) => stateMethod(deleteItem, 'equipment', idx)}>X</span>
                </div>
              )}
            </div>
          }
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
              Lab Name
            </label>
          </div>
          <div className="form-group">
            <input 
            id="labLocation" 
            value={stateData.labLocation} 
            onChange={(e) => stateMethod(caseType, 'labLocation', e.target.value)}/>
            <label 
            className={`input-label ` + (
              stateData.labLocation.length > 0 || 
              typeof stateData.labLocation == 'object' 
              ? ' labelHover' 
              : ''
            )}
            htmlFor="labLocation">
              Lab Location
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
            onClick={(e) => submitCreate(e, stateData, setMessage, setLoading, 'create_lab', 'labs', 'lab/create-lab', accessToken, allData, setAllData, resetMethod, resetType, 'image')}>
              {!loading && 
              <span>Save</span>
              } 
              {loading == 'create_lab' && 
              <div className="loading"><span></span><span></span><span></span></div>
              }
            </button>
          </>
          }
          {edit == 'update_lab' && 
          <>
            {message.length > 0 ? <div className="form-group-message">{message}</div> : null}
            <button 
            className="form-group-button" 
            onClick={(e) => submitUpdate(e, stateData, setMessage, setLoading, 'update_lab', 'labs', 'lab/update-lab', accessToken, allData, setAllData, resetMethod, resetType, setModal, 'image')}>
              {!loading && 
              <span>Update</span>
              } 
              {loading == 'update_lab' && 
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
