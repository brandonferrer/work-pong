import React from 'react'
import { Link } from 'react-router-dom'
import { Menu, Header, Icon, Button } from 'semantic-ui-react'
import { css } from 'emotion'

const Navbar = ({ openMenuToggle }) => (
  <Menu inverted borderless fixed="bottom">
    <Menu.Item as={Link} to="/">
      <Header className={styles.menuHeader}>{`WorkPONG 🏓`}</Header>
    </Menu.Item>
    <Menu.Menu position="right">
      <Menu.Item>
        <Button compact primary onClick={() => alert('Yo!')}>
          Login
        </Button>
      </Menu.Item>
      <Menu.Item
        onClick={openMenuToggle}
        className={styles.menuHamburgerWrapper}
      >
        <Icon name="content" style={{ cursor: 'pointer' }} />
        <span className={styles.mobileHidden}>Menu</span>
      </Menu.Item>
    </Menu.Menu>
  </Menu>
)
export default Navbar

const styles = {
  menuHeader: css`
    color: white !important;
    font-weight: bold !important;
    font-size: 1.5rem !important;
  `,
  menuHamburgerWrapper: css`
    font-size: 1.25rem;
    cursor: pointer !important;
  `,
  mobileHidden: css`
    @media (max-width: 768px) {
      display: none;
    }
  `
}
