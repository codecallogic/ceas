import withAdmin from '../withAdmin'
import { useState, useEffect } from 'react'
import SVG from '../../files/svg'
import { tableData } from '../../helpers/tables'
import { populateModal } from '../../helpers/modals'
import { getToken } from '../../helpers/auth'
import _ from 'lodash'
import { connect } from 'react-redux'
import axios from 'axios'
import { API } from '../../config'
axios.defaults.withCredentials = true

// TODO: When deleting a component remove from faculty members and vice versa

// COMPONENTS
import Account from '../../components/admin/account'
import Users from '../../components/admin/users'
import Components from '../../components/admin/components'
import Faculty from '../../components/admin/faculty'
import Students from '../../components/admin/students'
import Staff from '../../components/admin/staff'
import Publications from '../../components/admin/publications'
import News from '../../components/admin/news'
import Slides from '../../components/admin/slides'
import Labs from '../../components/admin/labs'
import Equipment from '../../components/admin/equipment'
import Forms from '../../components/admin/forms'
import NavMenus from '../../components/admin/navMenus'
import NavItems from '../../components/admin/navItems'
import Sections from '../../components/admin/pageSections'

// CRUD
import { submitCreate, submitUpdate, submitDeleteRow } from '../../helpers/forms'

// VALIDATIONS
import { validateIsEmail} from '../../helpers/validations'

