import React, { Component } from 'react'
import { Menu,Input } from 'semantic-ui-react';
import { NavLink, Link, withRouter } from 'react-router-dom';

export default class SideMenu extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu pointing secondary vertical>
        <Menu.Item name='home' active={activeItem === 'home'} onClick={this.handleItemClick} />
        <Menu.Item  as={NavLink} to="/events" name="Events"
          
          active={activeItem === 'Events'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name='Sale'
          active={activeItem === 'Sale'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name='Lost/Found'
          active={activeItem === 'Lost/Found'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name='Information'
          active={activeItem === 'Information'}
          onClick={this.handleItemClick}
        />
        <Menu.Item>
          <Input icon='search' placeholder='Search...' />
        </Menu.Item>
      </Menu>
    )
  }
}