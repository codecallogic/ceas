import withAdmin from '../withAdmin'
import {useState, useEffect} from 'react'
import SVG from '../../files/svg'

// COMPONENTS
import Account from '../../components/admin/account'

const AdminDashboard = ({account, accessToken, params, serverMessage}) => {

  const [modal, setModal] = useState('')
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState('')
  const [component, setComponent] = useState('')

  useEffect(() => {
    if(window.localStorage.getItem('component')) setComponent(window.localStorage.getItem('component'))
    if(window.localStorage.getItem('modal')) setModal(window.localStorage.getItem('modal'))
  }, [])

  const resetUILocalStorange = () => {
    window.localStorage.removeItem('component')
    window.localStorage.removeItem('modal')
  }

  return (
    <div className="account">
      <div className="account-breadcrumbs">
        <div className="account-breadcrumbs-item">
          <span className="account-breadcrumbs-item-title" onClick={() => ( resetUILocalStorange(), setComponent(''), setModal(''))}>Dashboard</span>
          { component == 'account' &&
            <span className="account-breadcrumbs-item-subtitle">
              <SVG svg={'keyboard-right'}></SVG> Account
            </span>
          }
        </div>
      </div>
      { component == '' &&
        <div className="account-dashboard">
        <div className="account-dashboard-item" onClick={() => setComponent('account')}>
            <SVG svg={'user'}></SVG>
            <span>Account</span>
          </div>
        </div>
      }
      { component == 'account' &&
        <Account
          account={account}
          accessToken={accessToken}
          resetUI={resetUILocalStorange}
          modal={modal} 
          setModal={setModal}
          message={message}
          setMessage={setMessage}
          loading={loading}
          setLoading={setLoading}
        ></Account>
      }
    </div>
  )
}

export default withAdmin(AdminDashboard)
