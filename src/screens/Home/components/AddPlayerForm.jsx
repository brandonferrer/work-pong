import React from 'react'
import { Button, Form, Message, Segment } from 'semantic-ui-react'

const AddPlayerForm = ({
  newPlayer,
  handleNewPlayerInput,
  handleNewPlayerSubmit
}) => (
  <Segment basic style={{ maxWidth: '400px' }}>
    <h3>New Player</h3>
    <Form>
      <Form.Input
        label="Name"
        value={newPlayer}
        onChange={handleNewPlayerInput}
      />
      <Message success content="Player added!" />
      <Button onClick={() => handleNewPlayerSubmit(newPlayer)}>Add</Button>
    </Form>
  </Segment>
)

export default AddPlayerForm
