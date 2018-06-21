import { combineReducers } from 'redux'
import { GET_PLAYERS, AUTH_USER, SET_OPPONENT } from './actions'

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

const opponent = (state = '', action) => {
  if (action.type === SET_OPPONENT) {
    return action.payload
  }
  return state
}

const rootReducer = combineReducers({ players, user, opponent })

export default rootReducer
