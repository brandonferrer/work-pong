import React from 'react'
import { Link } from 'react-router-dom'
import { Menu, Header, Icon } from 'semantic-ui-react'
import { css } from 'emotion'

const Navbar = ({ openMenuToggle }) => (
  <Menu inverted borderless fixed="top" size="huge">
    <Menu.Item as={Link} to="/">
      <Header className={styles.menuHeader}>{`WorkPONG.COM 🏓`}</Header>
    </Menu.Item>
    <Menu.Menu position="right">
      <Menu.Item
        onClick={openMenuToggle}
        className={styles.menuHamburgerWrapper}
      >
        <Icon name="content" />
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
    @media (max-width: 480px) {
      font-size: 1.25rem !important;
    }
  `,
  menuHamburgerWrapper: css`
    font-size: 1.5rem;
  `,
  mobileHidden: css`
    @media (max-width: 768px) {
      display: none;
    }
  `
}