// TABLES
import { 
  adminUsersSort, 
  componentSort, 
  facultySort, 
  studentSort, 
  staffSort, 
  publicationSort, 
  newsSort, 
  slideSort, 
  labSort, 
  equipmentSort, 
  formSort,
  navItemSort,
  navMenuSort,
  sectionSort
} from '../../helpers/sorting'

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
  staff,
  publication,
  news,
  slide,
  lab,
  equipment,
  form,
  navItem,
  navMenu,
  pageSection
  
}) => {
  console.log(account)
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState('')
  const [modal, setModal] = useState('')
  const [component, setComponent] = useState('')
  const [view, setView] = useState('')
  const [selectID, setSelectID] = useState('')
  const [controls, setControls] = useState(false)
  const [edit, setEdit] = useState('')
  const [allData, setAllData] = useState(originalData ? originalData : [])
  
  useEffect(() => {
    if(!account) window.location.href = '/admin/login'
    if(window.localStorage.getItem('component')) setComponent(window.localStorage.getItem('component'))
    if(window.localStorage.getItem('modal')) setModal(window.localStorage.getItem('modal'))
    if(window.localStorage.getItem('view')) setView(window.localStorage.getItem('view'))
    if(window.localStorage.getItem('message')) setMessage(window.localStorage.getItem('message'))

  }, [])

  useEffect(() => { setMessage(''), setEdit('')}, [view])

  const resetUILocalStorage = () => {
    window.localStorage.removeItem('component')
    window.localStorage.removeItem('modal')
    window.localStorage.removeItem('view')
    window.localStorage.removeItem('message')
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

  const logout = async () => {
    try {
      
      const response = await axios.post(`${API}/auth/logout`)
      window.location.href = '/admin/login'
      console.log(response)
    } catch (error) {
      console.log(error)
      if(error)  error.response ? error.response.statusText == 'Unauthorized' ? (window.location.href = 'admin/login') : (console.log(error.response)) : (console.log(error.response))
    }
  }

  return (
    <>
    <div className="account">
      <div className="account-user"><SVG svg={'user_2'} color={'#e63946'}></SVG> Welcome, {account ? account.username : null} <span onClick={() => logout()}>Logout</span></div>
      <div className="account-breadcrumbs">
        <div className="account-breadcrumbs-item">
          <h1 className="account-breadcrumbs-item-title" onClick={() => ( resetUILocalStorage(), setComponent(''), setModal(''), setView(''))}>Dashboard</h1>
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
          { component == 'publications' &&
            <>
            <span className="account-breadcrumbs-item-subtitle" onClick={() => (setComponent('publications'), setView(''))}>
              <SVG svg={'keyboard-right'}></SVG> Publications
            </span>
            {view == 'all_publications' && 
            <span className="account-breadcrumbs-item-subtitle">
              <SVG svg={'keyboard-right'}></SVG> View All
            </span>
            }
            </>
          }
          { component == 'news' &&
            <>
            <span className="account-breadcrumbs-item-subtitle" onClick={() => (setComponent('news'), setView(''))}>
              <SVG svg={'keyboard-right'}></SVG> News
            </span>
            {view == 'all_news' && 
            <span className="account-breadcrumbs-item-subtitle">
              <SVG svg={'keyboard-right'}></SVG> View All
            </span>
            }
            </>
          }
          { component == 'slides' &&
            <>
            <span className="account-breadcrumbs-item-subtitle" onClick={() => (setComponent('slides'), setView(''))}>
              <SVG svg={'keyboard-right'}></SVG> Slides
            </span>
            {view == 'all_slides' && 
            <span className="account-breadcrumbs-item-subtitle">
              <SVG svg={'keyboard-right'}></SVG> View All
            </span>
            }
            </>
          }
          { component == 'labs' &&
            <>
            <span className="account-breadcrumbs-item-subtitle" onClick={() => (setComponent('labs'), setView(''))}>
              <SVG svg={'keyboard-right'}></SVG> Labs
            </span>
            {view == 'all_labs' && 
            <span className="account-breadcrumbs-item-subtitle">
              <SVG svg={'keyboard-right'}></SVG> View All
            </span>
            }
            </>
          }
          { component == 'equipment' &&
            <>
            <span className="account-breadcrumbs-item-subtitle" onClick={() => (setComponent('equipment'), setView(''))}>
              <SVG svg={'keyboard-right'}></SVG> Equipment
            </span>
            {view == 'all_equipment' && 
            <span className="account-breadcrumbs-item-subtitle">
              <SVG svg={'keyboard-right'}></SVG> View All
            </span>
            }
            </>
          }
          { component == 'forms' &&
            <>
            <span className="account-breadcrumbs-item-subtitle" onClick={() => (setComponent('forms'), setView(''))}>
              <SVG svg={'keyboard-right'}></SVG> Forms
            </span>
            {view == 'all_forms' && 
            <span className="account-breadcrumbs-item-subtitle">
              <SVG svg={'keyboard-right'}></SVG> View All
            </span>
            }
            </>
          }
          { component == 'nav' &&
            <>
            <span className="account-breadcrumbs-item-subtitle" onClick={() => (setComponent('nav'), setView(''))}>
              <SVG svg={'keyboard-right'}></SVG> Menu
            </span>
            {view == 'all_nav_menus' && 
            <span className="account-breadcrumbs-item-subtitle">
              <SVG svg={'keyboard-right'}></SVG> View All Menus
            </span>
            }
            </>
          }
          { component == 'navItems' &&
            <>
            <span className="account-breadcrumbs-item-subtitle" onClick={() => (setComponent('navItems'), setView(''))}>
              <SVG svg={'keyboard-right'}></SVG> Nav Items
            </span>
            {view == 'all_nav_items' && 
            <span className="account-breadcrumbs-item-subtitle">
              <SVG svg={'keyboard-right'}></SVG> View All Nav Items
            </span>
            }
            </>
          }
          { component == 'sections' &&
            <>
            <span className="account-breadcrumbs-item-subtitle" onClick={() => (setComponent('sections'), setView(''))}>
              <SVG svg={'keyboard-right'}></SVG> Sections
            </span>
            {view == 'all_sections' && 
            <span className="account-breadcrumbs-item-subtitle">
              <SVG svg={'keyboard-right'}></SVG> View All Sections
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
          onClick={() => (setComponent('equipment'), setView(''))}
          >
            <SVG svg={'equipment'}></SVG>
            <span>Equipment</span>
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
          onClick={() => (setComponent('forms'), setView(''))}
          >
            <SVG svg={'forms'}></SVG>
            <span>Forms</span>
          </div>
          <div 
          className="account-dashboard-item" 
          onClick={() => (setComponent('labs'), setView(''))}
          >
            <SVG svg={'lab'}></SVG>
            <span>Labs</span>
          </div>
          <div 
          className="account-dashboard-item" 
          onClick={() => (setComponent('nav'), setView(''))}
          >
            <SVG svg={'nav'}></SVG>
            <span>Nav</span>
          </div>
          <div 
          className="account-dashboard-item" 
          onClick={() => (setComponent('navItems'), setView(''))}
          >
            <SVG svg={'nav-items'}></SVG>
            <span>Nav Items</span>
          </div>
          <div 
          className="account-dashboard-item" 
          onClick={() => (setComponent('news'), setView(''))}
          >
            <SVG svg={'news'}></SVG>
            <span>News</span>
          </div>
          <div 
          className="account-dashboard-item" 
          onClick={() => (setComponent('publications'), setView(''))}
          >
            <SVG svg={'publication'}></SVG>
            <span>Publications</span>
          </div>
          <div 
          className="account-dashboard-item" 
          onClick={() => (setComponent('sections'), setView(''))}
          >
            <SVG svg={'page'}></SVG>
            <span>Sections</span>
          </div>
          <div 
          className="account-dashboard-item" 
          onClick={() => (setComponent('slides'), setView(''))}
          >
            <SVG svg={'slides'}></SVG>
            <span>Slides</span>
          </div>
          <div 
          className="account-dashboard-item" 
          onClick={() => (setComponent('staff'), setView(''))}
          >
            <SVG svg={'staff'}></SVG>
            <span>Staff</span>
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
          edit={edit}
          setEdit={setEdit}
          editType={'update_staff'}
          submitDeleteRow={submitDeleteRow}
        ></Staff>
      }
      { component == 'publications' &&
        <Publications
          data={data.publications}
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
          typeOfData={'publications'}
          stateData={publication}
          stateMethod={createType}
          resetMethod={resetType}
          sortOrder={publicationSort}
          submitCreate={submitCreate}
          submitUpdate={submitUpdate}
          edit={edit}
          setEdit={setEdit}
          editType={'update_publication'}
          submitDeleteRow={submitDeleteRow}
        ></Publications>
      }
      { component == 'news' &&
        <News
          data={data.news}
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
          typeOfData={'news'}
          stateData={news}
          stateMethod={createType}
          resetMethod={resetType}
          sortOrder={newsSort}
          submitCreate={submitCreate}
          submitUpdate={submitUpdate}
          edit={edit}
          setEdit={setEdit}
          editType={'update_news'}
          submitDeleteRow={submitDeleteRow}
        ></News>
      }
      { component == 'slides' &&
        <Slides
          data={data.slides}
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
          typeOfData={'slides'}
          stateData={slide}
          stateMethod={createType}
          resetMethod={resetType}
          sortOrder={slideSort}
          submitCreate={submitCreate}
          submitUpdate={submitUpdate}
          edit={edit}
          setEdit={setEdit}
          editType={'update_slide'}
          submitDeleteRow={submitDeleteRow}
        ></Slides>
      }
      { component == 'labs' &&
        <Labs
          data={data.labs}
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
          typeOfData={'labs'}
          stateData={lab}
          stateMethod={createType}
          resetMethod={resetType}
          sortOrder={labSort}
          submitCreate={submitCreate}
          submitUpdate={submitUpdate}
          edit={edit}
          setEdit={setEdit}
          editType={'update_lab'}
          submitDeleteRow={submitDeleteRow}
        ></Labs>
      }
      { component == 'equipment' &&
        <Equipment
          data={data.equipment}
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
          typeOfData={'equipment'}
          stateData={equipment}
          stateMethod={createType}
          resetMethod={resetType}
          sortOrder={equipmentSort}
          submitCreate={submitCreate}
          submitUpdate={submitUpdate}
          edit={edit}
          setEdit={setEdit}
          editType={'update_equipment'}
          submitDeleteRow={submitDeleteRow}
        ></Equipment>
      }
      { component == 'forms' &&
        <Forms
          data={data.forms}
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
          typeOfData={'forms'}
          stateData={form}
          stateMethod={createType}
          resetMethod={resetType}
          sortOrder={formSort}
          submitCreate={submitCreate}
          submitUpdate={submitUpdate}
          edit={edit}
          setEdit={setEdit}
          editType={'update_form'}
          submitDeleteRow={submitDeleteRow}
        ></Forms>
      }
      { component == 'nav' &&
        <NavMenus
          data={data.navMenus}
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
          typeOfData={'navMenus'}
          stateData={navMenu}
          stateMethod={createType}
          resetMethod={resetType}
          sortOrder={navMenuSort}
          submitCreate={submitCreate}
          submitUpdate={submitUpdate}
          edit={edit}
          setEdit={setEdit}
          editType={'update_nav_menu'}
          submitDeleteRow={submitDeleteRow}
        ></NavMenus>
      }
      { component == 'navItems' &&
        <NavItems
          data={data.navItems}
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
          typeOfData={'navItems'}
          stateData={navItem}
          stateMethod={createType}
          resetMethod={resetType}
          sortOrder={navItemSort}
          submitCreate={submitCreate}
          submitUpdate={submitUpdate}
          edit={edit}
          setEdit={setEdit}
          editType={'update_nav_item'}
          submitDeleteRow={submitDeleteRow}
        ></NavItems>
      }
      { component == 'sections' &&
        <Sections
          data={data.sections}
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
          typeOfData={'sections'}
          stateData={pageSection}
          stateMethod={createType}
          resetMethod={resetType}
          sortOrder={sectionSort}
          submitCreate={submitCreate}
          submitUpdate={submitUpdate}
          edit={edit}
          setEdit={setEdit}
          editType={'update_section'}
          submitDeleteRow={submitDeleteRow}
        ></Sections>
      }
    </div>
    </>
  )
}

const mapStateToProps = state => {
  return {
    admin: state.admin,
    componentData: state.component,
    faculty: state.faculty,
    student: state.student,
    staff: state.staff,
    publication: state.publication,
    news: state.news,
    slide: state.slide,
    lab: state.lab,
    equipment: state.equipment,
    form: state.form,
    navItem: state.navItem,
    navMenu: state.navMenu,
    pageSection: state.pageSection
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

  data.adminUsers               = await tableData(accessToken, 'auth/all-admin')
  data.components               = await tableData(accessToken, 'component/all-components')
  data.faculty                  = await tableData(accessToken, 'faculty/get-all-faculty')
  data.students                 = await tableData(accessToken, 'student/get-all-students')
  data.staff                    = await tableData(accessToken, 'staff/all-staff')
  data.publications             = await tableData(accessToken, 'publication/all-publications')
  data.news                     = await tableData(accessToken, 'news/all-news')
  data.slides                   = await tableData(accessToken, 'slide/all-slides')
  data.labs                     = await tableData(accessToken, 'lab/all-labs')
  data.equipment                = await tableData(accessToken, 'equipment/all-equipment')
  data.forms                    = await tableData(accessToken, 'form/all-forms')
  data.navMenus                 = await tableData(accessToken, 'navigation/all-nav-menus')
  data.navItems                 = await tableData(accessToken, 'navigation/all-nav-items')
  data.sections                 = await tableData(accessToken, 'section/all-sections')
  deepClone= _.cloneDeep(data)

  return {
    data: Object.keys(data).length > 0 ? data : null,
    originalData: Object.keys(deepClone).length > 0 ? deepClone : null
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withAdmin(AdminDashboard))

