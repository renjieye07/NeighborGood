import React from "react";
import { Grid } from "semantic-ui-react";
import { connect } from "react-redux";
import InforDetailedHeader from "./InforDetailedHeader";
import InforDetailedInfo from "./InforDetailedInfo";
import InforDetailedChat from "./InforDetailedChat";
import InforDetailedSidebar from "./InforDetailedSidebar";

const mapState = (state, ownProps) => {
  const inforId = ownProps.match.params.id;

  let infor = {};

  if (inforId && state.infors.length > 0) {
    infor = state.losts.filter(lost => lost.id === inforId)[0];
  }

  return {
    infor
  };
};

const InforDetailedPage = ({ infor }) => {
  return (
    <Grid>
      <Grid.Column width={10}>
        <InforDetailedHeader infor={infor} />
        <InforDetailedInfo infor={infor} />
        <InforDetailedChat />
      </Grid.Column>
      {/* <Grid.Column width={6}>
        <lostDetailedSidebar attendees={lost.attendees} />
      </Grid.Column> */}
    </Grid>
  );
};

export default connect(mapState)(InforDetailedPage);
