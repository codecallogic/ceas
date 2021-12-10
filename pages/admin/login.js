import SVG from '../../files/svg'
import {useState, useEffect} from 'react'
import axios from 'axios'
import {API} from '../../config'
import withAdmin from '../withAdmin'

const AdminLogin = ({}) => {

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [displayPassword, setDisplayPassword] = useState(false)
  const [rememberMe, setRememberMe] = useState(false)
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')

  const preventEvent = (id) => {
    document.getElementById(id).addEventListener('keydown', (evt) => {
      if (evt.keyCode === 13) {evt.preventDefault()}
    })
  }

  const login = async () => {
    setLoading(true)
    setMessage('')
    try {
      const responseLogin = await axios.post(`${API}/auth/login`, {username, password}, {withCredentials: true})
      setLoading(false)
      window.location.href = '/admin'
    } catch (error) {
      setLoading(false)
      if(error) error.response.data ? error.response.data.error ? setMessage(error.response.data.error) : error.response ? setMessage(error.response.data) : setMessage('Error ocurred with login, please try again later.') : setMessage('Error ocurred with login, please try again later.')
    }
  }
  
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
                <div 
                id="username" 
                contentEditable="true" 
                onInput={(e) => (preventEvent('username'), setMessage(''), setUsername(e.target.innerHTML))}
                />
                <label 
                  className={username.length > 0 ? ' labelHover' : ''}
                >
                Username
                </label>
              </div>
            </div>
            <div className="form-group-100">
              <div className="form-group-100-field bottomBorders">
                <div 
                id="password" 
                className={displayPassword ? 'showPassword' : 'hidePassword'} 
                contentEditable="true" 
                onInput={(e) => (preventEvent('password'), setMessage(''), setPassword(e.target.innerHTML))} 
                onKeyUp={(e) => e.keyCode == 13 ? login() : null}></div>
                <label 
                className={password.length > 0 ? ' labelHover' : ''}>
                  Password
                </label>
                <span 
                onClick={() => displayPassword ? setDisplayPassword(false) : setDisplayPassword(true)}>
                  {displayPassword ? <SVG svg={'eye-closed'}></SVG> : <SVG svg={'eye'}></SVG>}
                </span>
              </div>
            </div>
          </form>

          <div className="adminLogin-right-options mb2">
            <div className="adminLogin-right-options-rememberMe">
              <div className="form-group-checkbox" onClick={() => rememberMe ? setRememberMe(false) : setRememberMe(true)}>
                <div className={`form-group-checkbox-box` + (rememberMe ? ' checked' : '')}>{rememberMe ? <SVG svg={'checkmark'}></SVG> : null}</div> Remember Me
              </div>
            </div>
            <a href="#">Forgot password</a>
          </div>
          {message.length > 0 ? <div className="form-group-message">{message}</div> : null}
          <button className="form-group-button-100" onClick={() => login()}>{!loading && <span>Log in</span>} {loading && <div className="loading"><span></span><span></span><span></span></div>}</button>
        </div>
      </div>
    </div>
  )
}

export default withAdmin(AdminLogin)
