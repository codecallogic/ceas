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
  resetCheckboxes,
  
  //// REDUX
  faculty,
  resetFaculty
  }) => {

  const sortOrder = ['componentThree', 'componentTwo', 'componentOne', 'researchInterests', 'officeLocation', 'centerAssociation', 'website', 'officePhone', 'profileImage', 'department', 'email', 'profession', 'name', 'title']

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
    if(!validateIsEmail('email')) return setMessage('Invalid email address')
    if(!faculty.title) return setMessage('Please select a title')
    if(!faculty.name) return setMessage('Please add a name')
    if(!faculty.profession) return setMessage('Please add a profession')
    if(!faculty.department) return setMessage('Please add a department')
    if(!faculty.email) return setMessage('Please add an email')
    setLoading('update_faculty')
    setMessage('')

    let fileID    = nanoid()
    let data      = new FormData()

    for(let key in faculty){
      if(key !== 'profileImage') data.append(key, faculty[key])

      if(key == 'profileImage' && (typeof faculty.profileImage === 'object' && faculty.profileImage !== null)) faculty.profileImage ? data.append('file', faculty.profileImage, `faculty-${fileID}.${faculty.profileImage.name.split('.'[1])}`) : null

      if(key == 'profileImage' && (typeof faculty.profileImage !== 'object' && faculty.profileImage !== null)) data.append(key, faculty[key])
    }

    try {
      const responseUpdate = await axios.post(`${API}/faculty/update-faculty`, data, { 
        headers: {
        Authorization: `Bearer ${accessToken}`,
        contentType: `application/json`
      }})
      setLoading('')
      allData.faculty = responseUpdate.data
      setAllData(allData)
      setModal('')
      
    } catch (error) {
      console.log(error)
      setLoading('')
      if(error) error.response ? error.response.statusText == 'Unauthorized' ? (setMessage(error.response.statusText), window.location.href = '/admin/login') : setMessage(error.response.data) : setMessage('Error ocurred updating faculty member, please try again later')
    }
  }

  const deleteFaculty = async (e) => {
    e.preventDefault()
    setLoading('delete_faculty')
    setMessage('')
    
    try {
      const responseDelete = await axios.post(`${API}/faculty/delete-faculty`, {id: selectID}, { 
        headers: {
        Authorization: `Bearer ${accessToken}`,
        contentType: `application/json`
      }})
      setLoading('')
      allData.faculty = responseDelete.data
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
        <div className="account-dashboard-item" onClick={() => (resetUI(), resetFaculty(), setModal('create_faculty'))}>
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
        deleteRow={deleteFaculty}
        message={message}
        sortOrder={sortOrder}
        resetCheckboxes={resetCheckboxes}
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
        resetFaculty={resetFaculty}
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
        resetFaculty={resetFaculty}
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
