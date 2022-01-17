import SVG from '../../files/svg'
import {connect} from 'react-redux'
import {useState, useEffect} from 'react'
import {API} from '../../config'
import axios from 'axios'
import AdminModals from '../modals/AdminModals'
import AdminTable from '../table'
import {nanoid} from 'nanoid'

const Students = ({
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
  student,
  resetStudent
  
  }) => {
  // console.log(allData)
  
  const sortOrder = ['component', 'centerAssociation', 'location', 'department', 'profileImage', 'startDate', 'endDate', 'advisor', 'phone', 'email', 'status', 'name', 'title']

  const [allStudents, setAllStudents] = useState(data ? data : [])

  const createStudent= async (e) => {
    e.preventDefault()
    if(!validateIsEmail('email')) return setMessage('Invalid email address')
    if(!student.title) return setMessage('Please select a title')
    if(!student.name) return setMessage('Please add a name')
    if(!student.advisor) return setMessage('Please add an advisor')
    if(!student.department) return setMessage('Please add a department')
    if(!student.status) return setMessage('Please add status')
    setLoading('create_student')
    setMessage('')

    let fileID    = nanoid()
    let data      = new FormData()

    for(let key in student){
      if(key !== 'profileImage') data.append(key, student[key])
      if(key == 'profileImage') student.profileImage ? data.append('file', student.profileImage, `student-${fileID}.${student.profileImage.name.split('.'[1])}`) : null
    }
    
    try {
      const responseCreate = await axios.post(`${API}/student/create-student`, data, { 
        headers: {
        Authorization: `Bearer ${accessToken}`,
        contentType: `multipart/form-data`
      }})
      setLoading('')
      allData.students = responseCreate.data
      setAllData(allData)
      setMessage('Student was created')
      for(let key in student){setElementText(key, '')}
      resetStudent()
      
    } catch (error) {
      console.log(error)
      setLoading('')
      if(error) error.response ? error.response.statusText == 'Unauthorized' ? (setMessage(error.response.statusText), window.location.href = '/admin/login') : setMessage(error.response.data) : setMessage('Error ocurred creating student, please try again later')
    }
  }

  const updateStudent = async (e) => {
    e.preventDefault()
    if(!validateIsEmail('email')) return setMessage('Invalid email address')
    if(!student.title) return setMessage('Please select a title')
    if(!student.name) return setMessage('Please add a name')
    if(!student.advisor) return setMessage('Please add an advisor')
    if(!student.department) return setMessage('Please add a department')
    if(!student.status) return setMessage('Please add status')
    setLoading('update_student')
    setMessage('')

    let fileID    = nanoid()
    let data      = new FormData()

    for(let key in student){
      if(key !== 'profileImage') data.append(key, student[key])

      if(key == 'profileImage' && (typeof student.profileImage === 'object' && student.profileImage !== null)) student.profileImage ? data.append('file', student.profileImage, `student-${fileID}.${student.profileImage.name.split('.'[1])}`) : null

      if(key == 'profileImage' && (typeof student.profileImage !== 'object' && student.profileImage !== null)) data.append(key, student[key])
    }

    try {
      const responseUpdate = await axios.post(`${API}/student/update-student`, data, { 
        headers: {
        Authorization: `Bearer ${accessToken}`,
        contentType: `application/json`
      }})
      setLoading('')
      allData.students = responseUpdate.data
      setAllData(allData)
      setModal('')
      
    } catch (error) {
      console.log(error)
      setLoading('')
      if(error) error.response ? error.response.statusText == 'Unauthorized' ? (setMessage(error.response.statusText), window.location.href = '/admin/login') : setMessage(error.response.data) : setMessage('Error ocurred updating student, please try again later')
    }
  }

  const deleteStudent = async (e) => {
    e.preventDefault()
    setLoading('delete_student')
    setMessage('')
    
    try {
      const responseDelete = await axios.post(`${API}/student/delete-student`, {id: selectID}, { 
        headers: {
        Authorization: `Bearer ${accessToken}`,
        contentType: `application/json`
      }})
      setLoading('')
      allData.students = responseDelete.data
      setAllData(allData)
      setControls(false)

    } catch (error) {
      console.log(error.response)
      setLoading('')
      if(error) error.response ? setMessage(error.response.data.substr(0, 200)) : setMessage('Error ocurred deleting student, please try again later')
    }
  }
    
  return (
    <>
      { view == '' && 
      <div className="account-dashboard">
        <div className="account-dashboard-item" onClick={() => (resetUI(), setView('all_students'))}>
          <SVG svg={'list'}></SVG>
          <span>View Students</span>
        </div>
        <div className="account-dashboard-item" onClick={() => (resetUI(), resetStudent(), setModal('create_student'))}>
          <SVG svg={'add-staff'}></SVG>
          <span>Create Student</span>
        </div>
      </div>
      }
      { view == 'all_students' &&
      <AdminTable
        title={'Students'}
        typeOfData={'students'}
        modalType={'update_student'}
        modalDataType={{key: 'students', method: 'createStudent'}}
        componentData={allStudents}
        originalData={allData}
        account={account}
        selectID={selectID}
        setSelectID={setSelectID}
        controls={controls}
        setControls={setControls}
        setModal={setModal}
        setModalData={setModalData}
        deleteRow={deleteStudent}
        message={message}
        sortOrder={sortOrder}
        resetCheckboxes={resetCheckboxes}
      >
      </AdminTable>
      }
      {modal == 'create_student' &&
      <AdminModals
        title={'Create Student'}
        type={'create_student'}
        data={allData}
        submitStudent={createStudent}
        resetUI={resetUI}
        setModal={setModal}
        setMessage={setMessage}
        message={message}
        loading={loading}
        setLoading={setLoading}
        setElementText={setElementText}
        preventEvent={preventEvent}
        resetStudent={resetStudent}
      >
      </AdminModals>
      }
      {modal == 'update_student' &&
      <AdminModals
        type={'create_student'}
        functionType={'update_student'}
        title={'Update Faculty Member'}
        data={allData}
        updateStudent={updateStudent}
        resetUI={resetUI}
        setModal={setModal}
        setMessage={setMessage}
        message={message}
        loading={loading}
        setLoading={setLoading}
        setElementText={setElementText}
        preventEvent={preventEvent}
        resetStudent={resetStudent}
      >
      </AdminModals>
      }
    </>
  )
}

const mapStateToProps = state => {
  return {
    student: state.student
  }
}

const mapDispatchToProps = dispatch => {
  return {
    resetStudent: () => dispatch({type: 'RESET_STUDENT'})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Students)
