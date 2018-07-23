import { combineReducers } from "redux";
//import { routerReducer } from 'react-router-redux'

import userModulesReducer from './userModulesReducer'
import modulesReducer from './modulesReducer'

const rootReducer = combineReducers({
  user: userModulesReducer,
  modules: modulesReducer
  //routing: routerReducer
})

export default rootReducer;