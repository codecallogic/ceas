import SVG from '../../files/svg'
import {connect} from 'react-redux'
import {useState, useEffect} from 'react'
import {API} from '../../config'
import axios from 'axios'
import AdminModals from '../modals/AdminModals'
import AdminTable from '../table'

const Components = ({
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
  selectID,
  setSelectID,
  controls,
  setControls,
  resetCheckboxes,
  edit,
  setEdit,
  editType,

  //// DATA
  data,
  allData,
  setAllData,
  setModalData,
  sortOrder,

  //// REDUX
  stateData,
  stateMethod,
  resetMethod,

  //// CRUD
  submitCreate,
  submitUpdate,
  submitDeleteRow

  }) => {

  const [allComponents, setAllComponents] = useState(data ? data : [])
    
  return (
    <>
      { view == '' && 
      <div className="account-dashboard">
        <div className="account-dashboard-item" onClick={() => (resetUI(), setView('all_components'))}>
          <SVG svg={'list'}></SVG>
          <span>View Components</span>
        </div>
        <div className="account-dashboard-item" onClick={() => (resetUI(), setModal('create_component'))}>
          <SVG svg={'item-added'}></SVG>
          <span>Create Component</span>
        </div>
      </div>
      }
      { view == 'all_components' &&
      <AdminTable
        accessToken={accessToken}
        title={'Components'}
        typeOfData={'components'}
        modalType={'create_component'}
        modalDataType={{key: 'components', caseType: 'CREATE_COMPONENT'}}
        componentData={allComponents}
        originalData={allData}
        account={account}
        loading={loading}
        setLoading={setLoading}
        selectID={selectID}
        setSelectID={setSelectID}
        controls={controls}
        setControls={setControls}
        setModalData={setModalData}
        setModal={setModal}
        sortOrder={sortOrder}
        resetCheckboxes={resetCheckboxes}
        setEdit={setEdit}
        editType={editType}
        submitDeleteRow={submitDeleteRow}
        message={message}
        setMessage={setMessage}
        setAllData={setAllData}
        deletePath="component/delete-component"
        view={'all_components'}
        fileType="image"
        fileType2="icon"
        fileLocation="component"
      >
      </AdminTable>
      }
      <AdminModals
        accessToken={accessToken}
        allData={allData}
        setAllData={setAllData}
        resetUI={resetUI}
        modal={modal}
        setModal={setModal}
        setMessage={setMessage}
        message={message}
        loading={loading}
        setLoading={setLoading}
        stateData={stateData}
        stateMethod={stateMethod}
        caseType={'CREATE_COMPONENT'}
        resetMethod={resetMethod}
        resetType={'RESET_COMPONENT'}
        submitCreate={submitCreate}
        submitUpdate={submitUpdate}
        edit={edit}
        setEdit={setEdit}
      >
      </AdminModals>
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
