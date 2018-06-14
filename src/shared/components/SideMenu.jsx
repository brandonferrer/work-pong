import React from 'react'
import { Sidebar, Menu, Segment, Icon } from 'semantic-ui-react'

const SideMenu = ({ openMenu, children, className }) => (
  <div className={className}>
    <Sidebar.Pushable as={Segment}>
      <Sidebar
        as={Menu}
        animation="scale down"
        width="wide"
        direction="right"
        visible={openMenu}
        icon="labeled"
        vertical
        inverted
      >
        <Menu.Item name="home">
          <Icon name="home" />
          Home
        </Menu.Item>
        <Menu.Item name="gamepad">
          <Icon name="gamepad" />
          Games
        </Menu.Item>
        <Menu.Item name="camera">
          <Icon name="camera" />
          Channels
        </Menu.Item>
      </Sidebar>
      <Sidebar.Pusher>
        <Segment basic>{children}</Segment>
      </Sidebar.Pusher>
    </Sidebar.Pushable>
  </div>
)

export default SideMenu
