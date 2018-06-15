import React from 'react'
import { Container } from 'semantic-ui-react'
import Leaderboard from '../components/Leaderboard'
import AddPlayerForm from '../components/AddPlayerForm'

const HomeContainer = ({ newPlayer, handleNewPlayerInput }, props) => {
  console.log(newPlayer)
  console.log(props)

  return (
    <Container>
      <h1>Leaderboard</h1>
      <Leaderboard />
      <AddPlayerForm
        newPlayer={newPlayer}
        handleNewPlayerInput={handleNewPlayerInput}
      />
    </Container>
  )
}

export default HomeContainer
