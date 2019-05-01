import React from "react";

const HomePage = ({ history }) => {
  return (
    <div>
      <div className="ui inverted vertical masthead center aligned segment">
        <div className="ui text container">
          <h1 className="ui inverted stackable header">
            <img
              className="ui image massive"
              src="/assets/logo.png"
              alt="logo"
            />
            <div className="content">NeighborGood</div>
          </h1>
          <h2>Enjoy the smart and convenient Community</h2>
          <div
            onClick={() => history.push("/Signup")}
            className="ui huge inverted button"
          >
            Get Started
            <i className="right arrow icon" />
          </div>
        </div>
      </div>
      <div style={{ textAlign: "center" }} />
    </div>
  );
};

export default HomePage;
