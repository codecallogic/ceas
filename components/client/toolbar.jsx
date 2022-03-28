import { useState, useEffect } from 'react'
import SVG from '../../files/svg'

const Toolbar = ({}) => {

  const [dropdown, setDropdown] = useState('')
  
  return (
    <div className="toolbar">
      <div className="toolbar-language">
        <div className="toolbar-language-menu">
          <div className="toolbar-language-menu-icon"></div>
        </div>
        <div className="toolbar-language-dropdown" onClick={() => dropdown == '' ? setDropdown('languages') : setDropdown('')}>
          Language
          <SVG svg={'dropdown'}></SVG>
          { dropdown == 'languages' && 
          <div className="toolbar-language-dropdown-menu">
            <span>English</span>
            <span>Spanish</span>
            <span>Portuguese</span>
            <span>French</span>
          </div>
          }
        </div>
      </div>
      <div className="toolbar-admin" onClick={() => window.open('admin/login', '_blank')}>
        <img src="/media/restricted/lock.png" alt="Lock" />
        <span>Restricted Area</span>
      </div>
    </div>
  )
}

export default Toolbar
