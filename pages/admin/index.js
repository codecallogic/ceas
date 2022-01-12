import withAdmin from '../withAdmin'
import {useState, useEffect} from 'react'
import SVG from '../../files/svg'
import {tableData} from '../../helpers/tables'
import {populateModal} from '../../helpers/modals'
import { getToken } from '../../helpers/auth'
import _ from 'lodash'
import {connect} from 'react-redux'
import {useRouter} from 'next/router'

// COMPONENTS
import Account from '../../components/admin/account'
import Users from '../../components/admin/users'
import Components from '../../components/admin/components'

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
  componentData
}) => {
  
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
    if(modal == 'update_admin'){for(let key in componentData){setElementText(key, admin[key])}}
    if(modal == 'update_component'){for(let key in componentData){setElementText(key, componentData[key])}}
  }, [modal])

  const resetUILocalStorage = () => {
    window.localStorage.removeItem('component')
    window.localStorage.removeItem('modal')
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
            <span className="account-breadcrumbs-item-subtitle">
              <SVG svg={'keyboard-right'}></SVG> Users
            </span>
          }
          { component == 'components' &&
            <span className="account-breadcrumbs-item-subtitle">
              <SVG svg={'keyboard-right'}></SVG> Components
            </span>
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
          // onClick={() => (setComponent('components'), setView(''))}
          >
            <SVG svg={'staff'}></SVG>
            <span>Faculty</span>
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
          preventEvent={preventEvent}
          setElementText={setElementText}
          setModalData={setModalData}
        ></Components>
      }
      { component == 'admin_users' &&
        <Users
          data={data.adminUsers}
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
        ></Users>
      }
    </div>
  )
}

const mapStateToProps = state => {
  return {
    admin: state.admin,
    componentData: state.component
  }
}

const mapDispatchToProps = dispatch => {
  return {
    createAdmin: (name, value) => dispatch({type: 'CREATE_ADMIN', name: name, value: value}),
    createComponent: (name, value) => dispatch({type: 'CREATE_COMPONENT', name: name, value: value}),
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
  deepClone= _.cloneDeep(data)

  return {
    data: Object.keys(data).length > 0 ? data : null,
    originalData: Object.keys(deepClone).length > 0 ? deepClone : null
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withAdmin(AdminDashboard))
