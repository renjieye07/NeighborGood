import React, { Component } from "react";
import InforListItem from "./InforListItem";

class InforList extends Component {
  render() {
    const { infors, deleteInfor } = this.props;
    return (
      <div>
        {infors.map(infor => (
          <InforListItem
            key={infor.id}
            infor={infor}
            deleteInfor={deleteInfor}
          />
        ))}
      </div>
    );
  }
}

export default InforList;
