import { NavLink } from 'react-router-dom';
import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';

export default class MenuExampleSubMenu extends Component {
  state = {};

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <Menu text vertical>
        <Menu.Item>
          Quick Access
          <Menu.Menu>
            <Menu.Item
              as={NavLink}
              to="/dashboard"
              active={activeItem === 'Home'}
              onClick={this.handleItemClick}
            >
              Home
            </Menu.Item>
            <Menu.Item
              as={NavLink}
              to="/events"
              active={activeItem === 'Events'}
              onClick={this.handleItemClick}
            >
              Events
            </Menu.Item>
            <Menu.Item
              as={NavLink}
              to="/trades"
              active={activeItem === 'Trades'}
              onClick={this.handleItemClick}
            >
              Trades
            </Menu.Item>
            <Menu.Item
              as={NavLink}
              to="/info"
              active={activeItem === 'Information'}
              onClick={this.handleItemClick}
            >
              Gernnal Information
            </Menu.Item>
          </Menu.Menu>
        </Menu.Item>
      </Menu>
    );
  }
}
