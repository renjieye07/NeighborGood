import React, { Component } from "react";
import { Segment, Item, Icon, List, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";
import LostListAttendee from "./LostListAttendee";

class LostListItem extends Component {
  render() {
    const { lost, deleteLost } = this.props;
    return (
      <Segment.Group>
        <Segment>
          <Item.Group>
            <Item>
              <Item.Image size="tiny" circular src={lost.hostPhotoURL} />
              <Item.Content>
                <Item.Header as="a">{lost.title}</Item.Header>
                <Item.Description>
                  Hosted by <a>{lost.hostedBy}</a>
                </Item.Description>
              </Item.Content>
            </Item>
          </Item.Group>
        </Segment>
        <Segment>
          <span>
            <Icon name="clock" /> {lost.date}|
            <Icon name="marker" /> {lost.venue}
          </span>
        </Segment>
        {/* <Segment secondary>
          <List horizontal>
            {lost.attendees &&
              lost.attendees.map(attendee => (
                <LostListAttendee key={attendee.id} attendee={attendee} />
              ))}
          </List>
        </Segment> */}
        <Segment clearing>
          <span>{lost.description}</span>
          <Button
            onClick={deleteLost(lost.id)}
            as="a"
            color="red"
            floated="right"
            content="Delete"
          />
          <Button
            as={Link}
            to={`/lost/${lost.id}`}
            color="teal"
            floated="right"
            content="View"
          />
        </Segment>
      </Segment.Group>
    );
  }
}

export default LostListItem;
