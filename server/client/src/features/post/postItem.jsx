import React, { Component } from 'react';
import { Segment, Item, List, Image, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

class PostItem extends Component {
  //get user once an event list is rendered

  render() {
    const { post } = this.props;
    return (
      <Segment.Group>
        <Segment>
          <Item.Group>
            <Item key={post._id}>
              <Item.Image
                size="tiny"
                circular
                src={post.post_owner.user_image}
              />
              <Item.Content>
                <Item.Header as={Link} to={`/posts/${post._id}`}>
                  {post.post_title}
                </Item.Header>
                <Item.Description>
                  Hosted by <a>{post.post_owner.user_name}</a>, Posted on{' '}
                  <p>
                    {post.createdAt
                      ? new Date(post.createdAt).toLocaleDateString()
                      : new Date(post.post_date).toLocaleDateString()}
                  </p>
                </Item.Description>
                <Item.Description>{post.post_type}</Item.Description>
              </Item.Content>
            </Item>
          </Item.Group>
        </Segment>
        <Segment>
          <span>
            <Icon name="clock" />{' '}
            {post.event_date
              ? new Date(post.event_date).toLocaleDateString()
              : 'N/A'}{' '}
            |
            <Icon name="marker" /> {post.event_place ? post.event_place : 'N/A'}
          </span>
        </Segment>
        <Segment secondary>
          <List horizontal>
            {post.participants &&
              post.participants.map(attendee => (
                <List.Item key={attendee._id}>
                  <Image
                    as="a"
                    size="mini"
                    circular
                    src={attendee.user_image}
                  />
                </List.Item>
              ))}
          </List>
        </Segment>
        <Segment clearing>
          <span>{post.description}</span>
          {/* <Button
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
          /> */}
        </Segment>
      </Segment.Group>
    );
  }
}

// function mapStateToProps(state) {
//   return {
//     user: state.user
//   };
// }

// export default connect(
//   mapStateToProps,
//   { getUser }
// )(PostItem);

export default PostItem;
