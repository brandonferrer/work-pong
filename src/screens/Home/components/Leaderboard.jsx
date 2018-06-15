import React from 'react'
import { css } from 'emotion'
import { Table, Segment } from 'semantic-ui-react'

const Leaderboard = ({ players }) => {
  console.log(players)
  return (
    <Segment basic className={styles.scrollingSegment}>
      <Table celled inverted unstackable selectable>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell textAlign="center">Player</Table.HeaderCell>
            <Table.HeaderCell textAlign="center">Rating</Table.HeaderCell>
            <Table.HeaderCell textAlign="center">W / L</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {players.map(player => {
            return (
              <Table.Row key={player.name}>
                <Table.Cell textAlign="center">{player.name}</Table.Cell>
                <Table.Cell textAlign="center">{player.rating}</Table.Cell>
                <Table.Cell textAlign="center">
                  {player.wins + ' / ' + player.loss}
                </Table.Cell>
              </Table.Row>
            )
          })}
        </Table.Body>
      </Table>
    </Segment>
  )
}

export default Leaderboard

const styles = {
  scrollingSegment: css`
    min-height: 25vh;
    max-height: 75vh;
    overflow: auto;
    -webkit-overflow-scrolling: touch;
  `
}
