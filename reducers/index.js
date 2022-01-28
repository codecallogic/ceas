import {combineReducers} from 'redux'
import {adminReducer} from './adminReducer'
import {componentReducer} from './componentReducer'
import {facultyReducer} from './facultyReducer'
import {studentReducer} from './studentReducer'
import {staffReducer} from './staffReducer'
import {publicationReducer} from './publicationReducer'
import {newsReducer} from './newsReducer'
import {slideReducer} from './slideShowReducer'

const rootReducer = combineReducers({
  admin: adminReducer,
  component: componentReducer,
  faculty: facultyReducer,
  student: studentReducer,
  staff: staffReducer,
  publication: publicationReducer,
  news: newsReducer,
  slide: slideReducer
})

export default rootReducer