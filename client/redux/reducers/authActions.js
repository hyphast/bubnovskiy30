import {SET_AUTH_USER_DATA} from "../types";
import {authAPI} from "../../API/api";

export const setAuthUserData = (userId, email, isAuth) => {
  return {type: SET_AUTH_USER_DATA, payload: {userId, email, isAuth}}
}

export const isAuth = () => {
  return async dispatch => {
    try {
      const response = await authAPI.isAuth();
      console.log(response);
      localStorage.setItem('token', response.data.accessToken);
      const {userId, email} = response.data;
      dispatch(setAuthUserData(userId, email, true));
    } catch(e) {
      console.log(e.response?.data?.message);
    }
  }
}

export const login = (email, password) => {
  return async dispatch => {
    try {
    const response = await authAPI.login(email, password);
    console.log(response);
    localStorage.setItem('token', response.data.accessToken);

    const {userId, email} = response.data;
    dispatch(setAuthUserData(userId, email, true));
    } catch(e) {
      console.log(e.response?.data?.message);
    }
  }
}

export const registration = (firstName, lastName, email, password) => {
  return async dispatch => {
    try {
      const response = await authAPI.registration(firstName, lastName, email, password);
      console.log(response);
      localStorage.setItem('token', response.data.accessToken);

      const {userId, email} = response.data;
      dispatch(setAuthUserData(userId, email, true));
    } catch(e) {
      console.log(e.response?.data?.message);
    }
  }
}

export const logout = () => {
  return async dispatch => {
    try {
      const response = await authAPI.logout();
      localStorage.removeItem('token');

      dispatch(setAuthUserData(null, null, false));
    } catch(e) {
      console.log(e.response?.data?.message);
    }
  }
}