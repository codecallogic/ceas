import {filterTable} from '../helpers/tables'
import SVG from '../files/svg'
import {useEffect, useState, useRef} from 'react'

const Table = ({
  title,
  adminUsers,
  originalData,
  account,
  selectID,
  setSelectID,
  controls,
  setControls,
  deleteAdmin,
  setModalData,
  setModal
}) => {

  const myRefs = useRef([])

  const handleClickOutside = (event) => {
    if(myRefs.current){
      myRefs.current.forEach((item) => {
        if(item){
          if(item.contains(event.target)) return
          if(event.target == document.getElementById('delete')) return
          if(event.target == document.getElementById('edit')) return

          const els = document.querySelectorAll('.table-rows-checkbox-input')
          els.forEach( (el) => { el.checked = false })

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
        <div className="table-header-title">{title}</div>
        {controls &&
          <div className="table-header-controls">
            <div 
            id="edit" 
            className="table-header-controls-item" 
            onClick={() => (setModal('create_admin'), setModalData('adminUsers', 'createAdmin'))}
            >
              Edit
            </div>
            {account.role == 'admin' && 
            <div 
            id="delete" 
            className="table-header-controls-item" 
            onClick={deleteAdmin}
            >
              Delete
            </div>
            }
          </div>
        }
      </div>
      <div className="table-headers">
        <div className="table-headers-item">&nbsp;</div>
        { 
          filterTable(adminUsers).length > 0 && 
          filterTable(adminUsers, ['_id', 'createdAt', 'updatedAt', '__v'], 1).map((item, idx, array) => 
            Object.keys(array[0]).map((key, idx) => 
              <div key={idx} className="table-headers-item">
                {key.replace( /([a-z])([A-Z])/g, "$1 $2")}
              </div>
            )
          )
        }
      </div>
      <div className="table-rows-container">
      { 
        filterTable(originalData.adminUsers).length > 0 && 
        filterTable(originalData.adminUsers, ['createdAt', 'updatedAt', '__v']).map((item, idx) => 
          account.id !== item._id &&
          <div key={idx} className={`table-rows ` + (idx % 2 == 1 ? ' row-odd' : ' row-even')}>
            <div className="table-rows-checkbox" 
              ref={(el) => (myRefs.current[idx] = el)}
            >
              <label>
                <input className="table-rows-checkbox-input" type="checkbox" onClick={(e) => handleSelect(e, item._id)}/>
                <span></span>
                <div>
                  <SVG svg={'checkmark'}></SVG>
                </div>
              </label>
            </div>
            {Object.keys(item).map((key, idx, array) => 
              key !== '_id' && <div key={idx} className="table-rows-item">{item[key]}</div>
            )}
          </div>
        )
      }
      </div>
    </div>
  )
}

export default Table
