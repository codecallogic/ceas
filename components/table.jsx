import {filterTable} from '../helpers/tables'
import SVG from '../files/svg'
import {useEffect, useState, useRef} from 'react'

const Table = ({
  title,
  adminUsers,
  originalData
}) => {

  const myRefs = useRef([])
  const [allUsers, setAllUsers] = useState(adminUsers)
  const [selectID, setSelectID] = useState('')
  const [controls, setControls] = useState(false)

  const handleClickOutside = (event) => {
    if(myRefs.current){
      myRefs.current.forEach((item) => {
        if(item){
       
          if(item.contains(event.target)) return
          if(event.target == document.getElementById('delete-job')) return
          if(event.target == document.getElementById('edit-job')) return

          const els = document.querySelectorAll('.table-rows-checkbox-input')
          els.forEach( (el) => { el.checked = false })

          setControls(false)
          setSelectID('')
        }
      })
    }
  }

  useEffect(() => {
    console.log(selectID)
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
            <div className="table-header-controls-item">Edit</div>
            <div className="table-header-controls-item">Delete</div>
          </div>
        }
      </div>
      <div className="table-headers">
        <div className="table-headers-item">&nbsp;</div>
        { 
          filterTable(originalData.adminUsers).length > 0 && 
          filterTable(originalData.adminUsers, ['_id', 'createdAt', 'updatedAt', '__v'], 1).map((item, idx, array) => 
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
        filterTable(allUsers).length > 0 && 
        filterTable(allUsers, ['createdAt', 'updatedAt', '__v']).map((item, idx) => 
          <div key={idx} className="table-rows">
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
            <div className="table-rows-item">{item.firstName}</div>
            <div className="table-rows-item">{item.lastName}</div>
            <div className="table-rows-item">{item.email}</div>
            <div className="table-rows-item">{item.username}</div>
            <div className="table-rows-item">{item.role}</div>
          </div>
        )
      }
      </div>
     
    </div>
  )
}

export default Table
