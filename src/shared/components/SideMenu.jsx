import React from 'react'
import { Sidebar, Menu, Segment, Icon } from 'semantic-ui-react'

const SideMenu = ({ openMenu, children, className }) => (
  <div className={className}>
    <Sidebar.Pushable as={Segment}>
      <Sidebar
        as={Menu}
        animation="bottom overlay"
        direction="bottom"
        visible={openMenu}
        icon="labeled"
        widths={3}
        inverted
      >
        <Menu.Item name="home">
          <Icon name="home" />
          Leaderboard
        </Menu.Item>
        <Menu.Item name="gamepad">
          <Icon name="gamepad" />
          Challenges
        </Menu.Item>
      </Sidebar>
      <Sidebar.Pusher>
        <Segment basic>{children}</Segment>
      </Sidebar.Pusher>
    </Sidebar.Pushable>
  </div>
)

export default SideMenu
