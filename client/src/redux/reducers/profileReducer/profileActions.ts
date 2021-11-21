import {SET_PROFILE, SET_USER_INFO, SET_USER_PHOTO} from '../../types';
import {profileAPI} from '../../../API/api';
import {profileType} from '../commonTypes';

type setUserProfileType = {
  type: typeof SET_PROFILE,
  payload: profileType,
}
export const setUserProfile = (profile: profileType): setUserProfileType => {
  return {type: SET_PROFILE, payload: {...profile}}
}

type setUserPhotoType = {
  type: typeof SET_USER_PHOTO,
  payload: {photoUrl: string},
}
export const setUserPhoto = (photoUrl: string): setUserPhotoType => {
  return {type: SET_USER_PHOTO, payload: {photoUrl}}
}

type setUserInfoPayloadType = {
  firstName: string,
  lastName: string,
  patronymic: string,
  gender: string,
  phoneNumber: string,
}
type setUserInfoType = {
  type: typeof SET_USER_INFO,
  payload: setUserInfoPayloadType,
}
export const setUserInfo =
    (firstName: string, lastName: string, patronymic: string, gender: string, phoneNumber: string): setUserInfoType => {
  return {type: SET_USER_INFO, payload: {firstName, lastName, patronymic, gender, phoneNumber}}
}

export const savePhoto = (photoUrl: string) => {
  return async (dispatch: any) => {
    try {
      const data = await profileAPI.savePhoto(photoUrl);
      dispatch(setUserPhoto(photoUrl));

      dispatch(getUserProfile());
    } catch (e: any) {
      console.log(e.response?.data?.message);
    }
  }
}

export const editProfileInfo = (firstName: string, lastName: string, patronymic: string, gender: string, phoneNumber: string) => {
  return async (dispatch: any) => {
    try {
      const data = await profileAPI.editProfileInfo(firstName, lastName, patronymic, gender, phoneNumber);
      dispatch(setUserInfo(firstName, lastName, patronymic, gender, phoneNumber));

      dispatch(getUserProfile());
    } catch (e: any) {
      console.log(e.response?.data?.message);
    }
  }
}

export const getUserProfile = () => {
  return async (dispatch: any) => {
    try {
      const data = await profileAPI.getUserProfile();

      dispatch(setUserProfile(data.profile));
    } catch(e: any) {
      console.log(e.response?.data?.message);
    }
  }
}