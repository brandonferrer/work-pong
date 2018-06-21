import { connect } from 'react-redux'
import { getPlayers, getPlayersThunk } from '../../duck/actionCreators'
import HomeContainer from './containers/HomeContainer'

const mapStateToProps = state => ({
  players: state.players,
  user: state.user
})

const mapDispatchToProps = dispatch => ({
  getAllPlayers: () => {
    dispatch(getPlayersThunk())
  },
  refreshPlayers: newPlayers => {
    dispatch(getPlayers(newPlayers))
  }
})

const ConnectedHomeContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeContainer)

export { ConnectedHomeContainer as HomeContainer }
