import axios from 'axios'
import {API} from '../config'
import {getToken, getUser} from '../helpers/auth'

const withAdmin = Page => {

  const WithAdminUser = props => <Page {...props} />
  console.log(WithAdminUser())
  WithAdminUser.getInitialProps = async (ctx) => {
    
    const token = getToken('accessTokenAdmin', ctx.req)
    console.log('TOKEN', token)
    let account = null
    let accessToken = null
    let serverMessage = null
    
    if(token){accessToken = token.split('=')[1]}
    
    try {
      const responseRead = await axios.get(`${API}/auth/admin`, {
          headers: {
              Authorization: `Bearer ${accessToken}`,
              contentType: `application/json`
          },
          withCredentials: true
      })
      
      account = responseRead.data

    } catch(err){
      console.log('ERROR', err)
      account = null
      serverMessage = err.response ? err.response.data : 'Error ocurred, getting account data.'
    }

    if(!account){
      ctx.res.writeHead(302, {
        Location: '/admin/login'
      });
      ctx.res.end();
    }else{
      return {
        ...(Page.getInitialProps ? await Page.getInitialProps(context) : {}),
        account,
        accessToken,
        serverMessage
      }
    }
  }

  return WithAdminUser
}

export default withAdmin
