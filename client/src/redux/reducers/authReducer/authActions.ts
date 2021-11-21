import {AUTH_ERROR, AUTH_LOADING, CLEAR_AUTH_ERROR, SET_AUTH_USER_DATA} from '../../types';
import {getUserProfile} from '../profileReducer/profileActions';
import {authAPI} from "../../../API/api";

type setAuthUserDataPayloadType = {
  userId: string | null,
  email: string | null,
  isAuth: boolean,
}
type setAuthUserDataType = {
  type: typeof SET_AUTH_USER_DATA,
  payload: setAuthUserDataPayloadType,
}
export const setAuthUserData =
    (userId: string | null, email: string | null, isAuth: boolean): setAuthUserDataType => {
  return {type: SET_AUTH_USER_DATA, payload: {userId, email, isAuth}}
}

type setAuthErrorType = {
  type: typeof AUTH_ERROR,
  errors: Array<string>,
}
export const setAuthError = (errors: Array<string>): setAuthErrorType => {
  return {type: AUTH_ERROR, errors}
}

export type clearAuthErrorType = {
  type: typeof CLEAR_AUTH_ERROR,
}
export const clearAuthError = (): clearAuthErrorType => {
  return {type: CLEAR_AUTH_ERROR}
}

type setIsLoadingType = {
  type: typeof AUTH_LOADING,
  payload: {isLoading: boolean},
}
export const setIsLoading = (isLoading: boolean): setIsLoadingType => {
  return {type: AUTH_LOADING, payload: {isLoading}}
}

export const isAuth = () => {
  return async (dispatch: any) => {
    try {
      const data = await authAPI.isAuth();
      localStorage.setItem('token', data.accessToken);

      dispatch(setAuthUserData(data.user.id, data.user.email, true));
    } catch(e: any) {
      console.log(e.response?.data?.message);
    }
  }
}

export const login = (email: string, password: string) => {
  return async (dispatch: any) => {
    try {
    dispatch(setIsLoading(true));
    const data = await authAPI.login(email, password);
    localStorage.setItem('token', data.accessToken);

    dispatch(setAuthUserData(data.user.id, data.user.email, true));
    dispatch(getUserProfile());
    dispatch(setIsLoading(false));
    } catch(e: any) {
      dispatch(setIsLoading(false));
      console.log(e.response?.data?.message);
      e.response?.data?.errors && dispatch(setAuthError(e.response.data.errors));
    }
  }
}

export const registration =
    (firstName: string, lastName: string, patronymic: string, email: string, password: string, gender: string, phoneNumber: string) => {
  return async (dispatch: any) => {
    try {
      dispatch(setIsLoading(true));
      const data = await authAPI.registration(firstName, lastName, patronymic, email, password, gender, phoneNumber);
      localStorage.setItem('token', data.accessToken);

      dispatch(setAuthUserData(data.user.id, data.user.email, true));
      dispatch(getUserProfile());
      dispatch(setIsLoading(false));
    } catch(e: any) {
      dispatch(setIsLoading(false));
      console.log(e.response?.data?.message);
      e.response?.data?.errors && dispatch(setAuthError(e.response.data.errors));
    }
  }
}

export const logout = () => {
  return async (dispatch: any) => {
    try {
      dispatch(setIsLoading(true));
      const data = await authAPI.logout();
      localStorage.removeItem('token');

      dispatch(setAuthUserData(null, null,  false));
      dispatch(setIsLoading(false));
    } catch(e: any) {
      dispatch(setIsLoading(false));
      console.log(e.response?.data?.message);
    }
  }
}