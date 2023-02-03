import {API} from '../config'
import axios from 'axios'
import {getToken, getUser} from '../helpers/auth'
axios.defaults.withCredentials = true

const withUser = Page => {
  const WithAuthUser = props => <Page { ...props } />
    WithAuthUser.getInitialProps = async ( context )  => {
      
      const token = getToken('accessTokenAdmin', context.req)
      
      let account = null
      let accessToken = null
      let serverMessage = null
      
      if(token){accessToken = token.split('=')[1]}
      
      if(accessToken){
        try {
          const responseRead = await axios.get(`${API}/auth/admin`, {
              headers: {
                  Authorization: `Bearer ${accessToken}`,
                  contentType: `application/json`
              }
          })
          
          account = responseRead.data
    
        } catch(err){
          console.log('ERROR', err)
          account = null
          serverMessage = err.response ? err.response.data : 'Error ocurred, getting account data.'
        }
      }

      if(!account){

        context.res.writeHead(302, {
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

    return WithAuthUser

}

export default withUser
