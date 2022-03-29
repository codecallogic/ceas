import SVG from '../../files/svg'
import {useState, useEffect} from 'react'
import AdminModals from '../modals/AdminModals'
import AdminTable from '../table'

const Equipment = ({
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

  const [allEquipment, setAllEquipment] = useState(data ? data : [])
    
  return (
    <>
      { view == '' && 
      <div className="account-dashboard">
        <div className="account-dashboard-item" onClick={() => (resetUI(), setView('all_equipment'))}>
          <SVG svg={'list'}></SVG>
          <span>View Equipment</span>
        </div>
        <div className="account-dashboard-item" onClick={() => (resetUI(), setLoading(''), setModal('create_equipment'))}>
          <SVG svg={'equipment'}></SVG>
          <span>Create Equipment</span>
        </div>
      </div>
      }
      { view == 'all_equipment' &&
      <AdminTable
        accessToken={accessToken}
        title={'Equipment'}
        typeOfData={'equipment'}
        modalType={'create_equipment'}
        modalDataType={{key: 'equipment', caseType: 'CREATE_EQUIPMENT'}}
        componentData={allEquipment}
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
        deletePath="equipment/delete-equipment"
        view={'all_equipment'}
        fileType="image"
        fileLocation="equipment"
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
        caseType={'CREATE_EQUIPMENT'}
        resetMethod={resetMethod}
        resetType={'RESET_EQUIPMENT'}
        submitCreate={submitCreate}
        submitUpdate={submitUpdate}
        edit={edit}
        setEdit={setEdit}
      >
      </AdminModals>
    </>
  )
}

export default Equipment