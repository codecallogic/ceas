import {combineReducers} from 'redux'
import {adminReducer} from './adminReducer'
import {componentReducer} from './componentReducer'
import {facultyReducer} from './facultyReducer'

const rootReducer = combineReducers({
  admin: adminReducer,
  component: componentReducer,
  faculty: facultyReducer
})

export default rootReducer