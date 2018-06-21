import { combineReducers } from 'redux'
import { GET_PLAYERS, AUTH_USER } from './actions'

const user = (state = null, action) => {
  if (action.type === AUTH_USER) {
    return action.payload
  }
  return state
}

const players = (state = [], action) => {
  if (action.type === GET_PLAYERS) {
    return action.payload
  }
  return state
}

const rootReducer = combineReducers({ players, user })

export default rootReducer
