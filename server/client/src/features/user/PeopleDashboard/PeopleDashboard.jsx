import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getMyPosts } from '../../../actions/index';
import { Segment, Item, Icon, List, Button } from 'semantic-ui-react';
import PostItem from '../../post/postItem';

class PeopleDashBoard extends Component {
  //get all post once this component is rendered to the screen
  componentDidMount() {
    this.props.getMyPosts();
  }
  //render all the posts items that user have posted
  renderMyPosts() {
    return this.props.getMyPosts().map(post => {
      return <PostItem key={post._id} post={post} />;
    });
  }

  render() {
    return <div>{this.renderMyPosts()}</div>;
  }
}

// function mapStateToProps(state) {
//   return {
//     getMyPosts: state.getMyPosts
//   };
// }
function mapStateToProps({ getMyPosts }) {
  return { getMyPosts };
}

export default connect(
  mapStateToProps,
  { getMyPosts }
)(PeopleDashBoard);
