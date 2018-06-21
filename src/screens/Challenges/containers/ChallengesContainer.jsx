import React from 'react'
import { css } from 'emotion'
import { Container, Dropdown, Button, Segment, Tab } from 'semantic-ui-react'

const ChallengesContainer = ({
  user,
  players,
  opponent,
  handleSelect,
  history
}) => {
  const loggedInUser = user && user.displayName
  let dropdownOpponentArray = players
    .map(player => ({
      text: player.name,
      value: player.id,
      image: { avatar: true, src: player.photo }
    }))
    .filter(player => player.text !== loggedInUser)

  const sections = [
    {
      menuItem: 'Request',
      render: () => <Tab.Pane attached={false}>Request</Tab.Pane>
    },
    {
      menuItem: 'Accepted',
      render: () => <Tab.Pane attached={false}>Accepted</Tab.Pane>
    }
  ]

  if (players.length === 0) {
    history.push('/')
  }

  return (
    <Container>
      <h1>Challenges</h1>
      <Tab menu={{ secondary: true, pointing: true }} panes={sections} />
      <Segment className={styles.challengeRequestWrapper} inverted>
        <h3>Who do you want to play?</h3>
        <Dropdown
          fluid
          selection
          options={dropdownOpponentArray}
          value={opponent}
          onChange={handleSelect}
        />
        <Button primary fluid className={styles.buttonWrapper}>
          Submit Challenge Request
        </Button>
      </Segment>
    </Container>
  )
}

const styles = {
  buttonWrapper: css`
    margin-top: 1rem;
  `,
  challengeRequestWrapper: css`
    max-width: 500px;
    margin-top: 5rem;
  `
}

export default ChallengesContainer
