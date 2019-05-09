import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchEvents } from '../../../actions/index';
import PostItem from '../../post/postItem';

class PostList extends Component {
  componentDidMount() {
    this.props.fetchEvents();
  }

  renderPosts() {
    return this.props.events.map(post => (
      <PostItem key={post._id} post={post} />
    ));
  }
  render() {
    return <div>{this.renderPosts()}</div>;
  }
}

function mapStateToProps(state) {
  return {
    events: state.events
  };
}
//ES6 style:
// function mapStateToProps({ posts }){
//     return { posts }
// };

export default connect(
  mapStateToProps,
  { fetchEvents }
)(PostList);
