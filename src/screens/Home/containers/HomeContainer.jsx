import React, { Component } from 'react'
import { Container } from 'semantic-ui-react'
import Leaderboard from '../components/Leaderboard'
import AddPlayerForm from '../components/AddPlayerForm'

class HomeContainer extends Component {
  componentDidMount() {
    this.props.getAllPlayers()
  }
  render() {
    const {
      newPlayer,
      handleNewPlayerInput,
      handleNewPlayerSubmit,
      players
    } = this.props
    return (
      <Container>
        <h1>Leaderboard</h1>
        <Leaderboard players={players} />
        <AddPlayerForm
          newPlayer={newPlayer}
          handleNewPlayerInput={handleNewPlayerInput}
          handleNewPlayerSubmit={handleNewPlayerSubmit}
        />
      </Container>
    )
  }
}
export default HomeContainer
