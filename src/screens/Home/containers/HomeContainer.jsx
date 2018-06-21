import React, { Component } from 'react'
import { Container } from 'semantic-ui-react'
import { css } from 'emotion'
import Leaderboard from '../components/Leaderboard'
import firebase, { auth } from '../../../firebase'

class HomeContainer extends Component {
  componentDidMount() {
    this.props.getAllPlayers()

    const playersRef = firebase.database().ref('players')
    playersRef.on('value', snapshot => {
      let players = snapshot.val()
      this.props.refreshPlayers(players)
    })

    auth.onAuthStateChanged(user => {
      if (user) {
        this.props.persistUser(user)
      }
    })
  }

  render() {
    const { players, user } = this.props

    return (
      <Container>
        <h1>Leaderboard</h1>
        <Leaderboard players={players} />
        {!user && (
          <div className={styles.warningWrapper}>
            <h5 style={{ color: 'red' }}>{`⚠️ WARNING`}</h5>
            <p className={styles.warningText}>
              - Don't sign up more than once, your past pong data will be lost.
              This is a bug and will be corrected in a future release.
            </p>
            <p className={styles.warningText}>
              - Chrome mobile web browser is preferred over Safari.
            </p>
          </div>
        )}
      </Container>
    )
  }
}

const styles = {
  warningText: css`
    font-size: 12px;
  `,
  warningWrapper: css`
    padding: 1rem;
    border: 1px solid #000;
    border-radius: 3px;
  `
}
export default HomeContainer
