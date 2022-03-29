import { combineReducers } from 'redux'
import { adminReducer } from './adminReducer'
import { componentReducer } from './componentReducer'
import { facultyReducer } from './facultyReducer'
import { studentReducer } from './studentReducer'
import { staffReducer } from './staffReducer'
import { publicationReducer } from './publicationReducer'
import { newsReducer } from './newsReducer'
import { slideReducer } from './slideReducer'
import { labReducer } from './labReducer'
import { equipmentReducer } from './equipmentReducer'
import { formReducer } from './formsReducer'
import { navItemReducer } from './navItemReducer'
import { navMenuReducer } from './navMenuReducer'
import { pageSectionReducer } from './pageSectionReducer'

const rootReducer = combineReducers({
  admin: adminReducer,
  component: componentReducer,
  faculty: facultyReducer,
  student: studentReducer,
  staff: staffReducer,
  publication: publicationReducer,
  news: newsReducer,
  slide: slideReducer,
  lab: labReducer,
  equipment: equipmentReducer,
  form: formReducer,
  navItem: navItemReducer,
  navMenu: navMenuReducer,
  pageSection: pageSectionReducer
})

export default rootReducer