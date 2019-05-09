import { FETCH_POSTS } from '../../actions/types';

//initial state will be an empty array since we need to map an array of posts in website
export default function(state = [], action) {
  switch (action.type) {
    case FETCH_POSTS:
      return action.payload;
    default:
      return state;
  }
}
