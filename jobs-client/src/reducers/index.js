import { combineReducers } from 'redux'
import jobReducer from './jobReducer'
import todoReducer from './todoReducer'

const rootReducer = combineReducers({
    job: jobReducer,
    todo: todoReducer
})

export default rootReducer;