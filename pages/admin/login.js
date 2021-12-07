import SVG from '../../files/svg'
import {useState, useEffect} from 'react'

const AdminLogin = ({}) => {

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [displayPassword, setDisplayPassword] = useState(false)
  const [rememberMe, setRememberMe] = useState(false)
  
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
              <div className="form-group-100-field topBorders">
                <div id="username" contentEditable="true" onInput={(e) => setUsername(e.target.innerText)}></div>
                <label htmlFor="username" className={username.length > 0 ? ' labelHover' : ''}>Username</label>
              </div>
            </div>
            <div className="form-group-100">
              <div className="form-group-100-field bottomBorders">
                <div id="password" className={displayPassword ? 'showPassword' : 'hidePassword'} contentEditable="true" onInput={(e) => setPassword(e.target.innerText)}></div>
                <label htmlFor="password" className={password.length > 0 ? ' labelHover' : ''}>Password</label>
                <span onClick={() => displayPassword ? setDisplayPassword(false) : setDisplayPassword(true)}>
                  {displayPassword ? <SVG svg={'eye-closed'}></SVG> : <SVG svg={'eye'}></SVG>}
                </span>
              </div>
            </div>
          </form>

          <div className="adminLogin-right-options mb4">
            <div className="adminLogin-right-options-rememberMe">
              <div className="form-group-checkbox" onClick={() => rememberMe ? setRememberMe(false) : setRememberMe(true)}>
                <div className={`form-group-checkbox-box` + (rememberMe ? ' checked' : '')}>{rememberMe ? <SVG svg={'checkmark'}></SVG> : null}</div> Remember Me
              </div>
            </div>
            <a href="#">Forgot password</a>
          </div>
          <button className="form-group-button-100">Log in</button>
        </div>
      </div>
    </div>
  )
}

export default AdminLogin
