import SVG from '../../files/svg'
import {connect} from 'react-redux'
import {useState, useEffect} from 'react'
import {API} from '../../config'
import axios from 'axios'
import AdminModals from '../modals/AdminModals'
import AdminTable from '../table'

const Components = ({
  data,
  allData,
  setAllData,
  account,
  accessToken,
  resetUI,
  modal,
  setModal,
  message,
  setMessage,
  view,
  setView,
  loading,
  setLoading,
  preventEvent,
  selectID,
  setSelectID,
  controls,
  setControls,
  setElementText,
  setModalData,
  //// REDUX
  component,
  resetComponent
  }) => {

  const [allFaculty, setAllFaculty] = useState(data ? data : [])

  const createComponent = async (e) => {
    e.preventDefault()
    if(!component.name) return setMessage('Please fill out name field')
    if(!component.active) return setMessage('Please choose active setate')
    if(!component.shortDescription) return setMessage('Please add a short description')
    if(!component.longDescription) return setMessage('Please add a long description')
    setLoading('component')
    setMessage('')

    try {
      const responseCreate = await axios.post(`${API}/component/create-component`, component, { 
        headers: {
        Authorization: `Bearer ${accessToken}`,
        contentType: `application/json`
      }})
      setLoading('')
      allData.components = responseCreate.data
      setAllData(allData)
      setMessage('Component was created')
      for(let key in component){setElementText(key, '')}
      resetComponent()
      
    } catch (error) {
      console.log(error)
      for(let key in component){setElementText(key, '')}
      resetComponent()
      setLoading('')
      if(error) error.response ? setMessage(error.response.data) : setMessage('Error ocurred creating a component, please try again later')
    }
  }

  const updateComponent = async (e) => {
    e.preventDefault()
    if(!component.name) return setMessage('Please fill out name field')
    if(!component.active) return setMessage('Please choose active setate')
    if(!component.shortDescription) return setMessage('Please add a short description')
    if(!component.longDescription) return setMessage('Please add a long description')
    setLoading('update_component')
    setMessage('')

    try {
      const responseUpdate = await axios.post(`${API}/component/update-component`, component, { 
        headers: {
        Authorization: `Bearer ${accessToken}`,
        contentType: `application/json`
      }})
      setLoading('')
      allData.components = responseUpdate.data
      setAllData(allData)
      setModal('')
      
    } catch (error) {
      console.log(error)
      for(let key in component){setElementText(key, '')}
      resetComponent()
      setLoading('')
      if(error) error.response ? setMessage(error.response.data) : setMessage('Error ocurred updating the component, please try again later')
    }
  }

  const deleteComponent = async (e) => {
    e.preventDefault()
    setLoading('delete_component')
    setMessage('')
    
    try {
      const responseDelete = await axios.post(`${API}/component/delete-component`, {id: selectID}, { 
        headers: {
        Authorization: `Bearer ${accessToken}`,
        contentType: `application/json`
      }})
      setLoading('')
      allData.components = responseDelete.data
      setAllData(allData)
      setControls(false)

    } catch (error) {
      console.log(error.response)
      setLoading('')
      if(error) error.response ? setMessage(error.response.data.substr(0, 200)) : setMessage('Error ocurred deleting component, please try again later')
    }
  }
    
  return (
    <>
      { view == '' && 
      <div className="account-dashboard">
        <div className="account-dashboard-item" onClick={() => (resetUI(), setView('all_faculty'))}>
          <SVG svg={'list'}></SVG>
          <span>View Faculty</span>
        </div>
        <div className="account-dashboard-item" onClick={() => (resetUI(), setModal('create_faculty'))}>
          <SVG svg={'add-staff'}></SVG>
          <span>Create Faculty Member</span>
        </div>
      </div>
      }
      { view == 'all_faculty' &&
      <AdminTable
        title={'Components'}
        typeOfData={'components'}
        modalType={'update_faculty'}
        modalDataType={{key: 'faculty', method: 'createFaculty'}}
        componentData={allFaculty}
        originalData={allData}
        account={account}
        selectID={selectID}
        setSelectID={setSelectID}
        controls={controls}
        setControls={setControls}
        setModal={setModal}
        setModalData={setModalData}
        deleteRow={deleteComponent}
        message={message}
      >
      </AdminTable>
      }
      {modal == 'create_faculty' &&
      <AdminModals
        type={'create_faculty'}
        title={'Create Faculty Member'}
        data={allData}
        submitComponent={createComponent}
        resetUI={resetUI}
        setModal={setModal}
        setMessage={setMessage}
        message={message}
        loading={loading}
        setLoading={setLoading}
        setElementText={setElementText}
        preventEvent={preventEvent}
      >
      </AdminModals>
      }
      {modal == 'update_faculty' &&
      <AdminModals
        type={'create_component'}
        functionType={'update_faculty'}
        title={'Update Faculty Member'}
        updateComponent={updateComponent}
        resetUI={resetUI}
        setModal={setModal}
        setMessage={setMessage}
        message={message}
        loading={loading}
        setLoading={setLoading}
        setElementText={setElementText}
        preventEvent={preventEvent}
      >
      </AdminModals>
      }
    </>
  )
}

const mapStateToProps = state => {
  return {
    component: state.component
  }
}

const mapDispatchToProps = dispatch => {
  return {
    resetComponent: () => dispatch({type: 'RESET_COMPONENT'})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Components)
