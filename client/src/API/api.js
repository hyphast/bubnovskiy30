import * as axios from 'axios';

export const API_URL = "http://localhost:5000/api";

const api = axios.create({
  withCredentials: true,
  baseURL: API_URL,
});

api.interceptors.request.use(config => {
  config.headers.Authorization = `Bearer ${localStorage.getItem(('token'))}`;
  return config;
});

api.interceptors.response.use(config => {
  return config;
}, async error => {
  const originalRequest = error.config;
  if(error.response.status === 401 && error.config && !error.config._isRetry) {
    originalRequest._isRetry = true;
    try {
      const data = await axios.get(API_URL + '/auth/refresh', {withCredentials: true}).then(response => response.data);
      localStorage.setItem('token', data.accessToken);
      return api.request(originalRequest);
    } catch (e) {
      console.log('Пользователь не авторизован');
    }
  }
  throw error;
});

export const authAPI = {
  isAuth() {
    return axios.get(API_URL + '/auth/refresh', {withCredentials: true}).then(response => response.data);
  },
  login(email, password) {
    return api.post('/auth/login', {email, password}).then(response => response.data);
  },
  registration(firstName, lastName, patronymic, email, password, gender, phoneNumber) {
    return api.post('/auth/registration', {firstName, lastName, patronymic, email, password, gender, phoneNumber})
        .then(response => response.data);
  },
  logout() {
    return api.post('/auth/logout');
  },
}

export const newAppointmentAPI = {
  getAppointments(date) {
    return api.get(`/appointments?date=${date}`).then(response => response.data);
  },
  addPatient(date, time, appointmentType, userId) {
    return api.put('/appointments', {date, time, appointmentType, userId})
      .then(response => response.data);
  },
}

export const profileAPI = {
  getUserProfile() {
    return api.get('/profile').then(response => response.data);
  },
  savePhoto(photoUrl) {
    return api.put('/profile/photo', {photoUrl}).then(response => response.data);
  },
  editProfileInfo(firstName, lastName, patronymic, gender, phoneNumber) {
    return api.put('/profile', {firstName, lastName, patronymic, gender, phoneNumber}).then(response => response.data);
  }
}

export const recordsAPI = {
  getUpcomingRecords() {
    return api.get(`/records`).then(response => response.data);
  },
  deleteRecord(id) {
    return api.delete(`/records?id=${id}`).then(response => response.data);
  }
}