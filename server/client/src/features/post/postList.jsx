import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../../actions/index';
import PostItem from './postItem';

class PostList extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  renderPosts() {
    return this.props.posts.map(post => (
      <PostItem key={post._id} post={post} />
    ));
  }
  render() {
    return <div>{this.renderPosts()}</div>;
  }
}

function mapStateToProps(state) {
  return {
    posts: state.posts
  };
}
//ES6 style:
// function mapStateToProps({ posts }){
//     return { posts }
// };

export default connect(
  mapStateToProps,
  { fetchPosts }
)(PostList);
