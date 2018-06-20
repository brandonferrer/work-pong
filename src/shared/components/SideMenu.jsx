import React from 'react'
import { Link } from 'react-router-dom'
import { Sidebar, Menu, Segment, Icon } from 'semantic-ui-react'

const SideMenu = ({ openMenu, openMenuToggle, children, className }) => (
  <div className={className}>
    <Sidebar.Pushable as={Segment}>
      <Sidebar
        as={Menu}
        animation="overlay"
        direction="top"
        visible={openMenu}
        icon="labeled"
        widths={3}
        inverted
      >
        <Menu.Item name="home" as={Link} to="/" onClick={openMenuToggle}>
          <Icon name="dollar sign" />
          Leaderboard
        </Menu.Item>
        <Menu.Item
          name="Challenges"
          as={Link}
          to="/challenges"
          onClick={openMenuToggle}
        >
          <Icon name="gamepad" />
          Challenges
        </Menu.Item>
        <Menu.Item name="RandomMatch">
          <Icon name="blind" />
          Random Match
        </Menu.Item>
      </Sidebar>
      <Sidebar.Pusher>
        <Segment basic>{children}</Segment>
      </Sidebar.Pusher>
    </Sidebar.Pushable>
  </div>
)

export default SideMenu
