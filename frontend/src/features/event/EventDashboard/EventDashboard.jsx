import React, { Component } from "react";
import { Grid, Button } from "semantic-ui-react";
import EventList from "../EventList/EventList";
import SideMenu from "../../nav/SideMenu/SideMenu";
import Filter from "../../nav/Filter/Filter";
import { connect } from "react-redux";
import { createEvent, deleteEvent, updateEvent } from "../eventActions";
import { NavLink, Link, withRouter } from "react-router-dom";

const mapState = state => ({
  events: state.events
});

const actions = {
  // createEvent,
  deleteEvent
  // updateEvent
};
// const eventsDashboard = [
//   {
//     id: "1",
//     title: "Trip to Tower of London",
//     date: "2018-03-27",
//     category: "culture",
//     description:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin ligula eu leo tincidunt, quis scelerisque magna dapibus. Sed eget ipsum vel arcu vehicula ullamcorper.",
//     city: "London, UK",
//     venue: "Tower of London, St Katharine's & Wapping, London",
//     hostedBy: "Bob",
//     hostPhotoURL: "https://randomuser.me/api/portraits/men/20.jpg",
//     attendees: [
//       {
//         id: "a",
//         name: "Bob",
//         photoURL: "https://randomuser.me/api/portraits/men/20.jpg"
//       },
//       {
//         id: "b",
//         name: "Tom",
//         photoURL: "https://randomuser.me/api/portraits/men/22.jpg"
//       }
//     ]
//   },
//   {
//     id: "2",
//     title: "Trip to Punch and Judy Pub",
//     date: "2018-03-28",
//     category: "drinks",
//     description:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin ligula eu leo tincidunt, quis scelerisque magna dapibus. Sed eget ipsum vel arcu vehicula ullamcorper.",
//     city: "London, UK",
//     venue: "Punch & Judy, Henrietta Street, London, UK",
//     hostedBy: "Tom",
//     hostPhotoURL: "https://randomuser.me/api/portraits/men/22.jpg",
//     attendees: [
//       {
//         id: "b",
//         name: "Tom",
//         photoURL: "https://randomuser.me/api/portraits/men/22.jpg"
//       },
//       {
//         id: "a",
//         name: "Bob",
//         photoURL: "https://randomuser.me/api/portraits/men/20.jpg"
//       }
//     ]
//   }
// ];

class EventDashboard extends Component {
  // state = {
  //   isOpen: false,
  //   selectedEvent: null
  // };

  // handleFormOpen = () => {
  //   this.setState({
  //     selectedEvent: null,
  //     isOpen: true
  //   });
  // };

  // handleCancel = () => {
  //   this.setState({
  //     isOpen: false
  //   });
  // };

  // handleUpdateEvent = updatedEvent => {
  //   this.props.updateEvent(updatedEvent);
  //   this.setState({
  //     isOpen: false,
  //     selectedEvent: null
  //   });
  // };

  // handleOpenEvent = eventToOpen => () => {
  //   this.setState({
  //     selectedEvent: eventToOpen,
  //     isOpen: true
  //   });
  // };

  // handleCreateEvent = newEvent => {
  //   newEvent.id = cuid();
  //   newEvent.hostPhotoURL = "/assets/user.png";
  //   this.props.createEvent(newEvent);
  //   this.setState({
  //     isOpen: false
  //   });
  // };

  // handleDeleteEvent = eventId => () => {
  //   this.props.deleteEvent(eventId);
  // };

  // render() {
  //   const { selectedEvent } = this.state;
  //   const { events } = this.props;
  //   return (
  //     <Grid>
  //       <Grid.Column width={4}>
  //         <SideMenu />
  //       </Grid.Column>
  //       <Grid.Column width={8}>
  //         <EventList
  //           deleteEvent={this.handleDeleteEvent}
  //           events={events}
  //           onEventOpen={this.handleOpenEvent}
  //         />
  //       </Grid.Column>
  // {/* <Grid.Column width={6}>
  //   <Button
  //     onClick={this.handleFormOpen}
  //     positive
  //     content="Create Event"
  //   />
  //   {this.state.isOpen && (
  //     <EventForm
  //       updateEvent={this.handleUpdateEvent}
  //       selectedEvent={selectedEvent}
  //       handleCancel={this.handleCancel}
  //       createEvent={this.handleCreateEvent}
  //     />
  //   )}
  // </Grid.Column> */}
  //       <Grid.Column width={4}>
  //         <Filter />
  //       </Grid.Column>
  //     </Grid>
  //   );
  // }
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
          <h2>Event List</h2>
          <EventList deleteEvent={this.handleDeleteEvent} events={events} />
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

export default connect(
  mapState,
  actions
)(EventDashboard);
