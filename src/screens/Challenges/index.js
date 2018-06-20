import { connect } from 'react-redux'

import ChallengesContainer from './containers/ChallengesContainer'

const mapStateToProps = state => ({
  players: state.players,
  user: state.user
})

const ConnectedChallengesContainer = connect(mapStateToProps)(
  ChallengesContainer
)

export { ConnectedChallengesContainer as ChallengesContainer }
