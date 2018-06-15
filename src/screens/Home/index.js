import { connect } from 'react-redux'
import {
  addNewPlayer,
  addNewPlayerFirebase,
  getPlayersThunk
} from '../../duck/actionCreators'
import HomeContainer from './containers/HomeContainer'

const DEFAULT_RATING = 500
const DEFAULT_WINS = 0
const DEFAULT_LOSS = 0

const mapStateToProps = state => ({
  newPlayer: state.newPlayer,
  players: state.players
})

const mapDispatchToProps = dispatch => ({
  handleNewPlayerInput: event => {
    dispatch(addNewPlayer(event.target.value))
  },
  handleNewPlayerSubmit: name => {
    const player = {
      name: name,
      rating: DEFAULT_RATING,
      wins: DEFAULT_WINS,
      loss: DEFAULT_LOSS
    }
    dispatch(addNewPlayerFirebase(player))
    dispatch(addNewPlayer(''))
  },
  getAllPlayers: () => {
    dispatch(getPlayersThunk())
  }
})

const ConnectedHomeContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeContainer)

export { ConnectedHomeContainer as HomeContainer }
