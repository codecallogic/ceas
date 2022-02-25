import SVG from '../../../files/svg'
import { useEffect, useRef, useState } from 'react'
import axios from 'axios'
import { API } from '../../../config'
import { validateIsEmail } from '../../../helpers/validations'

const NewsForm = ({ 
  setModal
}) => {

  const myRefs = useRef(null)
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState('')

  const sendEmail = async (e) => {
    e.preventDefault()

    if(!validateIsEmail('email')) return setMessage('Invalid email')
    setMessage('')
    setLoading('send_email')
    
    try {
      const responseEmail = await axios.post(`${API}/auth/forgot-password`, {email: email})
      setLoading('')
      setMessage(responseEmail.data)
    } catch (error) {
      console.log(error)
      setLoading('')
      if(error) error.response ? setMessage(error.response.data) : setMessage('Error ocurred could not send email to reset password')
      
    }
    
  }
    
  return (
    <div className="modal">
      <div className="modal-box">
        <div className="modal-box-header">
          <div 
          className="modal-box-svg" 
          onClick={() => (setModal(''), setMessage(''))}
          >
            <SVG svg={'close'}></SVG>
          </div>
          <div className="modal-box-header-title">Forgot Password</div>
        </div>
        <div className="modal-box-content">
          <div className="form-group">
            <input 
            id="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)}/>
            <label 
            className={`input-label ` + (
              email.length > 0 |
              typeof email == 'object' 
              ? ' labelHover' 
              : ''
            )}
            htmlFor="email">
              Email
            </label>
          </div>
        </div>
        <div className="modal-box-footer">
          {message.length > 0 ? <div className="form-group-message">{message}</div> : null}
            <button 
            className="form-group-button" 
            onClick={(e) => sendEmail(e)}>
              {!loading && 
              <span>Send Email</span>
              } 
              {loading == 'send_email' && 
              <div className="loading"><span></span><span></span><span></span></div>
              }
          </button>
        </div>
      </div>
    </div>
  )
}

export default NewsForm
