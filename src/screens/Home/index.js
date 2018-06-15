import { connect } from 'react-redux'
import { addNewPlayer } from '../../duck/actionCreators'
import HomeContainer from './containers/HomeContainer'

const mapStateToProps = state => ({
  newPlayer: state.newPlayer
})

const mapDispatchToProps = dispatch => ({
  handleNewPlayerInput: event => {
    dispatch(addNewPlayer(event.target.value))
  }
})

const ConnectedHomeContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeContainer)

export { ConnectedHomeContainer as HomeContainer }
