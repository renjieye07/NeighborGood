import { CREATE_POST } from '../../actions/types';

export default function(state = null, action) {
  console.log(action);
  switch (action.type) {
    case CREATE_POST:
      //make sure if user log out, set the payload to false instead of empty string
      return action.payload || false;
    default:
      return state;
  }
}
