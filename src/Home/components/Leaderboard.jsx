import React from 'react'
import { css } from 'emotion'
import { Table, Segment } from 'semantic-ui-react'

const Leaderboard = () => (
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
        <Table.Row>
          <Table.Cell textAlign="center">Brandon</Table.Cell>
          <Table.Cell textAlign="center">1200</Table.Cell>
          <Table.Cell textAlign="center">10 / 0</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell textAlign="center">Mike</Table.Cell>
          <Table.Cell textAlign="center">1110</Table.Cell>
          <Table.Cell textAlign="center">7 / 3</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell textAlign="center">Justin</Table.Cell>
          <Table.Cell textAlign="center">1100</Table.Cell>
          <Table.Cell textAlign="center">5 / 5</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell textAlign="center">Quin</Table.Cell>
          <Table.Cell textAlign="center">1050</Table.Cell>
          <Table.Cell textAlign="center">4 / 6</Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
  </Segment>
)

export default Leaderboard

const styles = {
  scrollingSegment: css`
    min-height: 75vh;
    max-height: 75vh;
    overflow: auto;
    -webkit-overflow-scrolling: touch;
  `
}
