import React, { Component } from "react";
import SaleListItem from "./SaleListItem";

class SaleList extends Component {
  render() {
    const { sales, deleteSale } = this.props;
    return (
      <div>
        {sales.map(sale => (
          <SaleListItem key={sale.id} sale={sale} deleteSale={deleteSale} />
        ))}
      </div>
    );
  }
}

export default SaleList;
