import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import { css, cx } from 'emotion'
import { HomeContainer } from './screens/Home'

class App extends Component {
  render() {
    return (
      <div className={cx(styles.mainWrapper, styles.marginBottom52)}>
        <Switch>
          <Route exact path="/" render={() => <HomeContainer />} />
          <Route render={() => <h1>4 OH 4!</h1>} />
        </Switch>
      </div>
    )
  }
}

export default App

const styles = {
  mainWrapper: css`
    padding: 0;
    height: calc(100vh - 125px);
  `,
  marginBottom52: css`
    margin-bottom: 52px;
  `
}
