import axios from 'axios'
import {API} from '../config'

const filterTable = (data, includes, slice) => {
  
  data.forEach((item) => {
    if(includes){
      for(let key in item){
        if(includes.includes(key)) delete item[key]
      }
    }
  })

  if(slice) return data.slice(0, slice)
  return data
}

const tableData = async (accessToken, type) => {
  if(type == 'admin_users'){
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
  
  if(type == 'components'){
    try {
      const responseTable = await axios.get(`${API}/component/all-components`,  { 
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

  if(type == 'faculty'){
    try {
      const responseTable = await axios.get(`${API}/faculty/get-all-faculty`,  { 
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

  if(type == 'students'){
    try {
      const responseTable = await axios.get(`${API}/student/get-all-students`,  { 
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
}

export {
  filterTable,
  tableData
}