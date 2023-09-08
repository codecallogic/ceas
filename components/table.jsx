import {filterTable} from '../helpers/tables'
import SVG from '../files/svg'
import {useEffect, useState, useRef} from 'react'
import { PUBLIC_FILES} from '../config'

const Table = ({
  accessToken,
  title,
  typeOfData,
  modalType,
  loading,
  setLoading,
  selectID,
  setSelectID,
  controls,
  setControls,
  setModalData,
  setModal,
  sortOrder,
  resetCheckboxes,
  setEdit,
  editType,
  submitDeleteRow,
  setAllData,
  message,
  setMessage,
  view,

  // DATA
  modalDataType,
  componentData,
  originalData,
  account,
  fileType,
  fileType2,
  fileLocation,

  // PATH
  deletePath
}) => {

  const myRefs = useRef([])
  const [loadingColor, setLoadingColor] = useState('black')
  
  const handleClickOutside = (event) => {
    if(myRefs.current){
      myRefs.current.forEach((item) => {
        if(item){
          
          if(event.target.id == 'checkbox') return
          if(item.contains(event.target)) return
          if(event.target == document.getElementById('delete')) return
          if(event.target == document.getElementById('edit')) return
          
          resetCheckboxes()
          setControls(false)
          setSelectID('')
        }
      })
    }
  }

  useEffect(() => {  
    document.addEventListener("click", handleClickOutside, true);

    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };

  }, [selectID])

  const handleSelect = (e, id) => {
    const els = document.querySelectorAll('.table-rows-checkbox-input')
    els.forEach( (el) => { el.checked = false })

    e.target.checked = true
   
    setControls(true)
    setSelectID(id)
  }
  
  return (
    <div className="table">
      <div className="table-header">
        <h1 className="table-header-title">{title}</h1>
        {controls &&
          <div className="table-header-controls">
            <div 
            id="edit" 
            className="table-header-controls-item" 
            onClick={() => (setModal(modalType), setEdit(editType), setModalData(modalDataType.key, modalDataType.caseType), setControls(false), resetCheckboxes())}
            >
              Edit
            </div>
            {account.role == 'main_admin' && 
            <div 
            id="delete" 
            className="table-header-controls-item" 
            onClick={ (e) => submitDeleteRow(e, setLoading, 'delete_row', deletePath, selectID, accessToken, originalData, typeOfData, setAllData, setMessage, resetCheckboxes, setControls, view)}
            >
              { loading == 'delete_row' ?
                <div className="loading">
                  <span style={{backgroundColor: loadingColor}}></span>
                  <span style={{backgroundColor: loadingColor}}></span>
                  <span style={{backgroundColor: loadingColor}}></span>
                </div>
                :
                'Delete'
              }
            </div>
            }
          </div>
        }
        { message && 
          <div className="table-header-error"><SVG svg={'notification'}></SVG> <span>{message}</span></div>
        }
      </div>
      <div className="table-headers">
        <div className="table-headers-item">&nbsp;</div>
        { 
          filterTable(componentData).length > 0 && 
          filterTable(componentData, ['_id', 'createdAt', 'updatedAt', '__v'], 1).map((item, idx, array) => 
          // Object.keys(array[0]).sort((a, b) => console.log(sortOrder.indexOf(a)))
            Object.keys(array[0]).sort((a, b) => sortOrder.indexOf(b) - sortOrder.indexOf(a)).map((key, idx) => 
              <div key={idx} className="table-headers-item">
                {key.replace( /([a-z])([A-Z])/g, "$1 $2")}
              </div>
            )
          )
        }
      </div>
      <div className="table-rows-container">
      { 
        filterTable(originalData[typeOfData]).length > 0 && 
        filterTable(originalData[typeOfData], ['createdAt', 'updatedAt', '__v']).map((item, idx) => 
          account.id !== item._id &&
          <div key={idx} className={`table-rows ` + (idx % 2 == 1 ? ' row-odd' : ' row-even')}>
            <div className="table-rows-checkbox" 
              ref={(el) => (myRefs.current[idx] = el)}
            >
              <label htmlFor={`checkbox`}>
                <input id={`checkbox`} className="table-rows-checkbox-input" type="checkbox" onClick={(e) => e.target.checked == true ?  (setMessage(''), handleSelect(e, item._id)) : (setMessage(''), setControls(false), setSelectID(''))}/>
                <span></span>
                <div>
                  <SVG svg={'checkmark'}></SVG>
                </div>
              </label>
            </div>
            {Object.keys(item).sort((a, b) => sortOrder.indexOf(b) - sortOrder.indexOf(a)).map((key, idx, array) => 
              key !== '_id' && <div key={idx} className="table-rows-item">
                {key == fileType && <a href={`${PUBLIC_FILES}/${fileLocation}/${item[key]}`} target="_blank">{item[key]}</a>}
                {key == fileType2 && <a href={`${PUBLIC_FILES}/${fileLocation}/${item[key]}`} target="_blank">{item[key]}</a>}
                {key !== fileType && Array.isArray(item[key]) && item[key].length > 0 ? item[key][0].name ? item[key][0].name :  item[key][0] : item[key]}
              </div>
            )}
          </div>
        )
      }
      </div>
    </div>
  )
}

export default Table
