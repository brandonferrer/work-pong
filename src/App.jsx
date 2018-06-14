import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import { css, cx } from 'emotion'
import { HomeContainer } from './Home'
import { Navbar, SideMenu } from './shared'

class App extends Component {
  state = {
    openMenu: false
  }
  openMenuToggle = () =>
    this.setState(
      { openMenu: !this.state.openMenu },
      console.log('yo', this.state.openMenu)
    )
  render() {
    const { openMenu } = this.state
    return (
      <div>
        <Navbar openMenuToggle={this.openMenuToggle} />
        <SideMenu openMenu={openMenu} className={styles.sideMenu}>
          <div className={cx(styles.mainWrapper, styles.marginBottom52)}>
            <Switch>
              <Route exact path="/" component={HomeContainer} />
              <Route render={() => <h1>4 OH 4!</h1>} />
            </Switch>
          </div>
        </SideMenu>
      </div>
    )
  }
}

export default App

const styles = {
  mainWrapper: css`
    padding: 0;
    height: calc(100vh - 125px);
    @media (max-width: 420px) {
      height: calc(100vh - 160px);
    }
  `,
  marginBottom52: css`
    margin-bottom: 52px;
  `
}
