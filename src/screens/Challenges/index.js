import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { setOpponent } from '../../duck/actionCreators'

import ChallengesContainer from './containers/ChallengesContainer'

const mapStateToProps = state => ({
  players: state.players,
  user: state.user,
  opponent: state.opponent
})

const mapDispatchToProps = dispatch => ({
  handleSelect: (e, data) => {
    dispatch(setOpponent(data.value))
  }
})

const ConnectedChallengesContainer = withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(ChallengesContainer)
)

export { ConnectedChallengesContainer as ChallengesContainer }
