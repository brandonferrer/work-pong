/* global window */
import { createStore, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './reducers'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
let store
if (window.location.hostname === 'localhost') {
  store = createStore(
    rootReducer,
    /* preloadedState, */ composeEnhancers(applyMiddleware(thunk))
  )
} else {
  store = createStore(applyMiddleware(thunk))
}

export default store
