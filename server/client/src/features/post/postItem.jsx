import React, { Component } from 'react';
import { Segment, Item, Icon, List, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import EventListAttendee from '../event/EventList/EventListAttendee';
import { getUser } from '../../actions/index';

class PostItem extends Component {
  //get user once an event list is rendered
  render() {
    const { post } = this.props;
    return (
      <Segment.Group>
        <Segment>
          <Item.Group>
            <Item>
              <Item.Image size="tiny" circular src={post.hostPhotoURL} />
              <Item.Content>
                <Item.Header as="a">{post.title}</Item.Header>
                <Item.Description>
                  Hosted by <a>Event Hoster</a>
                </Item.Description>
              </Item.Content>
            </Item>
          </Item.Group>
        </Segment>
        <Segment>
          <span>
            <Icon name="clock" /> {post.event_date} |
            <Icon name="marker" /> {post.event_place}
          </span>
        </Segment>
        <Segment secondary>
          <List horizontal>
            {/* [participants] */}
            {post.participants &&
              post.participants.map(attendee => (
                <EventListAttendee key={attendee._id} attendee={attendee} />
              ))}
          </List>
        </Segment>
        <Segment clearing>
          <span>{post.description}</span>
          <Button
            // onClick={deleteEvent(post._id)}
            as="a"
            color="red"
            floated="right"
            content="Delete"
          />
          <Button
            as={Link}
            to={`/manageEvent/${post._id}`}
            color="teal"
            floated="right"
            content="View"
          />
        </Segment>
      </Segment.Group>
    );
  }
}

export default PostItem;
