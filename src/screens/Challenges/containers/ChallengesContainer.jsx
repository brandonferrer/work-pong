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
      menuItem: 'Feed',
      render: () => (
        <Tab.Pane attached={false}>
          <div className={styles.tabContentWrapper}>Feed</div>
        </Tab.Pane>
      )
    },
    {
      menuItem: 'Request',
      render: () => (
        <Tab.Pane attached={false}>
          <div className={styles.tabContentWrapper}>Request</div>
        </Tab.Pane>
      )
    },
    {
      menuItem: 'Accepted',
      render: () => (
        <Tab.Pane attached={false}>
          <div className={styles.tabContentWrapper}>Accepted</div>
        </Tab.Pane>
      )
    },
    {
      menuItem: 'Results',
      render: () => (
        <Tab.Pane attached={false}>
          <div className={styles.tabContentWrapper}>Results</div>
        </Tab.Pane>
      )
    }
  ]

  if (players.length === 0) {
    history.push('/')
  }

  return (
    <Container>
      <h1>Challenges</h1>
      <Tab menu={{ secondary: true }} panes={sections} />
      <Segment className={styles.challengeRequestWrapper} inverted>
        <h3>Who do you want to play?</h3>
        <Dropdown
          fluid
          selection
          options={dropdownOpponentArray}
          value={opponent}
          onChange={handleSelect}
        />
        <Button primary fluid style={{ marginTop: '1rem' }}>
          Submit Challenge Request
        </Button>
      </Segment>
    </Container>
  )
}

const styles = {
  challengeRequestWrapper: css`
    max-width: 500px;
    margin-top: 5rem;
  `,
  tabContentWrapper: css`
    height: 50vh;
    @media (max-width: 768px) {
      height: 40vh;
    }
    @media (max-width: 420px) {
      height: 30vh;
    }
  `
}

export default ChallengesContainer
