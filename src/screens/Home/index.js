import { connect } from 'react-redux'
import firebase, { auth, provider } from '../../firebase'
import {
  addNewPlayer,
  addNewPlayerFirebase,
  getPlayersThunk,
  authUser
} from '../../duck/actionCreators'
import HomeContainer from './containers/HomeContainer'

const DEFAULT_RATING = 500
const DEFAULT_WINS = 0
const DEFAULT_LOSS = 0

const mapStateToProps = state => ({
  players: state.players,
  user: state.user
})

const mapDispatchToProps = dispatch => ({
  handleNewPlayerInput: event => {
    dispatch(addNewPlayer(event.target.value))
  },
  register: () => {
    auth.signInWithPopup(provider).then(result => {
      const user = result.user
      const player = {
        name: user.displayName,
        email: user.email,
        rating: DEFAULT_RATING,
        wins: DEFAULT_WINS,
        loss: DEFAULT_LOSS
      }
      dispatch(authUser(user))
      dispatch(addNewPlayerFirebase(player))
    })
  },
  getAllPlayers: () => {
    dispatch(getPlayersThunk())
  },
  login: () => {
    auth.signInWithPopup(provider).then(result => {
      const user = result.user
      const player = {
        name: user.displayName,
        email: user.email,
        rating: DEFAULT_RATING,
        wins: DEFAULT_WINS,
        loss: DEFAULT_LOSS
      }
      dispatch(authUser(user))
      dispatch(addNewPlayerFirebase(player))
    })
  }
})

const ConnectedHomeContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeContainer)

export { ConnectedHomeContainer as HomeContainer }
