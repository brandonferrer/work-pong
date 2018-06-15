import { combineReducers } from 'redux'
import { ADD_NEW_PLAYER, GET_PLAYERS } from './actions'

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

const rootReducer = combineReducers({ newPlayer, players })

export default rootReducer
