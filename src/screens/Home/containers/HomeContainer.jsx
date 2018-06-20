import React, { Component } from 'react'
import { Container } from 'semantic-ui-react'
import Leaderboard from '../components/Leaderboard'
import firebase from '../../../firebase'

class HomeContainer extends Component {
  componentDidMount() {
    this.props.getAllPlayers()

    const playersRef = firebase.database().ref('players')
    playersRef.on('value', snapshot => {
      let players = snapshot.val()
      this.props.refreshPlayers(players)
    })
  }

  render() {
    const { players, user } = this.props

    return (
      <Container>
        <h1>Leaderboard</h1>
        <Leaderboard players={players} />
        {!user && (
          <div
            style={{
              padding: '1rem',
              border: '1px solid #000'
            }}
          >
            <h5 style={{ color: 'red' }}>{`⚠️ WARNING`}</h5>
            <p style={{ fontSize: '12px' }}>
              -- Don't sign up more than once, your past pong data will be lost.
              This is a bug and will be corrected in a future release.
            </p>
            <p style={{ fontSize: '12px' }}>
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
