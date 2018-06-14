import React from 'react'
import { Table, Container } from 'semantic-ui-react'

const Leaderboard = () => (
  <Container>
    <Table celled inverted unstackable selectable>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Player</Table.HeaderCell>
          <Table.HeaderCell>Rating</Table.HeaderCell>
          <Table.HeaderCell textAlign="center">W / L</Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        <Table.Row>
          <Table.Cell>Brandon</Table.Cell>
          <Table.Cell>1200</Table.Cell>
          <Table.Cell textAlign="center">10 / 0</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Mike</Table.Cell>
          <Table.Cell>1110</Table.Cell>
          <Table.Cell textAlign="center">7 / 3</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Justin</Table.Cell>
          <Table.Cell>1100</Table.Cell>
          <Table.Cell textAlign="center">5 / 5</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Quin</Table.Cell>
          <Table.Cell>1050</Table.Cell>
          <Table.Cell textAlign="center">4 / 6</Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
  </Container>
)

export default Leaderboard
