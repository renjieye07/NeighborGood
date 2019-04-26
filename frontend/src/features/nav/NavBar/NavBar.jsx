// import React, { Component } from "react";
// import { Menu, Dropdown, Container, Button, Icon } from "semantic-ui-react";
// import { NavLink, Link, withRouter } from "react-router-dom";
import SignedOutMenu from "../Menus/SignedOutMenu";
import SignedInMenu from "../Menus/SignedInMenu";

// class NavBar extends Component {
//   state = {
//     authenticated: true
//   };

//   handleSignIn = () => {
//     this.setState({
//       authenticated: true
//     });
//   };

//   handleSignOut = () => {
//     this.setState({
//       authenticated: false
//     });
//     this.props.history.push("/");
//   };

//   render() {
//     const { authenticated } = this.state;
//     return (
//       <Menu inverted fixed="top">
//         <Container>
//           <Menu.Item as={Link} to="/" header>
//             <img src="/assets/logo.png" alt="logo" />
//             NeighborGood
//           </Menu.Item>
//           {/* <Menu.Item as={NavLink} to="/events" name="Events" />
//           {authenticated && (
//             <Menu.Item as={NavLink} to="/people" name="People" />
//           )} */}

//           {authenticated && (
//             <Menu.Item>
//               {/* <Button
//                 as={Link}
//                 to="/createEvent"
//                 floated="right"
//                 positive
//                 inverted
//                 content="Create Event"
//               /> */}
//             </Menu.Item>
//           )}
//           {authenticated ? (
//             <SignedInMenu signOut={this.handleSignOut} />
//           ) : (
//             <SignedOutMenu signIn={this.handleSignIn} />
//           )}
//         </Container>
//       </Menu>
//     );
//   }
// }

// export default withRouter(NavBar);

import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { Menu, Container, Button, Icon, Input } from "semantic-ui-react";

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
            <SignedInMenu signIn={this.handleSignIn} />
            <Button as="a" href="/api/logout">
              Log out
            </Button>
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
          <Menu.Item as={Link} to={this.props.auth ? "/events" : "/"} header>
            <img src="/assets/logo.png" alt="logo" />
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

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(NavBar);
