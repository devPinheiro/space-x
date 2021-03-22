import  { combineReducers } from 'redux'
import fetchAllRockets from './fetch-all-rockets'
import fetchSingleRocket from './fetch-single-rocket'

const rootReducer = combineReducers({
 fetchAllRockets,
 fetchSingleRocket
})

export default rootReducer