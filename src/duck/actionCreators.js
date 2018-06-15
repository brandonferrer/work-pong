import { ADD_NEW_PLAYER, GET_PLAYERS } from './actions'
import firebase from '../firebase'

export const addNewPlayer = player => ({
  type: ADD_NEW_PLAYER,
  payload: player
})

export const addNewPlayerFirebase = player => async dispatch => {
  firebase
    .database()
    .ref('players/' + player.name)
    .set(player)
}

export const getPlayers = players => ({
  type: GET_PLAYERS,
  payload: players
})

export const getPlayersThunk = () => dispatch => {
  const players = []
  firebase
    .database()
    .ref(`/players`)
    .once('value', snap => {
      snap.forEach(data => {
        let player = data.val()
        players.push(player)
      })
    })
    .then(() => dispatch(getPlayers(players)))
}
