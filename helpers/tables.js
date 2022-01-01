import axios from 'axios'
import {API} from '../config'

export const tableData = async (accessToken) => {
  
  try {
    const responseTable = await axios.get(`${API}/auth/all-admin`,  { 
      headers: {
      Authorization: `Bearer ${accessToken}`,
      contentType: `application/json`
    }})
    return responseTable.data
  } catch (error) {
    console.log(error)
    if(error) return error.response.data
  }
}