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
  createAdmin,
  admin
  }) => {

  useEffect(() => {
   for(let key in account){createAdmin(key, account[key])}
  }, [])

  useEffect(() => {
    for(let key in account){
      if(document.getElementById(String(key))) document.getElementById(String(key)).innerHTML = account[key]
    }
  }, [modal])
  
  const preventEvent = (id) => {
    document.getElementById(id).addEventListener('keydown', (evt) => {
      if (evt.keyCode === 13) {evt.preventDefault()}
    })
  }

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
    
  return (
    <>
      <div className="account-dashboard">
        <div className="account-dashboard-item" onClick={() => (resetUI(), setModal('profile'))}>
          <SVG svg={'user'}></SVG>
          <span>Profile</span>
        </div>
        <div className="account-dashboard-item" onClick={() => (resetUI(),setModal('change_password'))}>
          <SVG svg={'password'}></SVG>
          <span>Change Password</span>
        </div>
        <div className="account-dashboard-item" onClick={() => (resetUI(),setModal('change_email'))}>
          <SVG svg={'email'}></SVG>
          <span>Change Email</span>
        </div>
      </div>
      {modal == 'profile' &&
        <div className="accountUpdateProfile-modal">
          <div className="accountUpdateProfile-modal-box">
            <div className="accountUpdateProfile-modal-box-header">
              <div className="accountUpdateProfile-modal-box-header-title">Update Profile</div>
              <div className="accountUpdateProfile-modal-box-header-svg" onClick={() => (setModal(''), setMessage(''))}><SVG svg={'close'}></SVG></div>
            </div>
            <div className="accountUpdateProfile-modal-box-content">
              <form action="" className="form-group" onSubmit={(e) => updateProfile(e)}>
              <div className="form-group-100">
                <div className="form-group-100-field">
                  <div 
                  id="username" 
                  contentEditable="true" 
                  onInput={(e) => (preventEvent('username'), setMessage(''), createAdmin('username', e.target.innerHTML))}
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
                  onInput={(e) => 
                  (preventEvent('firstName'), setMessage(''), createAdmin('firstName', e.target.innerHTML))}
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
                  (preventEvent('lastName'), setMessage(''), createAdmin('lastName', e.target.innerHTML))}
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
      {/* {modal == 'change_password' &&
        <div className="accountUpdateProfile-modal">
          <div className="accountUpdateProfile-modal-box">
            <div className="accountUpdateProfile-modal-box-header">
              <div className="accountUpdateProfile-modal-form-title">Change Password</div>
              <div onClick={() => (setModal(''), setError(''), setMessage(''))}><SVG svg={'close'}></SVG></div>
            </div>
            <form action="" className="accountUpdateProfile-modal-box-form" onSubmit={(e) => sendResetPasswordLink(e)}>
              <div className="form-group-single">
                <label htmlFor="email">Email</label>
                <input type="text" name="email" value={administrator.email} onChange={(e) => createAdministrator('email', e.target.value)} readOnly required/>
              </div>
              <button type="submit" className="submit-item">{!loading && <span>Change Password</span>} {loading && <div className="loading"><span></span><span></span><span></span></div>}</button>
              {error && <span className="form-errorMessage">{error}</span>}
              {message && <span className="form-successMessage">{message}</span>}
            </form>
          </div>
        </div>
      }
      {modal == 'change_email' &&
        <div className="accountUpdateProfile-modal">
          <div className="accountUpdateProfile-modal-box">
            <div className="accountUpdateProfile-modal-box-header">
              <div className="accountUpdateProfile-modal-form-title">Change Password</div>
              <div onClick={() => (setModal(''), setError(''), setMessage(''))}><SVG svg={'close'}></SVG></div>
            </div>
            <form action="" className="accountUpdateProfile-modal-box-form" onSubmit={(e) => sendChangeEmailConfirmation(e)}>
              <div className="form-group-single">
                <label htmlFor="email">Email</label>
                <input type="email" name="email" value={administrator.email} readOnly required/>
              </div>
              <div className="form-group-single">
                <label htmlFor="email">New Email</label>
                <input type="email" name="email" value={newEmail} onChange={(e) => setNewEmail(e.target.value)} required/>
              </div>
              <button type="submit" className="submit-item">{!loading && <span>Save</span>} {loading && <div className="loading"><span></span><span></span><span></span></div>}</button>
              {error && <span className="form-errorMessage">{error}</span>}
              {message && <span className="form-successMessage">{message}</span>}
            </form>
          </div>
        </div>
      } */}
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
