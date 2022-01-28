import SVG from '../../files/svg'
import {useState, useEffect} from 'react'
import AdminModals from '../modals/AdminModals'
import AdminTable from '../table'

const News = ({
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

  const [allSlides, setAllNews] = useState(data ? data : [])
    
  return (
    <>
      { view == '' && 
      <div className="account-dashboard">
        <div className="account-dashboard-item" onClick={() => (resetUI(), setView('all_slides'))}>
          <SVG svg={'list'}></SVG>
          <span>View Slides</span>
        </div>
        <div className="account-dashboard-item" onClick={() => (resetUI(), setModal('create_slide'))}>
          <SVG svg={'slides'}></SVG>
          <span>Create Slide</span>
        </div>
      </div>
      }
      { view == 'all_slides' &&
      <AdminTable
        accessToken={accessToken}
        title={'Slides'}
        typeOfData={'slides'}
        modalType={'create_slide'}
        modalDataType={{key: 'slides', caseType: 'CREATE_SLIDE'}}
        componentData={allSlides}
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
        deletePath="slide/delete-slide"
        view={'all_slides'}
        fileType="image"
        fileLocation="slides"
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
        caseType={'CREATE_SLIDE'}
        resetMethod={resetMethod}
        resetType={'RESET_SLIDE'}
        submitCreate={submitCreate}
        submitUpdate={submitUpdate}
        edit={edit}
        setEdit={setEdit}
      >
      </AdminModals>
    </>
  )
}

export default News