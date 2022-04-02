import {SET_PROFILE, SET_USER_INFO, SET_USER_PHOTO} from '../../types';

const initialState = {
  id: null as any,
  photoUrl: '',
  firstName: '',
  lastName: '',
  patronymic: '',
  gender: '',
  phoneNumber: '',
  isActivated: false,
}
export type initialStateType = typeof initialState;

export const profileReducer = (state = initialState, action: any): initialStateType => {
  switch(action.type) {
    case SET_PROFILE:
    case SET_USER_PHOTO:
    case SET_USER_INFO : {
      return {
        ...state,
        ...action.payload,
      }
    }
    default: return state;
  }
}