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

  const [allNews, setAllNews] = useState(data ? data : [])
    
  return (
    <>
      { view == '' && 
      <div className="account-dashboard">
        <div className="account-dashboard-item" onClick={() => (resetUI(), setView('all_news'))}>
          <SVG svg={'list'}></SVG>
          <span>View News</span>
        </div>
        <div className="account-dashboard-item" onClick={() => (resetUI(), setModal('create_news'))}>
          <SVG svg={'publication'}></SVG>
          <span>Create News</span>
        </div>
      </div>
      }
      { view == 'all_news' &&
      <AdminTable
        accessToken={accessToken}
        title={'News'}
        typeOfData={'news'}
        modalType={'create_news'}
        modalDataType={{key: 'news', caseType: 'CREATE_NEWS'}}
        componentData={allNews}
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
        deletePath="news/delete-news"
        view={'all_news'}
        fileType="image"
        fileLocation="news"
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
        caseType={'CREATE_NEWS'}
        resetMethod={resetMethod}
        resetType={'RESET_NEWS'}
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