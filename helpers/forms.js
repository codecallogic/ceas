import { API } from '../config'
import axios from 'axios'
import { validateIsEmail } from '../helpers/validations'
import { nanoid } from 'nanoid'

export {
  manageFormFields,
  submitCreate,
  submitUpdate,
  submitDeleteRow,
}
//// FORM FIELDS
const formFields = {
  adminUsers: ['username', 'firstName', 'lastName', 'role', 'email'],
  components: ['name', 'leader', 'active'],
  faculty: ['title', 'name', 'email'],
  students: ['title', 'name', 'advisor', 'email'],
  staff: ['title', 'name', 'email'],
  publications: ['title', 'file', 'authors', 'date']
}

const manageFormFields = (data, key) => {

  if(typeof data == 'object'){ return data[key] }
  if(typeof data == 'string'){ return data }
  
}

const submitCreate = async (e, stateData, setMessage, setLoading, loadingType, type, path, token, allData, setAllData, resetMethod, resetType, fileType) => {
  e.preventDefault()

  for(let i = 0; i < formFields[type].length; i++){
    if(formFields[type][i].includes('email') && !validateIsEmail(formFields[type][i])) return (setMessage('Invalid email address'))

    if(!stateData[formFields[type][i]]) return (setMessage(`${formFields[type][i].replace('_', ' ')} is required`))
  }

  setLoading(loadingType)
  setMessage('')

  let data      = new FormData()
  let fileID    = nanoid()
  
  if(stateData && fileType){ for(let key in stateData){ if(key == fileType) stateData[fileType] ? data.append('file', stateData[fileType], `${type}-${fileID}.${stateData[fileType].name.split('.'[1])}`)  : null  }}
  if(stateData){ for(let key in stateData){ if(key !== fileType) data.append(key, JSON.stringify(stateData[key])) } }

  try {
    const responseCreate = await axios.post(`${API}/${path}`, data, {
      headers: {
        Authorization: `Bearer ${token}`,
        contentType: 'multipart/form-data'
      }
    })
    setLoading('')
    allData[type]= responseCreate.data
    setAllData(allData)
    setMessage(type == 'adminUsers' ? 'Invite was sent' : 'Item was created')
    resetMethod(resetType)
    
  } catch (error) {
    console.log(error.response)
    setLoading('')
    if(error)  error.response ? error.response.statusText == 'Unauthorized' ? (setMessage(error.response.statusText), window.location.href = 'admin/login') : (setMessage(error.response.data)) : (setMessage('Error ocurred with creating item'))
  }
}

const submitUpdate = async (e, stateData, setMessage, setLoading, loadingType, type, path, token, allData, setAllData, resetMethod, resetType, setModal, fileType) => {
  e.preventDefault()
  for(let i = 0; i < formFields[type].length; i++){
    if(formFields[type][i].includes('email') && !validateIsEmail(formFields[type][i])) return (setMessage('Invalid email address'))

    if(!stateData[formFields[type][i]]) return (setMessage(`${formFields[type][i].replace('_', ' ')} is required`))
  }

  setLoading(loadingType)
  setMessage('')
  
  let data = new FormData()
  let fileID    = nanoid()

  for(let key in stateData){
    if(stateData){  if(key !== fileType) data.append(key, JSON.stringify(stateData[key])) }

    if(key == fileType && typeof stateData[fileType] === 'object' && stateData[fileType] !== null) data.append('file', stateData[fileType], `${type}-${fileID}.${stateData[fileType].name.split('.'[1])}`) 

    if(key == fileType && typeof stateData[fileType] !== 'object' && stateData[fileType] !== null) data.append(key, JSON.stringify(stateData[key]))
  }

  try {
    const responseCreate = await axios.post(`${API}/${path}`, data, {
      headers: {
        Authorization: `Bearer ${token}`,
        contentType: 'multipart/form-data'
      }
    })

    setLoading('')
    setModal('')
    allData[type]= responseCreate.data
    setAllData(allData)
    setMessage('Item was updated')
    resetMethod(resetType)
    
  } catch (error) {
    console.log(error)
    setLoading('')
    if(error)  error.response ? error.response.statusText == 'Unauthorized' ? (setMessage(error.response.statusText), window.location.href = 'admin/login') : (setMessage(error.response.data)) : (setMessage('Error ocurred updating item'))
  }

}

const submitDeleteRow = async (e, setLoading, loadingType, path, selectID, token, allData, type, setAllData, setMessage, resetCheckboxes, setControls) => {
  e.preventDefault()
  setLoading(loadingType)
  setMessage('')
  
  try {
    const responseDelete = await axios.post(`${API}/${path}`, {id: selectID}, {
      headers: {
        Authorization: `Bearer ${token}`,
        contentType: 'multipart/form-data'
      }
    })
    setLoading('')
    allData[type]= responseDelete.data
    setAllData(allData)
    setMessage('Item was deleted')
    setControls(false)
    resetCheckboxes()
    
  } catch (error) {
    // console.log(error.response)
    setLoading('')
    if(error)  error.response ? error.response.statusText == 'Unauthorized' ? (setMessage(error.response.statusText), window.location.href = 'admin/login') : (setMessage(error.response.data)) : (setMessage('Error ocurred with deleting item'))
  }
}