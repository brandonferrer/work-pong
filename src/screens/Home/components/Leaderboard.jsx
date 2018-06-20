import React from 'react'
import { css } from 'emotion'
import _ from 'lodash'
import { Table, Segment } from 'semantic-ui-react'

const Leaderboard = ({ players }) => {
  const sortedPlayers = players && _.sortBy(players, ['rating']).reverse()
  return (
    <Segment basic className={styles.scrollingSegment}>
      <Table celled inverted unstackable selectable>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell textAlign="center">Rank</Table.HeaderCell>
            <Table.HeaderCell textAlign="center">Player</Table.HeaderCell>
            <Table.HeaderCell textAlign="center">Rating</Table.HeaderCell>
            <Table.HeaderCell textAlign="center">Wins/Loss</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {players &&
            sortedPlayers.map((player, index) => {
              return (
                <Table.Row key={player.name}>
                  <Table.Cell textAlign="center">{index + 1}</Table.Cell>
                  <Table.Cell textAlign="center">{player.name}</Table.Cell>
                  <Table.Cell textAlign="center">{player.rating}</Table.Cell>
                  <Table.Cell textAlign="center">
                    {player.wins} - {player.loss}
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
