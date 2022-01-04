import SVG from '../../files/svg'
import {connect} from 'react-redux'
import {useState, useEffect} from 'react'
import {API} from '../../config'
import axios from 'axios'
import AdminModals from '../modals/AdminModals'
import AdminTables from '../table'

const Users = ({
  data,
  originalData,
  account,
  accessToken,
  resetUI,
  modal,
  setModal,
  view,
  setView,
  message,
  setMessage,
  loading,
  setLoading,
  preventEvent,
  validateIsEmail,
  setElementText,
  createAdmin,
  resetAdministrator,
  admin
}) => {

  const [allUsers, setAllUsers] = useState(data ? data : [])
  const [selectID, setSelectID] = useState('')
  const [controls, setControls] = useState(false)

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
      console.log(error)
      setLoading('')
      if(error) error.response ? setMessage(error.response.data) : setMessage('Error ocurred creating admin, please try again later')
    }
  }

  const deleteAdmin = async (e) => {
    e.preventDefault()
    setLoading('delete_admin')
    setMessage('')
    
    try {
      const responseDelete = await axios.post(`${API}/auth/delete-admin`, {id: selectID}, { 
        headers: {
        Authorization: `Bearer ${accessToken}`,
        contentType: `application/json`
      }})
      setLoading('')
      setAllUsers(responseDelete.data)
      setControls(false)

    } catch (error) {
      console.log(error.response)
      setLoading('')
      if(error) error.response ? setMessage(error.response.data.substr(0, 200)) : setMessage('Error ocurred creating admin, please try again later')
    }
  }

  const updateAdmin = async (e) => {
    e.preventDefault()
    setLoading('update_admin')
    setMessage('')

    try {
      const responseUpdate = await axios.post(`${API}/auth/update-admin-profile`, {user: admin}, { 
        headers: {
        Authorization: `Bearer ${accessToken}`,
        contentType: `application/json`
      }})
      setLoading('')
      window.localStorage.setItem('view', 'all_admin')
      window.location.href = `/admin`
      
    } catch (error) {
      console.log(error)
      setLoading('')
      if(error) error.response ? setMessage(error.response.data.substr(0, 200)) : setMessage('Error ocurred updating admin, please try again later')
    }
  }

  const setModalData = (type, reducer) => {
    for(let key in originalData[type]){
      if(reducer == 'createAdmin'){

        if(originalData[type][key]._id == selectID){
          let object = originalData[type][key]
          for(let keyOfObject in object){
            createAdmin(keyOfObject, object[keyOfObject])
          }
        }

      }
    }
  }

  useEffect(() => {
    for(let key in admin){setElementText(key, admin[key])}
  }, [modal])
  
  return (
    <>
      {view == '' && 
      <div className="account-dashboard">
        <div className="account-dashboard-item" onClick={() => (resetUI(), setView('all_admin'))}>
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
          adminUsers={allUsers}
          originalData={originalData}
          account={account}
          selectID={selectID}
          setSelectID={setSelectID}
          controls={controls}
          setControls={setControls}
          deleteAdmin={deleteAdmin}
          setModalData={setModalData}
          setModal={setModal}
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
      {modal == 'create_admin' &&
        <AdminModals
          type={'create_admin'}
          functionType={'update_admin'}
          title={'Update Admin'}
          resetUI={resetUI}
          setModal={setModal}
          setMessage={setMessage}
          message={message}
          loading={loading}
          preventEvent={preventEvent}
          setElementText={setElementText}
          updateAdmin={updateAdmin}
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
