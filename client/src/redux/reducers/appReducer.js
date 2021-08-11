import {SET_INITIALIZED, SET_IS_NAVBAR_CLOSED} from '../types';

const initialState = {
  initialized: false,
  globalError: null,
  isNavbarClosed: false,
}

export const appReducer = (state = initialState, action) => {
  switch(action.type) {
    case SET_INITIALIZED: {
      return {
        ...state,
        initialized: true
      }
    }
    case SET_IS_NAVBAR_CLOSED: {
        return {
          ...state,
          ...action.payload,
        }
      }

    default: return state;
  }
}