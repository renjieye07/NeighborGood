import React, { Component } from "react";
import LostListItem from "./LostListItem";

class LostList extends Component {
  render() {
    const { losts, deleteLost } = this.props;
    return (
      <div>
        {losts.map(lost => (
          <LostListItem key={lost.id} event={lost} deleteEvent={deleteLost} />
        ))}
      </div>
    );
  }
}

export default LostList;
