import axios from 'axios'
import {API} from '../../../config'
import { useRouter } from 'next/router'
import {useState} from 'react'
import SVG from '../../../files/svg'
import Navigation from '../../../components/client/navigation'
import Footer from '../../../components/client/footer'
axios.defaults.withCredentials = true

const ActivateAdmin = ({
  navMenus,
  openSearch,

  //// METHODS
  setOpenSearch
}) => {
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
    <>
    <Navigation></Navigation>
    <div className="activate-admin">
      <div className="activate-admin-svg">
        <SVG svg={'admins'} color={'#135098'}></SVG>
      </div>
      <h1 className="activate-admin-title">
        <span>Activating your acount gives you access to our admin dashboard.</span>
      </h1>
      {error && <div className="activate-admin-error">{error}</div>}
      <div className="activate-admin-button" onClick={activateAdmin}>
        <SVG svg={'arrow-up'} color={'#135098'}></SVG>
        <span>Activate</span>
      </div>
    </div>
    <Footer></Footer>
    </>
  )
}

export default ActivateAdmin
