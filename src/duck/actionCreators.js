import { ADD_NEW_PLAYER } from './actions'

export function addNewPlayer(player) {
  return { type: ADD_NEW_PLAYER, payload: player }
}
