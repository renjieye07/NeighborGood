import React, { Component } from 'react';

import './Signup.css';
import SocialLogin from '../SocialLogin/SocialLogin';
import { register } from '../user/userFunctions';

class Signup extends Component {
  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     isLoading: false,
  //     email: "",
  //     password: "",
  //     confirmPassword: "",
  //     confirmationCode: "",
  //     newUser: null
  //   };
  // }
  constructor() {
    super();
    this.state = {
      // first_name: "",
      // last_name: "",
      user_name: '',
      email: '',
      password: '',
      neighborhood_zipCode: '',
      neighborhood_city: ''
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();

    const user = {
      user_name: this.state.user_name,
      email: this.state.email,
      password: this.state.password,
      neighborhood_zipCode: this.state.neighborhood_zipCode,
      neighborhood_city: this.state.neighborhood_city
    };

    register(user).then(res => {
      this.props.history.push(`/`);
    });
  }

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
                  type="text"
                  className="form-control"
                  name="user_name"
                  placeholder="Enter User Name"
                  value={this.state.user_name}
                  onChange={this.onChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  placeholder="Enter Email"
                  value={this.state.email}
                  onChange={this.onChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  placeholder="Enter Password"
                  value={this.state.password}
                  onChange={this.onChange}
                />
              </div>
              {/* <div className="form-group">
                <label htmlFor="neighborhhod_zipCode">Zip Code</label>
                <input
                  type="text"
                  className="form-control"
                  name="lneighborhhod_zipCode"
                  placeholder="Enter Zip Code"
                  value={this.state.neighborhhod_zipCode}
                  onChange={this.onChange}
                />
              </div> */}
              <div className="form-group">
                <label htmlFor="neighborhhod_zipCode">Zip Code</label>
                <input
                  type="text"
                  className="form-control"
                  name="neighborhhod_zipCode"
                  placeholder="Enter Zip Code"
                  value={this.state.neighborhhod_zipCode}
                  onChange={this.onChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="neighborhhod_city">City</label>
                <input
                  type="text"
                  className="form-control"
                  name="neighborhhod_city"
                  placeholder="Enter City Name"
                  value={this.state.neighborhhod_city}
                  onChange={this.onChange}
                />
              </div>
              <button
                type="submit"
                className="btn btn-lg btn-primary btn-block"
                //style="text-align:center"
              >
                Register
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Signup;
