import withAdmin from '../withAdmin'
import { useState, useEffect } from 'react'
import SVG from '../../files/svg'
import {tableData} from '../../helpers/tables'
import { populateModal } from '../../helpers/modals'
import { getToken } from '../../helpers/auth'
import _ from 'lodash'
import { connect } from 'react-redux'


// TODO: When deleting a component remove from faculty members and vice versa

// COMPONENTS
import Account from '../../components/admin/account'
import Users from '../../components/admin/users'
import Components from '../../components/admin/components'
import Faculty from '../../components/admin/faculty'
import Students from '../../components/admin/students'
import Staff from '../../components/admin/staff'

// CRUD
import { submitCreate, submitUpdate, submitDeleteRow } from '../../helpers/forms'

// VALIDATIONS
import { validateIsEmail} from '../../helpers/validations'

// TABLES
import { adminUsersSort, componentSort, facultySort, studentSort, staffSort } from '../../helpers/sorting'

const AdminDashboard = ({
  data, 
  originalData, 
  account, 
  accessToken, 
  params, 
  serverMessage,

  //// REDUCERS
  createType,
  resetType,
  admin,
  componentData,
  faculty,
  student,
  staff
  
}) => {
  
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState('')
  const [modal, setModal] = useState('')
  const [component, setComponent] = useState('')
  const [view, setView] = useState('')
  const [selectID, setSelectID] = useState('')
  const [controls, setControls] = useState(false)
  const [edit, setEdit] = useState('')
  const [allData, setAllData] = useState(originalData ? originalData : [])

  console.log(allData)
  
  useEffect(() => {
    if(window.localStorage.getItem('component')) setComponent(window.localStorage.getItem('component'))
    if(window.localStorage.getItem('modal')) setModal(window.localStorage.getItem('modal'))
  }, [])

  useEffect(() => { setMessage(''), setEdit('')}, [view])

  const resetUILocalStorage = () => {
    window.localStorage.removeItem('component')
    window.localStorage.removeItem('modal')
  }

  const resetCheckboxes = () => {
    const els = document.querySelectorAll('.table-rows-checkbox-input')
    els.forEach( (el) => { el.checked = false })
  }

  const setModalData = (keyType, caseType, account) => {
    let stateMethods = new Object()
    stateMethods.createType = createType

    return populateModal(allData, keyType, caseType, stateMethods, selectID, account)
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
          { component == 'staff' &&
            <>
            <span className="account-breadcrumbs-item-subtitle" onClick={() => (setComponent('staff'), setView(''))}>
              <SVG svg={'keyboard-right'}></SVG> Staff
            </span>
            {view == 'all_staff' && 
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
          <div 
          className="account-dashboard-item" 
          onClick={() => (setComponent('staff'), setView(''))}
          >
            <SVG svg={'staff'}></SVG>
            <span>Staff</span>
          </div>
        </div>
      }
      { component == 'account' &&
        <Account
          account={account}
          accessToken={accessToken}
          typeOfData={'account'}
          stateData={admin}
          stateMethod={createType}
          resetMethod={resetType}
          allData={allData}
          setAllData={setAllData}
          resetUI={resetUILocalStorage}
          modal={modal} 
          setModal={setModal}
          message={message}
          setMessage={setMessage}
          loading={loading}
          setLoading={setLoading}
          validateIsEmail={validateIsEmail}
          submitUpdate={submitUpdate}
          editDataType={{caseType: 'CREATE_ADMIN'}}
          setModalData={setModalData}
        ></Account>
      }
      { component == 'admin_users' &&
        <Users
          account={account}
          data={data.adminUsers}
          allData={allData}
          setAllData={setAllData}
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
          validateIsEmail={validateIsEmail}
          resetCheckboxes={resetCheckboxes}
          typeOfData={'adminUsers'}
          stateData={admin}
          stateMethod={createType}
          resetMethod={resetType}
          sortOrder={adminUsersSort}
          submitCreate={submitCreate}
          submitUpdate={submitUpdate}
          setModalData={setModalData}
          edit={edit}
          setEdit={setEdit}
          editType={'update_admin'}
          submitDeleteRow={submitDeleteRow}
        ></Users>
      }
      { component == 'components' &&
        <Components
          data={data.components}
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
          setModalData={setModalData}
          resetCheckboxes={resetCheckboxes}
          typeOfData={'components'}
          stateData={componentData}
          stateMethod={createType}
          resetMethod={resetType}
          sortOrder={componentSort}
          submitCreate={submitCreate}
          submitUpdate={submitUpdate}
          setModalData={setModalData}
          edit={edit}
          setEdit={setEdit}
          editType={'update_component'}
          submitDeleteRow={submitDeleteRow}
        ></Components>
      }
      { component == 'faculty' &&
        <Faculty
          data={data.faculty}
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
          setModalData={setModalData}
          resetCheckboxes={resetCheckboxes}
          typeOfData={'faculty'}
          stateData={faculty}
          stateMethod={createType}
          resetMethod={resetType}
          sortOrder={facultySort}
          submitCreate={submitCreate}
          submitUpdate={submitUpdate}
          setModalData={setModalData}
          edit={edit}
          setEdit={setEdit}
          editType={'update_faculty'}
          submitDeleteRow={submitDeleteRow}
        ></Faculty>
      }
      { component == 'students' &&
        <Students
          data={data.students}
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
          setModalData={setModalData}
          resetCheckboxes={resetCheckboxes}
          typeOfData={'students'}
          stateData={student}
          stateMethod={createType}
          resetMethod={resetType}
          sortOrder={studentSort}
          submitCreate={submitCreate}
          submitUpdate={submitUpdate}
          setModalData={setModalData}
          edit={edit}
          setEdit={setEdit}
          editType={'update_student'}
          submitDeleteRow={submitDeleteRow}
        ></Students>
      }
      { component == 'staff' &&
        <Staff
          data={data.staff}
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
          setModalData={setModalData}
          resetCheckboxes={resetCheckboxes}
          typeOfData={'staff'}
          stateData={staff}
          stateMethod={createType}
          resetMethod={resetType}
          sortOrder={staffSort}
          submitCreate={submitCreate}
          submitUpdate={submitUpdate}
          setModalData={setModalData}
          edit={edit}
          setEdit={setEdit}
          editType={'update_staff'}
          submitDeleteRow={submitDeleteRow}
        ></Staff>
      }
    </div>
  )
}

const mapStateToProps = state => {
  return {
    admin: state.admin,
    componentData: state.component,
    faculty: state.faculty,
    student: state.student,
    staff: state.staff
  }
}

const mapDispatchToProps = dispatch => {
  return {
    createType: (caseType, type, value) => dispatch({type: caseType, name: type, value: value}),
    resetType: (caseType) => dispatch({type: caseType}),
  }
}

AdminDashboard.getInitialProps = async (context) => {

  let data = new Object()
  let deepClone
   
  const token = getToken('accessTokenAdmin', context.req)
  let accessToken = null
  if(token){accessToken = token.split('=')[1]}

  data.adminUsers         = await tableData(accessToken, 'auth/all-admin')
  data.components         = await tableData(accessToken, 'component/all-components')
  data.faculty            = await tableData(accessToken, 'faculty/get-all-faculty')
  data.students           = await tableData(accessToken, 'student/get-all-students')
  data.staff              = await tableData(accessToken, 'staff/all-staff')
  deepClone= _.cloneDeep(data)
  
  return {
    data: Object.keys(data).length > 0 ? data : null,
    originalData: Object.keys(deepClone).length > 0 ? deepClone : null
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withAdmin(AdminDashboard))
