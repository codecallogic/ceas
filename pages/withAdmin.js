import axios from 'axios'
import {API} from '../config'
import {getToken, getUser} from '../helpers/auth'

const withAdmin = Page => {
  const WithAdminUser = props => <Page {...props} />
  
  WithAdminUser.getInitialProps = async context => {
    
    const token = getToken('accessTokenAdmin', context.req)
    
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
      console.log(err)
      account = null
      serverMessage = err.response ? err.response.data : 'Error ocurred, getting account data.'
    }  
    
    if(account !== null && context.req.url === '/admin/login'){
        context.res.writeHead(301, {
          Location: '/admin'
        });
        context.res.end();
    }else if(account === null && context.req.url !== '/admin/login'){
      context.res.writeHead(301, {
        Location: '/admin/login'
      });
      context.res.end();
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
