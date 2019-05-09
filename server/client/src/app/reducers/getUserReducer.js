import { GET_USER } from '../../actions/types';

export default function(state = [], action) {
  switch (action.type) {
    case GET_USER:
      //make sure if user log out, set the payload to false instead of empty string
      return action.payload || false;
    default:
      return state;
  }
}
