import React, { Component } from 'react';
import { Grid, Button } from 'semantic-ui-react';
import EventList from '../EventList/EventList';
import SideMenu from '../../nav/SideMenu/SideMenu';
import Filter from '../../nav/Filter/Filter';
import { connect } from 'react-redux';
// import { deleteEvent } from '../eventActions';
import { Link } from 'react-router-dom';

class EventDashboard extends Component {
  render() {
    const { events } = this.props;
    // console.log(events);
    return (
      <Grid>
        <Grid.Column width={3}>
          <SideMenu />
          <Filter />
        </Grid.Column>
        <Grid.Column width={10}>
          <h2>Event List</h2>
          <EventList events={events} />
        </Grid.Column>
        {/* <Grid.Column width={6} /> */}
        <Grid.Column width={3}>
          <Button as={Link} to="/posts/new" positive content="New Event" />
        </Grid.Column>
      </Grid>
    );
  }
}

export default EventDashboard;
