import { combineReducers } from "redux";
import { reducer as FormReducer } from "redux-form";
import authReducer from "./authReducer";
import errorReducer from "./errorReducer";
import eventReducer from "../../features/event/eventReducer";
import saleReducer from "../../features/sale/saleReducer";
import lostReducer from "../../features/lost/lostReducer";
import inforReducer from "../../features/infor/inforReducer";

export default combineReducers({
  auth: authReducer,

  events: eventReducer,
  sales: saleReducer,
  losts: lostReducer,
  form: FormReducer,
  infor: inforReducer,
  errors: errorReducer
});

// const rootReducer = combineReducers({
//   auth: authReducer,
//   events: eventReducer
// });

// export default rootReducer;
