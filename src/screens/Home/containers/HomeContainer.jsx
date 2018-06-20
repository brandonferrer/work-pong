import React, { Component } from 'react'
import { Container } from 'semantic-ui-react'
import Leaderboard from '../components/Leaderboard'

class HomeContainer extends Component {
  componentDidMount() {
    this.props.getAllPlayers()
  }
  render() {
    const { players, user } = this.props

    return (
      <Container>
        <h1>Leaderboard</h1>
        <Leaderboard players={players} />
        {!user && (
          <div>
            <h3 style={{ color: 'red' }}>{`⚠️ WARNING ⚠️ 👀`}</h3>
            <p>
              -- Don't sign up more than once, your past pong data will be lost.
              This is a bug and will be corrected in a future release.
            </p>
            <p>
              -- If you refresh your browser, you will be logged out and have to
              login again.
            </p>
          </div>
        )}
      </Container>
    )
  }
}
export default HomeContainer
