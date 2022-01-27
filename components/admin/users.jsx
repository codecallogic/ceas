import SVG from '../../files/svg'
import {useState, useEffect} from 'react'
import {API} from '../../config'
import axios from 'axios'
import AdminModals from '../modals/AdminModals'
import AdminTables from '../table'

const Users = ({
  account,
  accessToken,
  resetUI,
  modal,
  setModal,
  view,
  setView,
  message,
  setMessage,
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

  const [allUsers, setAllUsers] = useState(data ? data : [])
  
  return (
    <>
      {view == '' && 
      <div className="account-dashboard">
        <div className="account-dashboard-item" onClick={() => (resetUI(), setView('all_admin'))}>
          <SVG svg={'user'}></SVG>
          <span>View All Admin</span>
        </div>
        <div className="account-dashboard-item" onClick={() => (resetUI(), setModal('create_admin'))}>
          <SVG svg={'email'}></SVG>
          <span>Add Admin</span>
        </div>
      </div>
      }
      {/* //// TABLES //// */}
      {view == 'all_admin' &&
        <AdminTables
          accessToken={accessToken}
          title={'Admin Users'}
          typeOfData={'adminUsers'}
          modalType={'create_admin'}
          modalDataType={{key: 'adminUsers', caseType: 'CREATE_ADMIN'}}
          componentData={allUsers}
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
          deletePath={'auth/delete-admin'}
          view={'all_admin'}
        >
        </AdminTables>
      }

      {/* //// MODALS //// */}
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
        caseType={'CREATE_ADMIN'}
        resetMethod={resetMethod}
        resetType={'RESET_ADMIN'}
        submitCreate={submitCreate}
        submitUpdate={submitUpdate}
        edit={edit}
        setEdit={setEdit}
      >
      </AdminModals>
    </>
  )
}

export default Users
