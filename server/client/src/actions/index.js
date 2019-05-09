import axios from 'axios';
import {
  FETCH_USER,
  CREATE_POST,
  GET_URL,
  FETCH_MY_POSTS,
  GET_USER,
  FETCH_POSTS,
  FETCH_EVENTS
} from './types';
const CLOUD_URL = 'https://api.cloudinary.com/v1_1/yihuali1993/image/upload';
const PRESET = 'ndktqci4';
//get my info
export const fetchUser = () => {
  return async function(dispatch) {
    const res = await axios.get('/api/current_user');
    dispatch({
      type: FETCH_USER,
      payload: res.data
    });
  };
};

//create post
export const createPost = (values, history) => async dispatch => {
  //console.log(values);
  const res = await axios.post('/api/newPost', values);
  //history.push('/dashboard');
  await dispatch({
    type: CREATE_POST,
    payload: res.data
  });
};

//get image url
export const getUrl = file => async dispatch => {
  //console.log(file);
  const formData = new FormData();
  formData.append('file', file);
  formData.append('upload_preset', PRESET);

  const res = await axios({
    url: CLOUD_URL,
    method: 'POST',
    headers: {
      'Content-Type': 'applicaition/x-www-form-urlencoded'
    },
    data: formData
  });
  //console.log(res);
  dispatch({
    type: GET_URL,
    payload: res.data
  });
};
//get user's all posts
export const fetchMyPosts = () => async dispatch => {
  const res = await axios.get('/api/myPosts');

  dispatch({
    type: FETCH_MY_POSTS,
    payload: res.data
  });
};
//get all posts in the same neighborhood
export const fetchPosts = () => async dispatch => {
  const res = await axios.get('/api/allPosts');

  dispatch({
    type: FETCH_POSTS,
    payload: res.data
  });
};

//get all events
export const fetchEvents = () => async dispatch => {
  const res = await axios.get('/api/allPosts', {
    params: {
      type: 'event'
    }
  });

  dispatch({
    type: FETCH_EVENTS,
    payload: res.data
  });
};

//get single user information
export const getUser = id => async dispatch => {
  //console.log(id);
  const res = await axios.post('/users/getUser', id);

  dispatch({
    type: GET_USER,
    payload: res.data
  });
};
