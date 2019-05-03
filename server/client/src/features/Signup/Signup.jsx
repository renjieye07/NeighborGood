import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { registerUser } from "../../actions/authActions";
import { Divider } from "semantic-ui-react";
import SocialLogin from "../SocialLogin/SocialLogin";

class Signup extends Component {
  constructor() {
    super();
    this.state = {
      user_name: "",
      email: "",
      password: "",
      neighborhhod_zipCode: "",
      neighborhhod_city: ""
    };
    // this.onChange = this.onChange.bind(this);
    // this.onSubmit = this.onSubmit.bind(this);
  }

  // componentDidMount() {
  //   // If logged in and user navigates to Register page, should redirect them to dashboard
  //   if (this.props.auth.isAuthenticated) {
  //     this.props.history.push("/dashboard");
  //   }
  // }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors
      });
    }
  }

  onChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    const user = {
      user_name: this.state.user_name,
      email: this.state.email,
      password: this.state.password,
      neighborhhod_zipCode: this.state.neighborhhod_zipCode,
      neighborhhod_city: this.state.neighborhhod_city
    };

    this.props.registerUser(user, this.props.history);
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6 mt-5 mx-auto">
            <form noValidate onSubmit={this.onSubmit}>
              <h1 className="h3 mb-3 font-weight-normal">Please Sign Up</h1>
              <div className="form-group">
                <label htmlFor="user_name">User Name</label>
                <input
                  onChange={this.onChange}
                  value={this.state.name}
                  id="name"
                  type="text"
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  onChange={this.onChange}
                  value={this.state.email}
                  id="email"
                  type="text"
                  placeholder="Enter user name"
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  onChange={this.onChange}
                  value={this.state.password}
                  id="password"
                  type="password"
                  placeholder="Enter pwssword"
                />
              </div>
              <div className="form-group">
                <label htmlFor="neighborhhod_zipCode">Zip Code</label>
                <input
                  onChange={this.onChange}
                  value={this.state.neighborhhod_zipCode}
                  id="neighborhhod_zipCode"
                  type="text"
                  placeholder="Enter Zipcode "
                />
              </div>
              <div className="form-group">
                <label htmlFor="neighborhhod_city">City</label>
                <input
                  onChange={this.onChange}
                  value={this.state.neighborhhod_city}
                  id="neighborhhod_city"
                  type="text"
                  placeholder="Enter City "
                />
              </div>
              <button
                type="submit"
                className="btn btn-lg btn-primary btn-block"
                //style="text-align:center"
              >
                Register
              </button>
              <Divider horizontal>Or</Divider>
              <SocialLogin />
            </form>
          </div>
        </div>
      </div>
    );
  }
}

Signup.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { registerUser }
)(withRouter(Signup));
