import { GET_PLAYERS, AUTH_USER } from './actions'
import firebase from '../firebase'

export const authUser = user => ({
  type: AUTH_USER,
  payload: user
})

export const addNewPlayerFirebase = player => async dispatch => {
  firebase
    .database()
    .ref('players/' + player.id)
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
