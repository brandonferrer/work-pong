import { combineReducers } from 'redux'
import { ADD_NEW_PLAYER, GET_PLAYERS, AUTH_USER } from './actions'

const user = (state = null, action) => {
  if (action.type === AUTH_USER) {
    return action.payload
  }
  return state
}

const newPlayer = (state = '', action) => {
  if (action.type === ADD_NEW_PLAYER) {
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

const rootReducer = combineReducers({ newPlayer, players, user })

export default rootReducer
