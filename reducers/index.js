import {combineReducers} from 'redux'
import {adminReducer} from './adminReducer'
import {componentReducer} from './componentReducer'
import {facultyReducer} from './facultyReducer'
import {studentReducer} from './studentReducer'
import {staffReducer} from './staffReducer'
import {publicationReducer} from './publicationReducer'

const rootReducer = combineReducers({
  admin: adminReducer,
  component: componentReducer,
  faculty: facultyReducer,
  student: studentReducer,
  staff: staffReducer,
  publication: publicationReducer
})

export default rootReducer