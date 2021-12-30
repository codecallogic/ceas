import axios from 'axios'
import {API} from '../../../config'
import { useRouter } from 'next/router'
import {useState} from 'react'
import SVG from '../../../files/svg'
axios.defaults.withCredentials = true

const ActivateAdmin = ({}) => {
  const router = useRouter()
  const [error, setError] = useState('')

  const activateAdmin = async () => {
    let query = router.query
    setError('')
    
    try {
      const responseActivate = await axios.post(`${API}/auth/activate-admin`, {token: query.token})
      window.location.href = '/admin'
    } catch (error) {
      console.log(error)
      if(error) error.response ? setError(error.response.data) : setError('Error ocurred activating account, please try again later or contact support')
    }
  }
  
  return (
    <div className="activate-admin">
      <div className="activate-admin-svg">
        <SVG svg={'admins'} color={'#e63946'}></SVG>
      </div>
      <div className="activate-admin-title">
        <span>Activating your acount gives you access to our admin dashboard.</span>
      </div>
      {error && <div className="activate-admin-error">{error}</div>}
      <div className="activate-admin-button" onClick={activateAdmin}>
        <SVG svg={'arrow-up'} color={'#e63946'}></SVG>
        <span>Activate</span>
      </div>
    </div>
  )
}

export default ActivateAdmin
