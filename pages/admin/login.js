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

  const togglePassword = () => {
    displayPassword ? 
      (  document.getElementById('password').setAttribute("type", 'password'),
        setDisplayPassword(false)
      )
      :
      ( document.getElementById('password').setAttribute("type", 'text'),
        setDisplayPassword(true)
      )
  }

  const login = async () => {
    setLoading(true)
    setMessage('')
    try {
      const responseLogin = await axios.post(`${API}/auth/login`, {username, password}, {withCredentials: true})
      setLoading(false)
      window.location.href = '/admin'
    } catch (error) {
      console.log(error)
      setLoading(false)
      if(error) error.response ? error.response.data.error ? setMessage(error.response.data.error) : error.response ? setMessage(error.response.data) : setMessage('Error ocurred login you in, please try again later.') : setMessage('Error ocurred login you in, please try again later.')
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

          <div className="form-group alt-group-top">
            <input 
            id="username" 
            value={username} 
            onChange={(e) => (setMessage(''), setUsername(e.target.value))}

            />
            <label 
            className={`input-label ` + (
              username.length > 0
              ? ' labelHover' 
              : ''
            )}
            htmlFor="username">
              Username
            </label>
          </div>
          <div className="form-group alt-group-bottom">
            <input 
            id="password" 
            type="password"
            value={password} 
            onChange={(e) => (setMessage(''), setPassword(e.target.value))}
            onKeyUp={(e) => e.keyCode == 13 ? login() : null}
            />
            <label 
            className={`input-label ` + (
              password.length > 0
              ? ' labelHover' 
              : ''
            )}
            htmlFor="password">
              Password
            </label>
            <span 
            onClick={() => togglePassword()}>
              {displayPassword ? <SVG svg={'eye-closed'}></SVG> : <SVG svg={'eye'}></SVG>}
            </span>
          </div>
          <div className="adminLogin-right-options mb2">
            <div className="adminLogin-right-options-rememberMe">
              <div className="form-group-checkbox" onClick={() => rememberMe ? setRememberMe(false) : setRememberMe(true)}>
                <div className={`form-group-checkbox-box` + (rememberMe ? ' checked' : '')}>{rememberMe ? <SVG svg={'checkmark'}></SVG> : null}</div> Remember Me
              </div>
            </div>
            <a href="#">Forgot password</a>
          </div>
          {message.length > 0 ? <div className="form-group-message">{message}</div> : null}
          <button className="form-group-button" onClick={() => login()}>{!loading && <span>Log in</span>} {loading && <div className="loading"><span></span><span></span><span></span></div>}</button>
        </div>
      </div>
    </div>
  )
}

export default AdminLogin
