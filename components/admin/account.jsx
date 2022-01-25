import SVG from '../../files/svg'
import {API} from '../../config'
import axios from 'axios'
import AdminModals from '../modals/AdminModals'

const Account = ({
  account,
  resetUI,
  modal,
  setModal,
  message,
  setMessage,
  loading,
  setLoading,
  
  //// VALIDATIONS
  validateIsEmail,

  //// DATA
  editDataType,
  setModalData,

  //// REDUX
  stateData,
  stateMethod,
  resetMethod,

  }) => {

  const updateProfile = async (e) => {
    e.preventDefault()
    setLoading(modal)
    setMessage('')

    try {
      const responseUpdate = await axios.post(`${API}/auth/update-admin-profile`, {account: account, user: stateData}, { 
        headers: {
        Authorization: `Bearer ${accessToken}`,
        contentType: `application/json`
      }})
      setLoading('')
      window.localStorage.setItem('component', 'account')
      window.location.href = `/admin`
      
    } catch (error) {
      console.log(error)
      setLoading('')
      if(error) error.response ? error.response.statusText == 'Unauthorized' ? (setMessage(error.response.statusText), window.location.href = 'admin/login') : setMessage(error.response.data) : setMessage('Error ocurred updating profile, please try again later')
    }
  }

  const changeEmail = async (e) => {
    e.preventDefault()
    if(!validateIsEmail('email')) return setMessage('Invalid email')
    if(account.email == stateData.email) return setMessage('Cannot be the same email')

    setLoading(modal)
    setMessage('')

    try {
      const responseChange = await axios.post(`${API}/auth/send-change-admin-email`, {account: account, user: stateData}, { 
        headers: {
        Authorization: `Bearer ${accessToken}`,
        contentType: `application/json`
      }})
      setLoading('')
      setMessage(`Email change request was sent to ${stateData.email}, please confirm to make changes.`)
      
    } catch (error) {
      setLoading('')
      if(error) error.response ? error.response.statusText == 'Unauthorized' ? (setMessage(error.response.statusText), window.location.href = 'admin/login') : setMessage(error.response.data) : setMessage('Error ocurred updating profile, please try again later')
    }
  }
    
  return (
    <>
      <div className="account-dashboard">
        <div className="account-dashboard-item" onClick={() => (
          resetUI(), 
          setModalData(null, editDataType.caseType, account),
          setModal('update_profile')
          )}>
          <SVG svg={'user'}></SVG>
          <span>Profile</span>
        </div>
        <div className="account-dashboard-item" onClick={() => (
          resetUI(), 
          setModalData(null, editDataType.caseType, account),
          setModal('change_email')
          )}>
          <SVG svg={'email'}></SVG>
          <span>Change Email</span>
        </div>
      </div>
      <AdminModals
          resetUI={resetUI}
          modal={modal}
          setModal={setModal}
          setMessage={setMessage}
          message={message}
          loading={loading}
          setLoading={setLoading}
          stateData={stateData}
          stateMethod={stateMethod}
          caseType={'CREATE_ADMIN'}
          resetMethod={resetMethod}
          resetType={'RESET_ADMIN'}
          updateProfile={updateProfile}
          changeEmail={changeEmail}
        >
      </AdminModals>
    </>
  )
}

export default Account
