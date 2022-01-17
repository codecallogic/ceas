import {combineReducers} from 'redux'
import {adminReducer} from './adminReducer'
import {componentReducer} from './componentReducer'
import {facultyReducer} from './facultyReducer'
import {studentReducer} from './studentReducer'

const rootReducer = combineReducers({
  admin: adminReducer,
  component: componentReducer,
  faculty: facultyReducer,
  student: studentReducer
})

export default rootReducer