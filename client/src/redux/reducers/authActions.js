import {SET_AUTH_USER_DATA} from "../types";
import {authAPI} from "../../API/api";

export const setAuthUserData = (userId, email, isAuth) => {
  return {type: SET_AUTH_USER_DATA, payload: {userId, email, isAuth}}
}

export const isAuth = () => {
  return async dispatch => {
    try {
      const data = await authAPI.isAuth();
      console.log(data);
      localStorage.setItem('token', data.accessToken);

      dispatch(setAuthUserData(data.user.id, data.user.email, true));
    } catch(e) {
      console.log(e.response?.data?.message);
    }
  }
}

export const login = (email, password) => {
  return async dispatch => {
    try {
    const data = await authAPI.login(email, password);
    localStorage.setItem('token', data.accessToken);

    dispatch(setAuthUserData(data.user.id, data.user.email, true));
    } catch(e) {
      console.log(e.response?.data?.message);
    }
  }
}

export const registration = (firstName, lastName, email, password) => {
  return async dispatch => {
    try {
      const data = await authAPI.registration(firstName, lastName, email, password);
      localStorage.setItem('token', data.accessToken);

      dispatch(setAuthUserData(data.user.id, data.user.email, true));
    } catch(e) {
      console.log(e.response?.data?.message);
    }
  }
}

export const logout = () => {
  return async dispatch => {
    try {
      const data = await authAPI.logout();
      localStorage.removeItem('token');

      dispatch(setAuthUserData(null, null, false));
    } catch(e) {
      console.log(e.response?.data?.message);
    }
  }
}