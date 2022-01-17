import withAdmin from '../withAdmin'
import {useState, useEffect} from 'react'
import SVG from '../../files/svg'
import {tableData} from '../../helpers/tables'
import {populateModal, manageFormSubmission} from '../../helpers/modals'
import { getToken } from '../../helpers/auth'
import _ from 'lodash'
import {connect} from 'react-redux'
import {useRouter} from 'next/router'


// TODO: When deleting a component remove from faculty members and vice versa

// COMPONENTS
import Account from '../../components/admin/account'
import Users from '../../components/admin/users'
import Components from '../../components/admin/components'
import Faculty from '../../components/admin/faculty'
import Students from '../../components/admin/students'

const AdminDashboard = ({
  data, 
  originalData, 
  account, 
  accessToken, 
  params, 
  serverMessage,

  //// REDUCERS
  createAdmin,
  admin,
  createComponent,
  componentData,
  faculty,
  createFaculty,
  student,
  createStudent
}) => {
  // console.log(originalData)
  const router = useRouter()
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState('')
  const [modal, setModal] = useState('')
  const [component, setComponent] = useState('')
  const [view, setView] = useState('')
  const [selectID, setSelectID] = useState('')
  const [controls, setControls] = useState(false)
  const [allData, setAllData] = useState(originalData ? originalData : [])

  useEffect(() => {
    if(window.localStorage.getItem('component')) setComponent(window.localStorage.getItem('component'))
    if(window.localStorage.getItem('modal')) setModal(window.localStorage.getItem('modal'))
  }, [])

  useEffect(() => {

    if(modal == 'update_admin'){manageFormSubmission('update_admin', admin, null, setElementText)}

    if(modal == 'update_component'){
      manageFormSubmission('update_component', componentData, allData, setElementText, selectID, createComponent)
    }
    
    if(modal == 'update_faculty'){
      manageFormSubmission('update_faculty', faculty, allData, setElementText, selectID, createFaculty)
    }
    
    if(modal == 'update_student'){
      manageFormSubmission('update_student', student, allData, setElementText, selectID, createStudent)
    }

  }, [modal])

  const resetUILocalStorage = () => {
    window.localStorage.removeItem('component')
    window.localStorage.removeItem('modal')
  }

  const resetCheckboxes = () => {
    const els = document.querySelectorAll('.table-rows-checkbox-input')
    els.forEach( (el) => { el.checked = false })
  }


  const preventEvent = (id) => {
    if(document.getElementById(id).innerHTML.includes('<div><br></div>')){
      document.getElementById(id).removeChild(document.getElementById(id).childNodes[1])
    }else{
      document.getElementById(id).addEventListener('keydown', (evt) => {
        if (evt.keyCode === 13) {evt.preventDefault()}
      })
    }
  }

  const setElementText = (id, text) => {
    if(document.getElementById(id)) document.getElementById(id).innerText = text
  }

  const validateIsEmail = (type) => {
    const input = document.getElementById(String(type))
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/g
    return regex.test(input.innerHTML)
  }

  const setModalData = (dataType, reducerMethod) => {
    let objectMethods = new Object()
    objectMethods.createAdmin = createAdmin
    objectMethods.createComponent = createComponent
    objectMethods.createFaculty = createFaculty
    objectMethods.createStudent = createStudent
    populateModal(originalData, dataType, reducerMethod, objectMethods, selectID, setElementText)
  }

  return (
    <div className="account">
      <div className="account-user"><SVG svg={'user_2'} color={'#e63946'}></SVG> Welcome, {account ? account.username : null}</div>
      <div className="account-breadcrumbs">
        <div className="account-breadcrumbs-item">
          <span className="account-breadcrumbs-item-title" onClick={() => ( resetUILocalStorage(), setComponent(''), setModal(''), setView(''))}>Dashboard</span>
          { component == 'account' &&
            <span className="account-breadcrumbs-item-subtitle">
              <SVG svg={'keyboard-right'}></SVG> Account
            </span>
          }
          { component == 'admin_users' &&
            <>
            <span className="account-breadcrumbs-item-subtitle" onClick={() => (setComponent('admin_users'), setView(''))}>
              <SVG svg={'keyboard-right'}></SVG> Users
            </span>
            {view == 'all_admin' && 
            <span className="account-breadcrumbs-item-subtitle">
              <SVG svg={'keyboard-right'}></SVG> View All
            </span>
            }
            </>
          }
          { component == 'components' &&
            <>
           
            <span className="account-breadcrumbs-item-subtitle" onClick={() => (setComponent('components'), setView(''))}>
              <SVG svg={'keyboard-right'}></SVG> Components
            </span>
            {view == 'all_components' && 
            <span className="account-breadcrumbs-item-subtitle">
              <SVG svg={'keyboard-right'}></SVG> View All
            </span>
            }
            </>
          }
          { component == 'faculty' &&
            <>
            <span className="account-breadcrumbs-item-subtitle" onClick={() => (setComponent('faculty'), setView(''))}>
              <SVG svg={'keyboard-right'}></SVG> Faculty
            </span>
            {view == 'all_faculty' && 
            <span className="account-breadcrumbs-item-subtitle">
              <SVG svg={'keyboard-right'}></SVG> View All
            </span>
            }
            </>
          }
          { component == 'students' &&
            <>
            <span className="account-breadcrumbs-item-subtitle" onClick={() => (setComponent('students'), setView(''))}>
              <SVG svg={'keyboard-right'}></SVG> Students
            </span>
            {view == 'all_students' && 
            <span className="account-breadcrumbs-item-subtitle">
              <SVG svg={'keyboard-right'}></SVG> View All
            </span>
            }
            </>
          }
        </div>
      </div>
      { component == '' &&
        <div className="account-dashboard">
          <div 
          className="account-dashboard-item" 
          onClick={() => setComponent('account')}
          >
            <SVG svg={'user'}></SVG>
            <span>Account</span>
          </div>
          <div 
          className="account-dashboard-item" 
          onClick={() => (setComponent('admin_users'), setView(''))}
          >
            <SVG svg={'members'}></SVG>
            <span>Admin Users</span>
          </div>
          <div 
          className="account-dashboard-item" 
          onClick={() => (setComponent('components'), setView(''))}
          >
            <SVG svg={'component'}></SVG>
            <span>Components</span>
          </div>
          <div 
          className="account-dashboard-item" 
          onClick={() => (setComponent('faculty'), setView(''))}
          >
            <SVG svg={'staff'}></SVG>
            <span>Faculty</span>
          </div>
          <div 
          className="account-dashboard-item" 
          onClick={() => (setComponent('students'), setView(''))}
          >
            <SVG svg={'staff'}></SVG>
            <span>Students</span>
          </div>
        </div>
      }
      { component == 'account' &&
        <Account
          account={account}
          accessToken={accessToken}
          allData={allData}
          setAllData={setAllData}
          resetUI={resetUILocalStorage}
          modal={modal} 
          setModal={setModal}
          message={message}
          setMessage={setMessage}
          loading={loading}
          setLoading={setLoading}
          preventEvent={preventEvent}
          validateIsEmail={validateIsEmail}
        ></Account>
      }
      { component == 'admin_users' &&
        <Users
          data={allData.adminUsers}
          allData={allData}
          setAllData={setAllData}
          account={account}
          accessToken={accessToken}
          resetUI={resetUILocalStorage}
          modal={modal} 
          setModal={setModal}
          view={view}
          setView={setView}
          message={message}
          setMessage={setMessage}
          loading={loading}
          setLoading={setLoading}
          preventEvent={preventEvent}
          selectID={selectID}
          setSelectID={setSelectID}
          controls={controls}
          setControls={setControls}
          validateIsEmail={validateIsEmail}
          setElementText={setElementText}
          setModalData={setModalData}
          resetCheckboxes={resetCheckboxes}
        ></Users>
      }
      { component == 'components' &&
        <Components
          data={allData.components}
          allData={allData}
          setAllData={setAllData}
          account={account}
          accessToken={accessToken}
          resetUI={resetUILocalStorage}
          modal={modal} 
          setModal={setModal}
          view={view}
          setView={setView}
          message={message}
          setMessage={setMessage}
          loading={loading}
          setLoading={setLoading}
          selectID={selectID}
          setSelectID={setSelectID}
          controls={controls}
          setControls={setControls}
          preventEvent={preventEvent}
          setElementText={setElementText}
          setModalData={setModalData}
          resetCheckboxes={resetCheckboxes}
        ></Components>
      }
      { component == 'faculty' &&
        <Faculty
          data={allData.faculty}
          allData={allData}
          setAllData={setAllData}
          account={account}
          accessToken={accessToken}
          resetUI={resetUILocalStorage}
          modal={modal} 
          setModal={setModal}
          view={view}
          setView={setView}
          message={message}
          setMessage={setMessage}
          loading={loading}
          setLoading={setLoading}
          selectID={selectID}
          setSelectID={setSelectID}
          controls={controls}
          setControls={setControls}
          preventEvent={preventEvent}
          setElementText={setElementText}
          setModalData={setModalData}
          validateIsEmail={validateIsEmail}
          resetCheckboxes={resetCheckboxes}
        ></Faculty>
      }
      { component == 'students' &&
        <Students
          data={allData.students}
          allData={allData}
          setAllData={setAllData}
          account={account}
          accessToken={accessToken}
          resetUI={resetUILocalStorage}
          modal={modal} 
          setModal={setModal}
          view={view}
          setView={setView}
          message={message}
          setMessage={setMessage}
          loading={loading}
          setLoading={setLoading}
          selectID={selectID}
          setSelectID={setSelectID}
          controls={controls}
          setControls={setControls}
          preventEvent={preventEvent}
          setElementText={setElementText}
          setModalData={setModalData}
          validateIsEmail={validateIsEmail}
          resetCheckboxes={resetCheckboxes}
        ></Students>
      }
    </div>
  )
}

