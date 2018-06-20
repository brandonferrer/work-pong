import React, { Component } from 'react'
import { Container } from 'semantic-ui-react'
import Leaderboard from '../components/Leaderboard'
import { Navbar, SideMenu } from '../../../shared'

class HomeContainer extends Component {
  state = {
    openMenu: false
  }
  openMenuToggle = () => this.setState({ openMenu: !this.state.openMenu })

  componentDidMount() {
    this.props.getAllPlayers()
  }
  render() {
    const { players, login, register, user } = this.props
    const { openMenu } = this.state
    return (
      <div>
        <Navbar
          openMenuToggle={this.openMenuToggle}
          login={login}
          register={register}
          user={user}
        />
        <SideMenu openMenu={openMenu}>
          <Container>
            <h1>Leaderboard</h1>
            <Leaderboard players={players} />
            {!user && (
              <div>
                <h3>WARNING:</h3>
                <p>
                  Don't sign up more than once, your past pong data will be
                  lost. This is a bug and will be corrected in a future release.
                </p>
              </div>
            )}
          </Container>
        </SideMenu>
      </div>
    )
  }
}
export default HomeContainer
