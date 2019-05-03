import React, { Component } from "react";
import { Segment, Item, Icon, List, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";
//import EventListAttendee from "./SaleListAttendee";

class SaleListItem extends Component {
  render() {
    const { sale, deleteSale } = this.props;
    return (
      <Segment.Group>
        <Segment>
          <Item.Group>
            <Item>
              <Item.Image size="small" src={sale.itemPhotoURL} />
              <Item.Content>
                <Item.Header as="a">{sale.title}</Item.Header>
                <Item.Description>Price:{sale.price}</Item.Description>
              </Item.Content>
            </Item>
          </Item.Group>
        </Segment>
        <Segment>
          <span>
            <Icon name="clock" /> {sale.date}|
            <Icon name="marker" /> {sale.venue}
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
          <span>{sale.description}</span>
          <Button
            onClick={deleteSale(sale.id)}
            as="a"
            color="red"
            floated="right"
            content="Delete"
          />
          <Button
            as={Link}
            to={`/sale/${sale.id}`}
            color="teal"
            floated="right"
            content="View"
          />
        </Segment>
      </Segment.Group>
    );
  }
}

export default SaleListItem;
