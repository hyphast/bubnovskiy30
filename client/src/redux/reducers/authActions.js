import {AUTH_ERROR, AUTH_LOADING, CLEAR_AUTH_ERROR, SET_AUTH_USER_DATA} from '../types';
import {authAPI} from "../../API/api";

export const setAuthUserData = (userId, email, isAuth) => {
  return {type: SET_AUTH_USER_DATA, payload: {userId, email, isAuth}}
}

export const setAuthError = (errors) => {
  return {type: AUTH_ERROR, errors}
}

export const clearAuthError = () => {
  return {type: CLEAR_AUTH_ERROR}
}

export const setIsLoading = (isLoading) => {
  return {type: AUTH_LOADING, payload: {isLoading}}
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
    dispatch(setIsLoading(true));
    const data = await authAPI.login(email, password);
    localStorage.setItem('token', data.accessToken);

    dispatch(setAuthUserData(data.user.id, data.user.email, true));
    dispatch(setIsLoading(false));
    } catch(e) {
      dispatch(setIsLoading(false));
      console.log(e.response?.data?.message);
      e.response?.data?.errors && dispatch(setAuthError(e.response.data.errors));
    }
  }
}

export const registration = (firstName, lastName, email, password) => {
  return async dispatch => {
    try {
      dispatch(setIsLoading(true));
      const data = await authAPI.registration(firstName, lastName, email, password);
      localStorage.setItem('token', data.accessToken);

      dispatch(setAuthUserData(data.user.id, data.user.email, true));
      dispatch(setIsLoading(false));
    } catch(e) {
      dispatch(setIsLoading(false));
      console.log(e.response?.data?.message);
      e.response?.data?.errors && dispatch(setAuthError(e.response.data.errors));
    }
  }
}

export const logout = () => {
  return async dispatch => {
    try {
      dispatch(setIsLoading(true));
      const data = await authAPI.logout();
      localStorage.removeItem('token');

      dispatch(setAuthUserData(null, null, false));
      dispatch(setIsLoading(false));
    } catch(e) {
      dispatch(setIsLoading(false));
      console.log(e.response?.data?.message);
    }
  }
}