const mapStateToProps = state => {
  return {
    admin: state.admin,
    componentData: state.component,
    faculty: state.faculty,
    student: state.student
  }
}

const mapDispatchToProps = dispatch => {
  return {
    createAdmin: (name, value) => dispatch({type: 'CREATE_ADMIN', name: name, value: value}),
    createComponent: (name, value) => dispatch({type: 'CREATE_COMPONENT', name: name, value: value}),
    createFaculty: (name, value) => dispatch({type: 'CREATE_FACULTY', name: name, value: value}),
    createStudent: (name, value) => dispatch({type: 'CREATE_STUDENT', name: name, value: value}),
  }
}

AdminDashboard.getInitialProps = async (context) => {

  let data = new Object()
  let deepClone
   
  const token = getToken('accessTokenAdmin', context.req)
  let accessToken = null
  if(token){accessToken = token.split('=')[1]}

  data.adminUsers = await tableData(accessToken, 'admin_users')
  data.components = await tableData(accessToken, 'components')
  data.faculty = await tableData(accessToken, 'faculty')
  data.students = await tableData(accessToken, 'students')
  deepClone= _.cloneDeep(data)
  
  return {
    data: Object.keys(data).length > 0 ? data : null,
    originalData: Object.keys(deepClone).length > 0 ? deepClone : null
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withAdmin(AdminDashboard))
