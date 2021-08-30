import {AUTH_ERROR, AUTH_LOADING, CLEAR_AUTH_ERROR, SET_AUTH_USER_DATA} from '../../types';

const initialState = {
  userId: null,
  email: null,
  // phoneNumber: null,
  isAuth: false,
  errors: [],
  isLoading: false,
}

export const authReducer = (state = initialState, action) => {
  switch(action.type) {
    case SET_AUTH_USER_DATA:
    case AUTH_LOADING: {
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
    case CLEAR_AUTH_ERROR: {
      return {
        ...state,
        errors: [],
      }
    }
    default: return state;
  }
}