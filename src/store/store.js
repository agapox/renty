import { createStore, compose } from 'redux'
// import { syncHistoryWithStore } from 'react-router-redux'
// import { browserHistory } from 'react-router-dom'

// import rootReducer
import rootReducer from '../reducers/'

// import data
import modules from '../ApiData/modules'
import user from '../ApiData/user'


// Default State
const defaultStore = {
  user,
  modules
}

// Create store
const store = createStore(
  rootReducer,
  defaultStore,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

//export const history = syncHistoryWithStore(browserHistory, store)

export default store