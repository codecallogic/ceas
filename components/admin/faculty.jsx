import SVG from '../../files/svg'
import {connect} from 'react-redux'
import {useState, useEffect} from 'react'
import {API} from '../../config'
import axios from 'axios'
import AdminModals from '../modals/AdminModals'
import AdminTable from '../table'
import {nanoid} from 'nanoid'

const Faculty = ({
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

  const [allFaculty, setAllFaculty] = useState(data ? data : [])
    
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
        accessToken={accessToken}
        title={'Faculty'}
        typeOfData={'faculty'}
        modalType={'create_faculty'}
        modalDataType={{key: 'faculty', caseType: 'CREATE_FACULTY'}}
        componentData={allFaculty}
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
        deletePath="faculty/delete-faculty"
        view={'all_faculty'}
        fileType="image"
        fileLocation="faculty"
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
        caseType={'CREATE_FACULTY'}
        resetMethod={resetMethod}
        resetType={'RESET_FACULTY'}
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
    faculty: state.faculty
  }
}

const mapDispatchToProps = dispatch => {
  return {
    resetFaculty: () => dispatch({type: 'RESET_FACULTY'})
  }
}

export default Faculty
