import axios from 'axios';
import { FETCH_USER, CREATE_POST } from './types';

//action creator
export const fetchUser = () => {
  return async function(dispatch) {
    const res = await axios.get('/api/current_user');
    console.log(res);
    dispatch({
      type: FETCH_USER,
      payload: res.data
    });
  };
};

//create post
export const createPost = (values, history) => async dispatch => {
  console.log(values);
  const res = await axios.post('/api/newPost', values);
  history.push('/dashboard');
  dispatch({
    type: CREATE_POST,
    payload: res.data
  });
};

// export function helloWorld(){
//     return{
//       type: HELLO_WORLD,
//       payload: "hello world"
//     }
// }
