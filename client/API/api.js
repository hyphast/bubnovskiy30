import * as axios from 'axios';

export const API_URL = 'http://localhost:5000/api'

const api = axios.create({
  withCredentials: true,
  baseURL: API_URL,
});

api.interceptors.request.use(config => {
  config.headers.Authorization = `Bearer ${localStorage.getItem(('token'))}`;
  return config;
});

export const authAPI = {
  isAuth() {
    return axios.get(API_URL + '/auth/refresh', {withCredentials: true});
  },
  login(email, password) {
    return api.post('/auth/login', {email, password});
  },
  registration(firstName, lastName, email, password) {
    return api.post('/auth/registration', {firstName, lastName, email, password});
  },
  logout() {
    return api.post('/auth/logout');
  },
}

export const profileAPI = {
  login(email, password) {
    return api.get('/profile/records', {email, password});
  },
}
