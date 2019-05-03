import React, { Component } from "react";
import { Segment, Item, Icon, List, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";
import InforListAttendee from "./InforListAttendee";

class InforListItem extends Component {
  render() {
    const { infor, deleteInfor } = this.props;
    return (
      <Segment.Group>
        <Segment>
          <Item.Group>
            <Item>
              <Item.Image size="tiny" circular src={infor.hostPhotoURL} />
              <Item.Content>
                <Item.Header as="a">{infor.title}</Item.Header>
                <Item.Description>
                  Hosted by <a>{infor.hostedBy}</a>
                </Item.Description>
              </Item.Content>
            </Item>
          </Item.Group>
        </Segment>
        <Segment>
          <span>
            <Icon name="clock" /> {infor.date}|
            <Icon name="marker" /> {infor.venue}
          </span>
        </Segment>
        {/* <Segment secondary>
          <List horizontal>
            {event.attendees &&
              event.attendees.map(attendee => (
                <EventListAttendee key={attendee.id} attendee={attendee} />
              ))}
          </List>
        </Segment> */}
        <Segment clearing>
          <span>{infor.description}</span>
          <Button
            onClick={deleteInfor(infor.id)}
            as="a"
            color="red"
            floated="right"
            content="Delete"
          />
          <Button
            as={Link}
            to={`/infor/${infor.id}`}
            color="teal"
            floated="right"
            content="View"
          />
        </Segment>
      </Segment.Group>
    );
  }
}

export default InforListItem;
