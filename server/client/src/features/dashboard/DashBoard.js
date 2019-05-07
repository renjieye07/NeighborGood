import React from 'react';
import { Link } from 'react-router-dom';
import PeopleDashBoard from '../user/PeopleDashboard/PeopleDashboard';
const Dashboard = () => {
  return (
    <div>
      Dashboard
      <div className="fixed-action-btn">
        <Link to="/posts/new" className="btn-floating btn-large red">
          <i className="material-icons">add</i>
        </Link>
      </div>
      <div>
        <img src="https://res.cloudinary.com/yihuali1993/image/upload/v1557111980/yrqwwnwm67sjf06y8dvp.jpg" />
      </div>
      <div>
        <PeopleDashBoard />
      </div>
    </div>
  );
};

export default Dashboard;
