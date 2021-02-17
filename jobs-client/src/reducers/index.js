import { combineReducers } from 'redux'
import jobReducer from './jobReducer'
// import todoReducer from './todoReducer'

const rootReducer = combineReducers({
    jobReducer,
    // todoReducer
})

export default rootReducer;