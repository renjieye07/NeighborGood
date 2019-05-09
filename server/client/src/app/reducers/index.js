import { combineReducers } from 'redux';
import { reducer as FormReducer } from 'redux-form';
import authReducer from './authReducer';
import createPostReducer from './createPostReducer';
//import helloWorldReducer from './helloworldReducer';
import getUrlReducer from './getUrlReducer';
import fetchMyPostsReducer from './fetchMyPostsReducer';
import fetchPostsReducer from './fetchPostsReducer';
import getUserReducer from './getUserReducer';

import errorReducer from './errorReducer';
import eventReducer from '../../features/event/eventReducer';
import saleReducer from '../../features/sale/saleReducer';
import lostReducer from '../../features/lost/lostReducer';
import inforReducer from '../../features/infor/inforReducer';

export default combineReducers({
  auth: authReducer,
  createPost: createPostReducer,
  getURL: getUrlReducer,
  posts: fetchPostsReducer,
  fetchMyPosts: fetchMyPostsReducer,
  user: getUserReducer,
  form: FormReducer,
  //-----------------
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
