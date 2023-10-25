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

const tableData = async (accessToken, path) => {

  try {
    const responseItems = await axios.get(`${API}/${path}`, { 
      headers: {
        Authorization: `Bearer ${accessToken}`,
        contentType: `application/json`
      },
      withCredentials: true
    })

    return responseItems.data
    
  } catch (error) {
    console.log(error)
    if(error) return error
  }

}

const clientData = async (path) => {

  try {
    const responseItems = await axios.get(`${API}/${path}`)

    return responseItems.data
    
  } catch (error) {
    console.log(error)
    if(error) return error
  }

}

const groupBy = (xs, key) => {
  
  return xs.reduce( function(rv, x) {
    
    (rv[x[key]] = rv[x[key]] || []).push(x);

    return rv;

  }, {});

}

export {
  filterTable,
  tableData,
  clientData,
  groupBy
}