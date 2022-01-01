import withAdmin from '../withAdmin'
import {useState, useEffect} from 'react'
import SVG from '../../files/svg'
import {tableData} from '../../helpers/tables'
import { getToken } from '../../helpers/auth'

// COMPONENTS
import Account from '../../components/admin/account'
import Users from '../../components/admin/users'

const AdminDashboard = ({data, account, accessToken, params, serverMessage}) => {
  const [modal, setModal] = useState('')
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState('')
  const [component, setComponent] = useState('users')

  useEffect(() => {
    if(window.localStorage.getItem('component')) setComponent(window.localStorage.getItem('component'))
    if(window.localStorage.getItem('modal')) setModal(window.localStorage.getItem('modal'))
  }, [])

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
    document.getElementById(id).innerText = text
  }

  const validateIsEmail = (type) => {
    const input = document.getElementById(String(type))
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/g
    return regex.test(input.innerHTML)
  }

  return (
    <div className="account">
      <div className="account-user"><SVG svg={'user_2'} color={'#e63946'}></SVG> Welcome, {account ? account.username : null}</div>
      <div className="account-breadcrumbs">
        <div className="account-breadcrumbs-item">
          <span className="account-breadcrumbs-item-title" onClick={() => ( resetUILocalStorage(), setComponent(''), setModal(''))}>Dashboard</span>
          { component == 'account' &&
            <span className="account-breadcrumbs-item-subtitle">
              <SVG svg={'keyboard-right'}></SVG> Account
            </span>
          }
          { component == 'users' &&
            <span className="account-breadcrumbs-item-subtitle">
              <SVG svg={'keyboard-right'}></SVG> Users
            </span>
          }
        </div>
      </div>
      { component == '' &&
        <div className="account-dashboard">
          <div 
          className="account-dashboard-item" 
          onClick={() => setComponent('account')}>
            <SVG svg={'user'}></SVG>
            <span>Account</span>
          </div>
          <div 
          className="account-dashboard-item" 
          onClick={() => setComponent('users')}>
            <SVG svg={'members'}></SVG>
            <span>Users</span>
          </div>
        </div>
      }
      { component == 'account' &&
        <Account
          account={account}
          accessToken={accessToken}
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
      { component == 'users' &&
        <Users
          data={data}
          account={account}
          accessToken={accessToken}
          resetUI={resetUILocalStorage}
          modal={modal} 
          setModal={setModal}
          message={message}
          setMessage={setMessage}
          loading={loading}
          setLoading={setLoading}
          preventEvent={preventEvent}
          validateIsEmail={validateIsEmail}
          setElementText={setElementText}
        ></Users>
      }
    </div>
  )
}

AdminDashboard.getInitialProps = async (context) => {

  let data = new Object()
   
  const token = getToken('accessTokenAdmin', context.req)
  let accessToken = null
  if(token){accessToken = token.split('=')[1]}

  data.adminUsers = await tableData(accessToken)

  return {
    data: Object.keys(data).length > 0 ? data : null
  }
}

export default withAdmin(AdminDashboard)
