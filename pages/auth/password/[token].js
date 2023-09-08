import {useState, useEffect} from 'react'
import axios from 'axios'
import { API } from '../../../config'
import SVG from '../../../files/svg'
import lottieForgotPassword from '../../../public/media/lottie/forgotpassword.json'
import Navigation from '../../../components/client/navigation'
import Footer from '../../../components/client/footer'

const ForgotPassword = ({ 
  token,
  navMenus,
  openSearch,

  //// METHODS
  setOpenSearch
}) => {

  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [displayPassword, setDisplayPassword] = useState(false)
  const [displayConfirmPassword, setDisplayConfirmPassword] = useState(false)
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false)

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

  const toggleConfirmPassword = () => {
    displayConfirmPassword ? 
      (  document.getElementById('confirmPassword').setAttribute("type", 'password'),
        setDisplayConfirmPassword(false)
      )
      :
      ( document.getElementById('confirmPassword').setAttribute("type", 'text'),
        setDisplayConfirmPassword(true)
      )
  }
  
  
  useEffect(() => {
    const player = document.getElementById('forgotPassword')
    player.load(lottieForgotPassword)

  }, [])

  const resetPassword = async (e) => {
    e.preventDefault()
    setLoading(true)
    if(password !== confirmPassword) return setMessage('passwords do not match')
    
    try {
      const responsePassword = await axios.post(`${API}/auth/reset-password`, {password: password, token: token})
      setLoading(false)
      setPassword('')
      setConfirmPassword('')
      setMessage(responsePassword.data)
      
    } catch (error) {
      console.log(error)
      setLoading(false)
      if(error) error.response ? error.response.data.error ? setMessage(error.response.data.error) : error.response ? setMessage(error.response.data) : setMessage('Error ocurred could not reset password') : setMessage('Error occurred could not reset password')
    }
    
  }
  
  return (
    <>
    <Navigation
      navMenus={navMenus} 
      openSearch={openSearch}
      setOpenSearch={setOpenSearch}
    >
    </Navigation>
    <div className="forgotPassword">
      <div className="forgotPassword-container">
        <lottie-player 
          id="forgotPassword"
          background="transparent"  
          speed="1.5"  
          style={{width: '150px', height: '150px'}}  
          loop  
          autoplay
        ></lottie-player>
        <h1 className="forgotPassword-container-title">Reset Password</h1>
        <div className="form-group alt-group-top">
          <input 
          id="password" 
          type="password"
          value={password} 
          onChange={(e) => (setMessage(''), setPassword(e.target.value))}

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
        <div className="form-group alt-group-bottom">
          <input 
          id="confirmPassword" 
          type="password"
          value={confirmPassword} 
          onChange={(e) => (setMessage(''), setConfirmPassword(e.target.value))}
          onKeyUp={(e) => e.keyCode == 13 ? login() : null}
          />
          <label 
          className={`input-label ` + (
            confirmPassword.length > 0
            ? ' labelHover' 
            : ''
          )}
          htmlFor="confirmPassword">
            Confirm Password
          </label>
          <span 
          onClick={() => toggleConfirmPassword()}>
            {displayConfirmPassword ? <SVG svg={'eye-closed'}></SVG> : <SVG svg={'eye'}></SVG>}
          </span>
        </div>
        <br></br>
        {message.length > 0 ? <div className="form-group-message">{message}</div> : null}
        <button className="form-group-button" onClick={(e) => resetPassword(e)}>
          {!loading && <span>Change Password</span>} 
          {loading && 
            <div className="loading"><span></span><span></span><span></span></div>
          }
        </button>
      </div>

    </div>
    <Footer></Footer>
    </>
  )
}

ForgotPassword.getInitialProps = ({query}) => {

  return {
    token: query.token ? query.token : null
  }
  
}

export default ForgotPassword
