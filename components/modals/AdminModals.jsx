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
import LabForm from './modalForms/labForm'
import EquipmentForm from './modalForms/equipmentForm'
import FormForm from './modalForms/formForm'
import NavItem from './modalForms/navItem'
import NavMenu from './modalForms/navMenu'
import PageSections from './modalForms/pageSectionForm'

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
    {modal == 'create_lab' &&
      <LabForm
        title={edit == 'update_lab' ? 'Update Lab' : 'Create Lab'}
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
      </LabForm>
    }
    {modal == 'create_equipment' &&
      <EquipmentForm
        title={edit == 'update_equipment' ? 'Update Equipment' : 'Create Equipment'}
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
      </EquipmentForm>
    }
    {modal == 'create_form' &&
      <FormForm
        title={edit == 'update_form' ? 'Update Form' : 'Create Form'}
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
      </FormForm>
    }
    {modal == 'create_nav_item' &&
      <NavItem
      title={edit == 'update_nav_item' ? 'Update Nav Item' : 'Create Nav Item'}
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
      </NavItem>
    }
    {modal == 'create_nav_menu' &&
      <NavMenu
      title={edit == 'update_nav_menu' ? 'Update Nav Menu' : 'Create Nav Menu'}
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
      </NavMenu>
    }
    {modal == 'create_section' &&
      <PageSections
      title={edit == 'update_section' ? 'Update Section' : 'Create Section'}
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
      </PageSections>
    }
    </>
  )
}

export default Modal
