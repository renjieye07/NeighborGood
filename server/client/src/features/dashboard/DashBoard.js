import React, { Component } from 'react';
import { Grid, Button } from 'semantic-ui-react';
import SideMenu from '../nav/SideMenu/SideMenu';
import Filter from '../nav/Filter/Filter';
import PostList from '../post/postList';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
const Dashboard = () => {
  return (
    <div>
      <div className="fixed-action-btn">
        <Link to="/posts/new" className="btn-floating btn-large red">
          <i className="material-icons">add</i>
        </Link>
      </div>

      <div>
        <Grid>
          <Grid.Column width={3}>
            <SideMenu />
            <Filter />
          </Grid.Column>
          <Grid.Column width={10}>
            <h2>Dashboard</h2>
            <PostList />
          </Grid.Column>
          {/* <Grid.Column width={6} /> */}
          <Grid.Column width={3}>
            <Button as={Link} to="/posts/new" positive content="New Event" />
          </Grid.Column>
        </Grid>
      </div>
    </div>
  );
};

export default Dashboard;
