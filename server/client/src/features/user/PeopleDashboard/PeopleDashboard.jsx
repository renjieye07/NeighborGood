import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import { fetchMyPosts } from '../../../actions/index';
// import { Segment, Item, Icon, List, Button } from 'semantic-ui-react';
import PostList from '../../post/postList';

const PeopleDashBoard = () => {
  return (
    <div>
      <PostList />
    </div>
  );
};

// function mapStateToProps(state) {
//   return {
//     getMyPosts: state.getMyPosts
//   };
// }

export default PeopleDashBoard;
