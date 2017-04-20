import { combineReducers } from 'redux'
import * as counterReducer from './counter'

export default combineReducers({
    ...counterReducer,
})