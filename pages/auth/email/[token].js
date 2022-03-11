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
        <div className="message-title">{!message ? 'Your e-mail is updated!' : 'Your request has expired'}</div>
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
    const responseUpdate = await axios.post(`${API}/auth/update-admin-email`, {token: query.token})
    res.setHeader("Set-Cookie", 'userAdmin=deleted; path=/; Max-Age=0');
    res.setHeader("Set-Cookie", 'accessTokenAdmin=deleted; path=/; Max-Age=0');

    // res.writeHead(302, {
    //   Location: '/admin/login'
    // });
    // res.end();

  } catch (err) {
    console.log(err)
    if(err) err.response ? (message = err.response.data) : (message = 'Error ocurred updating your email, please try again later.')
  }
  
  return {
    message: message
  }
}

export default UpdateEmail
