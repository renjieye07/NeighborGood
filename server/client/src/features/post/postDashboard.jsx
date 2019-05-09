import React, { Component } from 'react';
import { Grid, Button } from 'semantic-ui-react';
import SideMenu from '../../nav/SideMenu/SideMenu';
import Filter from '../../nav/Filter/Filter';
import PostList from './postList';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const mapState = state => ({
  events: state.events
});

class EventDashboard extends Component {
  handleDeleteEvent = eventId => () => {
    this.props.deleteEvent(eventId);
  };

  render() {
    const { events } = this.props;
    return (
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
          <Button
            as={Link}
            to="/createEvent"
            onClick={this.handleFormOpen}
            positive
            content="New Event"
          />
        </Grid.Column>
      </Grid>
    );
  }
}

export default connect(mapState)(EventDashboard);
