import SVG from '../../files/svg'
import {connect} from 'react-redux'
import {useState, useEffect} from 'react'
import {API} from '../../config'
import axios from 'axios'
import AdminModals from '../modals/AdminModals'
import AdminTable from '../table'
import {nanoid} from 'nanoid'

const Components = ({
  data,
  allData,
  setAllData,
  account,
  accessToken,
  resetUI,
  modal,
  setModal,
  message,
  setMessage,
  view,
  setView,
  loading,
  setLoading,
  preventEvent,
  selectID,
  setSelectID,
  controls,
  setControls,
  setElementText,
  setModalData,
  validateIsEmail,
  
  //// REDUX
  faculty,
  resetFaculty
  }) => {

  const [allFaculty, setAllFaculty] = useState(data ? data : [])

  const createFaculty= async (e) => {
    e.preventDefault()
    if(!validateIsEmail('email')) return setMessage('Invalid email address')
    if(!faculty.title) return setMessage('Please select a title')
    if(!faculty.name) return setMessage('Please add a name')
    if(!faculty.profession) return setMessage('Please add a profession')
    if(!faculty.department) return setMessage('Please add a department')
    if(!faculty.email) return setMessage('Please add an email')
    setLoading('create_faculty')
    setMessage('')

    let fileID    = nanoid()
    let data      = new FormData()

    for(let key in faculty){
      if(key !== 'profileImage') data.append(key, faculty[key])
      if(key == 'profileImage') faculty.profileImage ? data.append('file', faculty.profileImage, `faculty-${fileID}.${faculty.profileImage.name.split('.'[1])}`) : null
    }
    
    try {
      const responseCreate = await axios.post(`${API}/faculty/create-faculty`, data, { 
        headers: {
        Authorization: `Bearer ${accessToken}`,
        contentType: `multipart/form-data`
      }})
      setLoading('')
      allData.faculty = responseCreate.data
      setAllData(allData)
      setMessage('Faculty was created')
      for(let key in faculty){setElementText(key, '')}
      resetFaculty()
      
    } catch (error) {
      console.log(error.response)
      setLoading('')
      if(error) error.response ? error.response.statusText == 'Unauthorized' ? (setMessage(error.response.statusText), window.location.href = '/admin/login') : setMessage(error.response.data) : setMessage('Error ocurred creating a faculty, please try again later')
    }
  }

  const updateFaculty = async (e) => {
    e.preventDefault()
    if(!component.name) return setMessage('Please fill out name field')
    if(!component.active) return setMessage('Please choose active setate')
    if(!component.shortDescription) return setMessage('Please add a short description')
    if(!component.longDescription) return setMessage('Please add a long description')
    setLoading('update_component')
    setMessage('')

    try {
      const responseUpdate = await axios.post(`${API}/component/update-component`, component, { 
        headers: {
        Authorization: `Bearer ${accessToken}`,
        contentType: `application/json`
      }})
      setLoading('')
      allData.components = responseUpdate.data
      setAllData(allData)
      setModal('')
      
    } catch (error) {
      console.log(error)
      for(let key in component){setElementText(key, '')}
      resetComponent()
      setLoading('')
      if(error) error.response ? setMessage(error.response.data) : setMessage('Error ocurred updating the component, please try again later')
    }
  }

  const deleteComponent = async (e) => {
    e.preventDefault()
    setLoading('delete_component')
    setMessage('')
    
    try {
      const responseDelete = await axios.post(`${API}/component/delete-component`, {id: selectID}, { 
        headers: {
        Authorization: `Bearer ${accessToken}`,
        contentType: `application/json`
      }})
      setLoading('')
      allData.components = responseDelete.data
      setAllData(allData)
      setControls(false)

    } catch (error) {
      console.log(error.response)
      setLoading('')
      if(error) error.response ? setMessage(error.response.data.substr(0, 200)) : setMessage('Error ocurred deleting component, please try again later')
    }
  }
    
  return (
    <>
      { view == '' && 
      <div className="account-dashboard">
        <div className="account-dashboard-item" onClick={() => (resetUI(), setView('all_faculty'))}>
          <SVG svg={'list'}></SVG>
          <span>View Faculty</span>
        </div>
        <div className="account-dashboard-item" onClick={() => (resetUI(), setModal('create_faculty'))}>
          <SVG svg={'add-staff'}></SVG>
          <span>Create Faculty Member</span>
        </div>
      </div>
      }
      { view == 'all_faculty' &&
      <AdminTable
        title={'Faculty'}
        typeOfData={'faculty'}
        modalType={'update_faculty'}
        modalDataType={{key: 'faculty', method: 'createFaculty'}}
        componentData={allFaculty}
        originalData={allData}
        account={account}
        selectID={selectID}
        setSelectID={setSelectID}
        controls={controls}
        setControls={setControls}
        setModal={setModal}
        setModalData={setModalData}
        deleteRow={deleteComponent}
        message={message}
      >
      </AdminTable>
      }
      {modal == 'create_faculty' &&
      <AdminModals
        type={'create_faculty'}
        title={'Create Faculty Member'}
        data={allData}
        submitFaculty={createFaculty}
        resetUI={resetUI}
        setModal={setModal}
        setMessage={setMessage}
        message={message}
        loading={loading}
        setLoading={setLoading}
        setElementText={setElementText}
        preventEvent={preventEvent}
      >
      </AdminModals>
      }
      {modal == 'update_faculty' &&
      <AdminModals
        type={'create_faculty'}
        functionType={'update_faculty'}
        title={'Update Faculty Member'}
        data={allData}
        updateFaculty={updateFaculty}
        resetUI={resetUI}
        setModal={setModal}
        setMessage={setMessage}
        message={message}
        loading={loading}
        setLoading={setLoading}
        setElementText={setElementText}
        preventEvent={preventEvent}
      >
      </AdminModals>
      }
    </>
  )
}

const mapStateToProps = state => {
  return {
    faculty: state.faculty
  }
}

const mapDispatchToProps = dispatch => {
  return {
    resetFaculty: () => dispatch({type: 'RESET_FACULTY'})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Components)
