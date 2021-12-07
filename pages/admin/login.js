import SVG from '../../files/svg'

const AdminLogin = ({}) => {
  
  return (
    <div className="adminLogin">
      <div className="adminLogin-container">
        <div className="adminLogin-left">
          <SVG svg={'remotely'} color={'#e63946'}></SVG>
        </div>
        <div className="adminLogin-right">
          <h3 className="adminLogin-right-title">Sign In</h3>
          <p className="adminLogin-right-sub_title mb4">Only authorized personal can login. If you'd like access please visit or contact our tech team for help.</p>
          <form className="form-group">
            <div className="form-group-100">
              <div className="form-group-100-field">
                <div id="username" placeholder="Username" contenteditable="true" placeholder="Username" onClick={() => console.log('Hello')}></div>
                <label htmlFor="username">Username</label>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default AdminLogin
