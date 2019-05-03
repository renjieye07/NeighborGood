import React from "react";
import { Grid } from "semantic-ui-react";
import { connect } from "react-redux";
import LostDetailedHeader from "./LostDetailedHeader";
import LostDetailedInfo from "./LostDetailedInfo";
import LostDetailedChat from "./LostDetailedChat";
import LostDetailedSidebar from "./LostDetailedSidebar";

const mapState = (state, ownProps) => {
  const lostId = ownProps.match.params.id;

  let lost = {};

  if (lostId && state.losts.length > 0) {
    lost = state.losts.filter(lost => lost.id === lostId)[0];
  }

  return {
    lost
  };
};

const LostDetailedPage = ({ lost }) => {
  return (
    <Grid>
      <Grid.Column width={10}>
        <LostDetailedHeader lost={lost} />
        <LostDetailedInfo lost={lost} />
        <LostDetailedChat />
      </Grid.Column>
      {/* <Grid.Column width={6}>
        <LostDetailedSidebar attendees={lost.attendees} />
      </Grid.Column> */}
    </Grid>
  );
};

export default connect(mapState)(LostDetailedPage);
