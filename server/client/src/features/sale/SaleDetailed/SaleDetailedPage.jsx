import React from "react";
import { Grid } from "semantic-ui-react";
import { connect } from "react-redux";
import SaleDetailedHeader from "./SaleDetailedHeader";
import SaleDetailedInfo from "./SaleDetailedInfo";
import SaleDetailedChat from "./SaleDetailedChat";
//import SaleDetailedSidebar from "./SaleDetailedSidebar";

const mapState = (state, ownProps) => {
  const saleId = ownProps.match.params.id;

  let sale = {};

  if (saleId && state.sales.length > 0) {
    sale = state.events.filter(sale => sale.id === saleId)[0];
  }

  return {
    sale
  };
};

const SaleDetailedPage = ({ sale }) => {
  return (
    <Grid>
      <Grid.Column width={10}>
        <SaleDetailedHeader sale={sale} />
        <SaleDetailedInfo sale={sale} />
        <SaleDetailedChat />
      </Grid.Column>
      {/* <Grid.Column width={6}>
        <SaleDetailedSidebar attendees={sale.attendees} />
      </Grid.Column> */}
    </Grid>
  );
};

export default connect(mapState)(SaleDetailedPage);
