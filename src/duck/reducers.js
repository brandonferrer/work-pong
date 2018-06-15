import { combineReducers } from 'redux'
import { ADD_NEW_PLAYER } from './actions'

const newPlayer = (state = '', action) => {
  if (action.type === ADD_NEW_PLAYER) {
    return action.payload
  }
  return state
}

const rootReducer = combineReducers({ newPlayer })

export default rootReducer
