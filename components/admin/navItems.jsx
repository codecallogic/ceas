import SVG from '../../files/svg'
import {useState, useEffect} from 'react'
import AdminModals from '../modals/AdminModals'
import AdminTable from '../table'

const NavItems = ({
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

  const [allItems, setAllNews] = useState(data ? data : [])
    
  return (
    <>
      { view == '' && 
      <div className="account-dashboard">
        <div className="account-dashboard-item" onClick={() => (resetUI(), setView('all_nav_items'))}>
          <SVG svg={'nav'}></SVG>
          <span>View Nav Items</span>
        </div>
        <div className="account-dashboard-item" onClick={() => (resetUI(), setModal('create_nav_item'))}>
          <SVG svg={'nav-items'}></SVG>
          <span>Create Nav Item</span>
        </div>
      </div>
      }
      { view == 'all_nav_items' &&
      <AdminTable
        accessToken={accessToken}
        title={'Nav Items'}
        typeOfData={'navItems'}
        modalType={'create_nav_item'}
        modalDataType={{key: 'navItems', caseType: 'CREATE_NAV_ITEM'}}
        componentData={allItems}
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
        deletePath="navigation/delete-nav-item"
        view={'all_nav_items'}
        fileType="file"
        fileLocation="navItems"
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
        caseType={'CREATE_NAV_ITEM'}
        resetMethod={resetMethod}
        resetType={'RESET_NAV_ITEM'}
        submitCreate={submitCreate}
        submitUpdate={submitUpdate}
        edit={edit}
        setEdit={setEdit}
      >
      </AdminModals>
    </>
  )
}

export default NavItems