import { FETCH_MY_POSTS } from '../../actions/types';

//initial state will be an empty array
export default function(state = [], action) {
  switch (action.type) {
    case FETCH_MY_POSTS:
      return action.payload;
    default:
      return state;
  }
}
