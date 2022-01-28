export {
  adminUsersSort,
  componentSort,
  facultySort,
  studentSort,
  staffSort,
  publicationSort,
  newsSort,
  slideSort
}

const adminUsersSort = ['role', 'email', 'lastName', 'firstName', 'username']
const componentSort = ['longDescription', 'shortDescription', 'active', 'leader', 'name']
const facultySort = ['componentThree', 'componentTwo', 'componentOne', 'researchInterests', 'centerAssociation', 'officeLocation', 'officePhone', 'website', 'email', 'department', 'profession', 'image', 'name', 'title']
const studentSort = ['component', 'centerAssociation', 'location', 'department', 'profileImage', 'startDate', 'endDate', 'advisor', 'phone', 'email', 'status', 'name', 'title']
const staffSort = ['image','email', 'position','name', 'title']
const publicationSort = ['component', 'faculty', 'link', 'type', 'venues', 'authors', 'title', 'year', 'file']
const newsSort = ['component', 'news', 'title', 'date', 'image']
const slideSort = ['component', 'caption', 'image']