import React, { Component } from 'react';
import SaleListItem from './SalesListItem';

class EventList extends Component {
  render() {
    const { events: sales, onEventOpen, deleteEvent } = this.props;
    return (
      <div>
        <h1>Sales List</h1>
        {sales.map(event => (
          <SaleListItem
            key={event.id}
            event={event}
            onEventOpen={onEventOpen}
            deleteEvent={deleteEvent}
          />
        ))}
      </div>
    );
  }
}

export default EventList;
