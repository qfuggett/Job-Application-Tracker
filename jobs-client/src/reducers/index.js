//merges two reducers into combineReducer to hand to createStore and establishes state, returns getState and dispatch (actions/make changes)

import { combineReducers } from 'redux'
import jobReducer from './jobReducer'

const rootReducer = combineReducers({
    jobReducer
})

export default rootReducer;