import React from 'react'
import { Link } from 'react-router-dom'
import { Menu, Header, Icon, Button, Image, Popup } from 'semantic-ui-react'
import { css } from 'emotion'

const Navbar = ({ user, openMenuToggle, login, register }) => (
  <Menu inverted borderless fixed="bottom">
    <Menu.Item as={Link} to="/">
      <Header className={styles.menuHeader}>{`WorkPONG 🏓`}</Header>
    </Menu.Item>
    <Menu.Menu position="right">
      {console.log('user', user)}
      {user ? (
        <div className={styles.buttonWrapper}>
          <Menu.Item>
            <Popup
              header={user.displayName}
              content={user.email}
              trigger={
                <Image
                  src={user.photoURL}
                  alt={user.displayName}
                  style={{ width: '36px' }}
                  rounded
                />
              }
            />
          </Menu.Item>
          <Menu.Item
            onClick={openMenuToggle}
            className={styles.menuHamburgerWrapper}
          >
            <Icon name="content" style={{ cursor: 'pointer' }} />
            <span className={styles.mobileHidden}>Menu</span>
          </Menu.Item>
        </div>
      ) : (
        <div className={styles.buttonWrapper}>
          <Menu.Item style={{ padding: '5px', margin: '5px' }}>
            <Button compact onClick={register}>
              Sign Up
            </Button>
          </Menu.Item>
          <Menu.Item style={{ padding: '5px', margin: '5px' }}>
            <Button compact primary onClick={login}>
              Login
            </Button>
          </Menu.Item>
        </div>
      )}
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
  `,
  buttonWrapper: css`
    display: flex;
    justify-content: center;
  `
}
