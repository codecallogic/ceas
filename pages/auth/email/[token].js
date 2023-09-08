import axios from 'axios'
import {API} from '../../../config'
import Navigation from '../../../components/client/navigation'
import Footer from '../../../components/client/footer'

const UpdateEmail = ({
  message,
  navMenus,
  openSearch,

  //// METHODS
  setOpenSearch
}) => {
  
  return (
    <>
    <Navigation
      navMenus={navMenus} 
      openSearch={openSearch}
      setOpenSearch={setOpenSearch}
    ></Navigation>
    <div className="message">
      <div className="message-container">
        <h1 className="message-title">{!message ? 'Your e-mail is updated!' : 'Your request has expired'}</h1>
        { !message &&
          <span className="message-subtitle">Log in with new email. <a href="/admin/login">Login</a></span>
        }
        { message &&
          <span className="message-subtitle">{message}</span>
        }
      </div>
    </div>
    <Footer></Footer>
    </>
  )
}

UpdateEmail.getInitialProps = async ({res, query}) => {
  let message = ''
  
  try {

    const responseUpdate = await axios.post(`${API}/auth/update-email`, {token: query.token})

  } catch (err) {
    console.log(err)

    if(err) err.response ? (message = err.response.data) : (message = 'Error ocurred updating your email, please try again later.')
    
  }
  
  return {
    message: message
  }
}

export default UpdateEmail
