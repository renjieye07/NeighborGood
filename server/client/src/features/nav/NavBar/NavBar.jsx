import { Link } from 'react-router-dom';

import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Menu,
  Dropdown,
  Image,
  Container,
  Button,
  Input
} from 'semantic-ui-react';

//import {helloWorld} from '../../../actions/index';

class NavBar extends Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return (
          <Menu.Item>
            <Button as={Link} to="/login">
              Login
            </Button>
            <Button as={Link} to="/signup">
              Sign Up
            </Button>
          </Menu.Item>
        );
      default:
        return (
          <Menu.Item>
            {/* <Menu.Item position="left">
              <Input icon="search" placeholder="Search..." />
            </Menu.Item> */}
            {/* <Icon />
            name
            <Icon /> */}
            <Image avatar spaced="right" src={this.props.auth.user_image} />
            <Dropdown pointing="top left" text={this.props.auth.user_name}>
              <Dropdown.Menu>
                <Dropdown.Item text="Create Event" icon="plus" />
                <Dropdown.Item text="My Events" icon="calendar" />
                <Dropdown.Item text="My Network" icon="users" />
                <Dropdown.Item text="My Profile" icon="user" />
                <Dropdown.Item
                  as={Link}
                  to="/settings"
                  text="Settings"
                  icon="settings"
                />
              </Dropdown.Menu>
            </Dropdown>
            <Button as="a" href="/api/logout">
              Log out
            </Button>
            {/* <Button onClick={this.HelloWorld.bind()}>Hello world</Button> */}
          </Menu.Item>
        );
    }
  }
  render() {
    //const { name } = this.state.user;
    console.log(this.props);
    return (
      <Menu fixed="top" inverted>
        <Container>
          <Menu.Item as={Link} to={this.props.auth ? '/dashboard' : '/'} header>
            {/* <img src="/assets/logo.png" alt="logo" /> */}
            NeighborGood
          </Menu.Item>
          <Menu.Item position="center">
            <Input icon="search" placeholder="Search..." />
          </Menu.Item>

          <Menu.Item position="right">{this.renderContent()}</Menu.Item>
        </Container>
      </Menu>
    );
  }
}

// function mapStateToProps({ auth }) {
//   return { auth };
// }

export const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(NavBar);
