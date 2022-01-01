import SVG from '../../files/svg'
import {connect} from 'react-redux'
import {useState, useEffect} from 'react'
import {API} from '../../config'
import axios from 'axios'
import AdminModals from '../modals/AdminModals'
import AdminTables from '../table'

const Users = ({
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
  setElementText,
  resetAdministrator,
  admin
}) => {

  const [view, setView] = useState('all_admin')

  const createNewAdmin = async (e) => {
    e.preventDefault()
    if(!validateIsEmail('email')) return setMessage('Invalid email')
    
    setLoading('admin')
    setMessage('')

    try {
      const responseAdmin = await axios.post(`${API}/auth/invite-admin`, admin, { 
        headers: {
        Authorization: `Bearer ${accessToken}`,
        contentType: `application/json`
      }})
      setLoading('')
      setMessage(responseAdmin.data)
      for(let key in admin){
        if(document.getElementById(key)) document.getElementById(key).innerHTML = ''
      }
      resetAdministrator()
      
    } catch (error) {
      setLoading('')
      if(error) error.response ? setMessage(error.response.data) : setMessage('Error ocurred creating admin, please try again later')
    }
  }
  
  return (
    <>
      {view == '' && 
      <div className="account-dashboard">
        <div className="account-dashboard-item" onClick={() => (resetUI())}>
          <SVG svg={'user'}></SVG>
          <span>View All Admin</span>
        </div>
        <div className="account-dashboard-item" onClick={() => (resetUI(), resetAdministrator(), setModal('create-admin'))}>
          <SVG svg={'email'}></SVG>
          <span>Add Admin</span>
        </div>
      </div>
      }
      {/* //// TABLES //// */}
      {view == 'all_admin' &&
        <AdminTables
          title={'Admin Users'}
        >
        </AdminTables>
      }


      {/* //// MODALS //// */}
      {modal == 'create-admin' &&
        <AdminModals
          type={'create_admin'}
          title={'Create Admin'}
          createNewAdmin={createNewAdmin}
          resetUI={resetUI}
          setModal={setModal}
          setMessage={setMessage}
          message={message}
          loading={loading}
          preventEvent={preventEvent}
          setElementText={setElementText}
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
    resetAdministrator: () => dispatch({type: 'RESET_ADMIN'})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users)
