import {SET_PROFILE} from '../../types';

const initialState = {
  id: null,
  firstName: '',
  lastName: '',
  gender: '',
  phoneNumber: '',
}

export const profileReducer = (state = initialState, action) => {
  switch(action.type) {
    case SET_PROFILE: {
      return {
        ...state,
        ...action.payload.profile,
      }
    }
    default: return state;
  }
}