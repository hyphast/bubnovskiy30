import {SET_PROFILE, SET_USER_INFO, SET_USER_PHOTO} from '../../types';
import {profileAPI} from '../../../API/api';

export const setUserProfile = (profile) => {
  return {type: SET_PROFILE, payload: {...profile}}
}

export const setUserPhoto = (photoUrl) => {
  return {type: SET_USER_PHOTO, payload: {photoUrl}}
}

export const setUserInfo = (firstName, lastName, patronymic, gender, phoneNumber) => {
  return {type: SET_USER_INFO, payload: {firstName, lastName, patronymic, gender, phoneNumber}}
}

export const savePhoto = (photoUrl) => {
  return async (dispatch, getState) => {
    try {
      const data = await profileAPI.savePhoto(photoUrl);
      dispatch(setUserPhoto(photoUrl));

      const userId = getState().auth.userId;
      dispatch(getUserProfile(userId));
    } catch (e) {
      console.log(e.response?.data?.message);
    }
  }
}

export const editProfileInfo = (firstName, lastName, patronymic, gender, phoneNumber) => {
  return async (dispatch, getState) => {
    try {
      const data = await profileAPI.editProfileInfo(firstName, lastName, patronymic, gender, phoneNumber);
      dispatch(setUserInfo(firstName, lastName, patronymic, gender, phoneNumber));

      const userId = getState().auth.userId;
      dispatch(getUserProfile(userId));
    } catch (e) {
      console.log(e.response?.data?.message);
    }
  }
}

export const getUserProfile = () => {
  return async dispatch => {
    try {
      const data = await profileAPI.getUserProfile();

      dispatch(setUserProfile(data.profile));
    } catch(e) {
      console.log(e.response?.data?.message);
    }
  }
}