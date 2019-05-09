import React, { Component } from 'react';
import { Dropdown, Icon, Input, Menu } from 'semantic-ui-react';
import { NavLink, Link, withRouter } from 'react-router-dom';

export default class Filter extends Component {
  state = { activeItem: 'closest' };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <Menu text vertical>
        <Menu.Item header>Sort By</Menu.Item>
        <Menu.Item
          name="closest"
          active={activeItem === 'closest'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name="mostComments"
          active={activeItem === 'mostComments'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name="mostPopular"
          active={activeItem === 'mostPopular'}
          onClick={this.handleItemClick}
        />
      </Menu>
    );
  }
}
