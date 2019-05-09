import { GET_URL } from '../../actions/types';

export default function(state = null, action) {
  switch (action.type) {
    case GET_URL:
      //make sure if user log out, set the payload to false instead of empty string
      return action.payload || false;
    default:
      return state;
  }
}
