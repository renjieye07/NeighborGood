import React from 'react';
import { Grid } from 'semantic-ui-react';
import { connect } from 'react-redux';

const EventDetailedPage = ({ event }) => {
  console.log(event);
  return (
    <Grid>
      <Grid.Column width={10} />
      <Grid.Column width={6}>
        {/* <EventDetailedSidebar attendees={event.attendees} /> */}
        <div>hello</div>
      </Grid.Column>
    </Grid>
  );
};

function mapStateToProps(state) {
  return {
    post: state.post
  };
}

export default connect(mapStateToProps)(EventDetailedPage);
