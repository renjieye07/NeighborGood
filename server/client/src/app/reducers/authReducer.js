import { FETCH_USER } from "../../actions/types";

export default function(state = null, action) {
  console.log(action);
  switch (action.type) {
    case FETCH_USER:
      //make sure if user log out, set the payload to false instead of empty string
      return action.payload || false;
    default:
      return state;
  }
}

// import { SET_CURRENT_USER, USER_LOADING } from "../../actions/types";

// const isEmpty = require("is-empty");

// const initialState = {
//   isAuthenticated: false,
//   user: {},
//   loading: false
// };

// export default function(state = initialState, action) {
//   switch (action.type) {
//     case SET_CURRENT_USER:
//       return {
//         ...state,
//         isAuthenticated: !isEmpty(action.payload),
//         user: action.payload
//       };
//     case USER_LOADING:
//       return {
//         ...state,
//         loading: true
//       };
//     default:
//       return state;
//   }
// }
