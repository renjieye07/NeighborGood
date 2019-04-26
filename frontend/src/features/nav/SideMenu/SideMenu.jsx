// import React, { Component } from "react";
// import { Menu, Input } from "semantic-ui-react";
import { NavLink, Link, withRouter } from "react-router-dom";

// export default class SideMenu extends Component {
//   state = { activeItem: "home" };

//   handleItemClick = (e, { name }) => this.setState({ activeItem: name });

//   render() {
//     const { activeItem } = this.state;

//     return (
//       <Menu pointing secondary vertical>
//         <Menu.Item
//           name="home"
//           active={activeItem === "home"}
//           onClick={this.handleItemClick}
//         />
//         <Menu.Item
//           as={NavLink}
//           to="/events"
//           name="Events"
//           active={activeItem === "Events"}
//           onClick={this.handleItemClick}
//         />
//         <Menu.Item
//           as={NavLink}
//           to="/sales"
//           name="Sale"
//           active={activeItem === "Sale"}
//           onClick={this.handleItemClick}
//         />
//         <Menu.Item
//           name="Lost/Found"
//           active={activeItem === "Lost/Found"}
//           onClick={this.handleItemClick}
//         />
//         <Menu.Item
//           name="Information"
//           active={activeItem === "Information"}
//           onClick={this.handleItemClick}
//         />
//         <Menu.Item
//           as={NavLink}
//           to="/settings"
//           name="people"
//           active={activeItem === "home"}
//           onClick={this.handleItemClick}
//         />
//         <Menu.Item>
//           <Input icon="search" placeholder="Search..." />
//         </Menu.Item>
//       </Menu>
//     );
//   }
// }

import React, { Component } from "react";
import { Dropdown, Icon, Input, Menu } from "semantic-ui-react";

export default class MenuExampleSubMenu extends Component {
  state = {};

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <Menu text vertical>
        {/* <Menu.Item>
          <Input placeholder="Search..." />
        </Menu.Item> */}

        <Menu.Item>
          Home
          <Menu.Menu>
            <Menu.Item
              as={NavLink}
              to="/events"
              active={activeItem === "Events"}
              onClick={this.handleItemClick}
            >
              Events
            </Menu.Item>
            <Menu.Item
              as={NavLink}
              to="/sales"
              active={activeItem === "Sale"}
              onClick={this.handleItemClick}
            >
              Sales & Free
            </Menu.Item>
            <Menu.Item
              name="Lost/Found"
              active={activeItem === "Lost/Found"}
              onClick={this.handleItemClick}
            >
              Lost & Found
            </Menu.Item>
            <Menu.Item
              name="Information"
              active={activeItem === "Information"}
              onClick={this.handleItemClick}
            >
              Gernnal Information
            </Menu.Item>
          </Menu.Menu>
        </Menu.Item>

        {/* <Menu.Item
          name="browse"
          active={activeItem === "browse"}
          onClick={this.handleItemClick}
        >
          <Icon name="grid layout" />
          Browse
        </Menu.Item> */}
        {/* <Menu.Item
          name="messages"
          active={activeItem === "messages"}
          onClick={this.handleItemClick}
        >
          Messages
        </Menu.Item> */}

        {/* <Dropdown item text="User Profile">
          <Dropdown.Menu>
            <Dropdown.Item icon="edit" text="Edit Profile" />
            <Dropdown.Item icon="globe" text="Choose Language" />
            <Dropdown.Item icon="settings" text="Account Settings" />
          </Dropdown.Menu>
        </Dropdown> */}
      </Menu>
    );
  }
}
