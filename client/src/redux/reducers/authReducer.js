import {AUTH_ERROR, SET_AUTH_USER_DATA} from '../types';

const initialState = {
  userId: null,
  email: null,
  isAuth: false,
  errors: [],
}

export const authReducer = (state = initialState, action) => {
  switch(action.type) {
    case SET_AUTH_USER_DATA: {
      return {
        ...state,
        ...action.payload
      }
    }
    case AUTH_ERROR: {
      return {
        ...state,
        errors: [...action.errors]
      }
    }
    default: return state;
  }
}