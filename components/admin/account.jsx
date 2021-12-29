import SVG from '../../files/svg'
import {connect} from 'react-redux'
import {useState, useEffect} from 'react'
import {API} from '../../config'
import axios from 'axios'

const Account = ({
  account,
  accessToken,
  resetUI,
  modal,
  setModal,
  message,
  setMessage,
  loading,
  setLoading,
  preventEvent,
  validateIsEmail,
  createAdmin,
  admin
  }) => {

  const [displayPassword, setDisplayPassword] = useState(false)

  useEffect(() => {
   for(let key in account){createAdmin(key, account[key])}
  }, [])

  useEffect(() => {
    for(let key in account){
      if(document.getElementById(String(key))) document.getElementById(String(key)).innerText = account[key]
    }
  }, [modal])
  
  const updateProfile = async (e) => {
    e.preventDefault()
    setLoading('profile')
    setMessage('')

    try {
      const responseUpdate = await axios.post(`${API}/auth/update-admin-profile`, {account: account, user: admin}, { 
        headers: {
        Authorization: `Bearer ${accessToken}`,
        contentType: `application/json`
      }})
      setLoading('')
      window.localStorage.setItem('component', 'account')
      window.localStorage.setItem('modal', 'profile')
      window.location.href = `/admin`
      
    } catch (error) {
      console.log(error)
      setLoading('')
      if(error) error.response ? setMessage(error.response.data) : setMessage('Error ocurred updating profile, please try again later')
    }
  }

  const changeEmail = async (e) => {
    e.preventDefault()
    if(!validateIsEmail('email')) return setMessage('Invalid email')
    if(account.email == admin.email) return setMessage('Cannot be the same email')

    setLoading('email')
    setMessage('')

    try {
      const responseChange = await axios.post(`${API}/auth/send-change-admin-email`, {account: account, user: admin}, { 
        headers: {
        Authorization: `Bearer ${accessToken}`,
        contentType: `application/json`
      }})
      setLoading('')
      setMessage(`Email change request was sent to ${admin.email}, please confirm to make changes.`)
      
    } catch (error) {
      setLoading('')
      if(error) error.response ? setMessage(error.response.data) : setMessage('Error ocurred updating profile, please try again later')
    }
  }
    
  return (
    <>
      <div className="account-dashboard">
        <div className="account-dashboard-item" onClick={() => (resetUI(), setModal('profile'))}>
          <SVG svg={'user'}></SVG>
          <span>Profile</span>
        </div>
        <div className="account-dashboard-item" onClick={() => (resetUI(),setModal('changeEmail'))}>
          <SVG svg={'email'}></SVG>
          <span>Change Email</span>
        </div>
      </div>
      {modal == 'profile' &&
        <div className="accountUpdateProfile-modal">
          <div className="accountUpdateProfile-modal-box">
            <div className="accountUpdateProfile-modal-box-header">
              <div className="accountUpdateProfile-modal-box-header-title">Update Profile</div>
              <div className="accountUpdateProfile-modal-box-header-svg" onClick={() => (resetUI(), setModal(''), setMessage(''))}><SVG svg={'close'}></SVG></div>
            </div>
            <div className="accountUpdateProfile-modal-box-content">
              <form action="" className="form-group">
              <div className="form-group-100">
                <div className="form-group-100-field">
                  <div 
                  id="username" 
                  contentEditable="true" 
                  onInput={(e) => (preventEvent('username'), setMessage(''), createAdmin('username', e.target.innerText))}
                  />
                  <label 
                  className={admin.username.length > 0 ? ' labelHover' : ''}>
                    Username
                  </label>
                </div>
              </div>
              <div className="form-group-100">
                <div className="form-group-100-field">
                <div 
                  id="firstName" 
                  contentEditable="true"
                  onInput={(e) => (preventEvent('firstName'), setMessage(''), createAdmin('firstName', e.target.innerText))}
                />
                <label 
                  className={admin.firstName.length > 0 ? ' labelHover' : ''}
                >
                  First Name
                </label>
                </div>
              </div>
              <div className="form-group-100">
                <div className="form-group-100-field">
                <div 
                  id="lastName" 
                  contentEditable="true"
                  onInput={(e) => 
                  (preventEvent('lastName'), setMessage(''), createAdmin('lastName', e.target.innerText))}
                />
                <label 
                  className={admin.lastName.length > 0 ? ' labelHover' : ''}
                >
                  Last Name
                </label>
                </div>
              </div>
              {message.length > 0 ? <div className="form-group-message">{message}</div> : null}
              <button className="form-group-button-100" onClick={(e) => updateProfile(e)}>{!loading && <span>Save</span>} {loading == 'profile' && <div className="loading"><span></span><span></span><span></span></div>}</button>
              </form>
            </div>
          </div>
        </div>
      }
      {modal == 'changeEmail' &&
        <div className="accountUpdateProfile-modal">
          <div className="accountUpdateProfile-modal-box">
            <div className="accountUpdateProfile-modal-box-header">
              <div className="accountUpdateProfile-modal-form-title">Change Email</div>
              <div className="accountUpdateProfile-modal-box-header-svg" onClick={() => (resetUI(), setModal(''), setMessage(''))}><SVG svg={'close'}></SVG></div>
            </div>
            <div className="accountUpdateProfile-modal-box-content">
              <form className="form-group">
                <div className="form-group-100">
                <div className="form-group-100">
                <div className="form-group-100-field">
                  <div 
                  id="email" 
                  contentEditable="true" 
                  onInput={(e) => (preventEvent('email'), setMessage(''), createAdmin('email', e.target.innerText))}
                  />
                  <label 
                  className={admin.email.length > 0 ? ' labelHover' : ''}>
                    Email
                  </label>
                </div>
              </div>
                </div>
                {message.length > 0 ? <div className="form-group-message">{message}</div> : null}
                <button className="form-group-button-100" onClick={(e) => changeEmail(e)}>{!loading && <span>Change Email</span>} {loading == 'email' && <div className="loading"><span></span><span></span><span></span></div>}</button>
              </form>
            </div>
          </div>
        </div>
      }
    </>
  )
}

const mapStateToProps = state => {
  return {
    admin: state.admin
  }
}

const mapDispatchToProps = dispatch => {
  return {
    createAdmin: (name, value) => dispatch({type: 'CREATE_ADMIN', name: name, value: value}),
    resetAdministrator: () => dispatch({type: 'RESET_STATE'})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Account)
