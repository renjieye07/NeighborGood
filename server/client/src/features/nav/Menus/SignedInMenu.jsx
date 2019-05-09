import React from 'react';
import { Menu, Image, Dropdown } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const SignedInMenu = ({ signOut }) => {
  return (
    <Menu.Item position="right">
      <Image avatar spaced="right" src="/assets/user.png" />
      <Dropdown pointing="top left" text="Username">
        <Dropdown.Menu>
          <Dropdown.Item
            as={Link}
            to="/posts/new"
            text="Create Event"
            icon="plus"
          />
          <Dropdown.Item
            as={Link}
            to="/myPosts"
            text="My Events"
            icon="calendar"
          />
          <Dropdown.Item
            as={Link}
            to="/profile"
            text="My Profile"
            icon="user"
          />
          <Dropdown.Item
            as={Link}
            to="/settings"
            text="Settings"
            icon="settings"
          />
          <Dropdown.Item onClick={signOut} text="Sign Out" icon="power" />
        </Dropdown.Menu>
      </Dropdown>
    </Menu.Item>
  );
};

export default SignedInMenu;
