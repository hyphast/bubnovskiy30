import {SET_PROFILE} from '../../types';
import {profileAPI} from '../../../API/api';

export const setUserProfile = (profile) => {
  debugger
  return {type: SET_PROFILE, payload: {profile}}
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