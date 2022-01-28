import ComponentForm from '../modals/modalForms/componentForm'
import FacultyForm from '../modals/modalForms/facultyForm'
import StudentForm from '../modals/modalForms/studentForm'
import UpdateProfileForm from '../modals/modalForms/updateAdmin'
import ChangeProfileEmailForm from '../modals/modalForms/changeAdminEmail'
import UserAdminForm from './modalForms/userAdminForm'
import StaffForm from './modalForms/staffForm'
import PublicationForm from './modalForms/publicationForm'
import NewsForm from './modalForms/newsForm'
import SlideForm from './modalForms/slideForm'

const Modal = ({
  accessToken,
  resetUI,
  modal,
  setModal,
  setMessage,
  message,
  loading,
  setLoading,
  edit,
  setEdit,

  //// DATA
  allData,
  setAllData,

  //// REDUX
  stateData,
  stateMethod,
  caseType,
  resetMethod,
  resetType,

  //// CRUD FUNCTIONS
  updateProfile,
  changeEmail,
  submitCreate,
  submitUpdate,
}) => {
  
  return (
    <>
    { modal == 'update_profile' && 
      <UpdateProfileForm
        title={'Update account'}
        stateData={stateData}
        stateMethod={stateMethod}
        caseType={caseType}
        resetMethod={resetMethod}
        resetType={resetType}
        resetUI={resetUI}
        modal={modal}
        setModal={setModal}
        message={message}
        setMessage={setMessage}
        loading={loading}
        setLoading={setLoading}
        updateProfile={updateProfile}
      >
      </UpdateProfileForm>
    }
    {modal == 'change_email' &&
      <ChangeProfileEmailForm
        title={'Change email'}
        stateData={stateData}
        stateMethod={stateMethod}
        caseType={caseType}
        resetMethod={resetMethod}
        resetType={resetType}
        resetUI={resetUI}
        modal={modal}
        setModal={setModal}
        message={message}
        setMessage={setMessage}
        loading={loading}
        setLoading={setLoading}
        changeEmail={changeEmail}
      >
      </ChangeProfileEmailForm>
    }
    { modal == 'create_admin' && 
      <UserAdminForm
        title={edit == 'update_admin' ? 'Update admin' : 'Create Admin User'}
        accessToken={accessToken}
        allData={allData}
        setAllData={setAllData}
        stateData={stateData}
        stateMethod={stateMethod}
        caseType={caseType}
        resetMethod={resetMethod}
        resetType={resetType}
        resetUI={resetUI}
        modal={modal}
        setModal={setModal}
        message={message}
        setMessage={setMessage}
        loading={loading}
        setLoading={setLoading}
        submitCreate={submitCreate}
        submitUpdate={submitUpdate}
        edit={edit}
        setEdit={setEdit}
      >
      </UserAdminForm>
    }
    {modal == 'create_component' &&
      <ComponentForm
        title={edit == 'update_component' ? 'Update component' : 'Create Component'}
        accessToken={accessToken}
        allData={allData}
        setAllData={setAllData}
        stateData={stateData}
        stateMethod={stateMethod}
        caseType={caseType}
        resetMethod={resetMethod}
        resetType={resetType}
        resetUI={resetUI}
        modal={modal}
        setModal={setModal}
        message={message}
        setMessage={setMessage}
        loading={loading}
        setLoading={setLoading}
        submitCreate={submitCreate}
        submitUpdate={submitUpdate}
        edit={edit}
        setEdit={setEdit}
      >
      </ComponentForm>
    }
    {modal == 'create_faculty' &&
      <FacultyForm
        title={edit == 'update_faculty' ? 'Update Faculty' : 'Create Faculty'}
        accessToken={accessToken}
        allData={allData}
        setAllData={setAllData}
        stateData={stateData}
        stateMethod={stateMethod}
        caseType={caseType}
        resetMethod={resetMethod}
        resetType={resetType}
        resetUI={resetUI}
        modal={modal}
        setModal={setModal}
        message={message}
        setMessage={setMessage}
        loading={loading}
        setLoading={setLoading}
        submitCreate={submitCreate}
        submitUpdate={submitUpdate}
        edit={edit}
        setEdit={setEdit}
      >
      </FacultyForm>
    }
    {modal == 'create_student' &&
      <StudentForm
        title={edit == 'update_student' ? 'Update Student' : 'Create Student'}
        accessToken={accessToken}
        allData={allData}
        setAllData={setAllData}
        stateData={stateData}
        stateMethod={stateMethod}
        caseType={caseType}
        resetMethod={resetMethod}
        resetType={resetType}
        resetUI={resetUI}
        modal={modal}
        setModal={setModal}
        message={message}
        setMessage={setMessage}
        loading={loading}
        setLoading={setLoading}
        submitCreate={submitCreate}
        submitUpdate={submitUpdate}
        edit={edit}
        setEdit={setEdit}
      >
      </StudentForm>
    }
    {modal == 'create_staff' &&
      <StaffForm
        title={edit == 'update_staff' ? 'Update Staff' : 'Create Staff'}
        accessToken={accessToken}
        allData={allData}
        setAllData={setAllData}
        stateData={stateData}
        stateMethod={stateMethod}
        caseType={caseType}
        resetMethod={resetMethod}
        resetType={resetType}
        resetUI={resetUI}
        modal={modal}
        setModal={setModal}
        message={message}
        setMessage={setMessage}
        loading={loading}
        setLoading={setLoading}
        submitCreate={submitCreate}
        submitUpdate={submitUpdate}
        edit={edit}
        setEdit={setEdit}
      >
      </StaffForm>
    }
    {modal == 'create_publication' &&
      <PublicationForm
        title={edit == 'update_publication' ? 'Update Publication' : 'Create Publication'}
        accessToken={accessToken}
        allData={allData}
        setAllData={setAllData}
        stateData={stateData}
        stateMethod={stateMethod}
        caseType={caseType}
        resetMethod={resetMethod}
        resetType={resetType}
        resetUI={resetUI}
        modal={modal}
        setModal={setModal}
        message={message}
        setMessage={setMessage}
        loading={loading}
        setLoading={setLoading}
        submitCreate={submitCreate}
        submitUpdate={submitUpdate}
        edit={edit}
        setEdit={setEdit}
      >
      </PublicationForm>
    }
    {modal == 'create_news' &&
      <NewsForm
        title={edit == 'update_news' ? 'Update News' : 'Create News'}
        accessToken={accessToken}
        allData={allData}
        setAllData={setAllData}
        stateData={stateData}
        stateMethod={stateMethod}
        caseType={caseType}
        resetMethod={resetMethod}
        resetType={resetType}
        resetUI={resetUI}
        modal={modal}
        setModal={setModal}
        message={message}
        setMessage={setMessage}
        loading={loading}
        setLoading={setLoading}
        submitCreate={submitCreate}
        submitUpdate={submitUpdate}
        edit={edit}
        setEdit={setEdit}
      >
      </NewsForm>
    }
    {modal == 'create_slide' &&
      <SlideForm
        title={edit == 'update_slide' ? 'Update Slide' : 'Create Slide'}
        accessToken={accessToken}
        allData={allData}
        setAllData={setAllData}
        stateData={stateData}
        stateMethod={stateMethod}
        caseType={caseType}
        resetMethod={resetMethod}
        resetType={resetType}
        resetUI={resetUI}
        modal={modal}
        setModal={setModal}
        message={message}
        setMessage={setMessage}
        loading={loading}
        setLoading={setLoading}
        submitCreate={submitCreate}
        submitUpdate={submitUpdate}
        edit={edit}
        setEdit={setEdit}
      >
      </SlideForm>
    }
    </>
  )
}

export default Modal
