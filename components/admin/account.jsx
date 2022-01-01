import SVG from '../../files/svg'
import {connect} from 'react-redux'
import {useState, useEffect} from 'react'
import {API} from '../../config'
import axios from 'axios'
import AdminModals from '../modals/AdminModals'

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
        <AdminModals
          type={'update_admin'}
          title={'Update Profile'}
          updateProfile={updateProfile}
          resetUI={resetUI}
          setModal={setModal}
          setMessage={setMessage}
          message={message}
          loading={loading}
          preventEvent={preventEvent}
        >
        </AdminModals>
      }
      {modal == 'changeEmail' &&
        <AdminModals
          type={'change_email'}
          title={'Change Email'}
          changeEmail={changeEmail}
          resetUI={resetUI}
          setModal={setModal}
          setMessage={setMessage}
          message={message}
          loading={loading}
          preventEvent={preventEvent}
        >
        </AdminModals>
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
