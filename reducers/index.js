import {combineReducers} from 'redux'
import {adminReducer} from './adminReducer'
import {componentReducer} from './componentReducer'

const rootReducer = combineReducers({
  admin: adminReducer,
  component: componentReducer
})

export default rootReducer