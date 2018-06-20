import { connect } from 'react-redux'
import { addNewPlayer, getPlayersThunk } from '../../duck/actionCreators'
import HomeContainer from './containers/HomeContainer'

const mapStateToProps = state => ({
  players: state.players,
  user: state.user
})

const mapDispatchToProps = dispatch => ({
  handleNewPlayerInput: event => {
    dispatch(addNewPlayer(event.target.value))
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
