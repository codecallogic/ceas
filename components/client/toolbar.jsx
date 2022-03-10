
const Toolbar = ({}) => {
  
  return (
    <div className="toolbar">
      <div className="toolbar-language">
        <div className="toolbar-language-menu"></div>
        <div className="toolbar-language-dropdown"></div>
      </div>
      <div className="toolbar-admin" onClick={() => window.location = 'admin/login'}>
        <img src="/media/restricted/lock.png" alt="Lock" />
        <span>Restricted Area</span>
      </div>
    </div>
  )
}

export default Toolbar
