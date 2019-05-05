import axios from 'axios';

export const register = newUser => {
  return axios
    .post('users/register', {
      user_name: newUser.user_name,
      email: newUser.email,
      password: newUser.password,
      neighborhhod_zipCode: newUser.neighborhhod_zipCode,
      neighborhhod_city: newUser.neighborhhod_city
    })
    .then(res => {
      console.log('Registered!');
    });
};

export const login = user => {
  return axios.post('users/login', {
    email: user.email,
    password: user.password
  });
};
