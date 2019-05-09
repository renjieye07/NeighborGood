import { HELLO_WORLD } from '../../actions/types';

export default function(state = null, action) {
  //console.log({"Action.payload": action.payload},{"Value Type": action.type})
  switch (action.type) {
    case HELLO_WORLD:
      return action.payload;
    default:
      return state;
  }
}
