import {SET_INITIALIZED, SET_IS_NAVBAR_CLOSED} from '../../types';

const initialState = {
  initialized: false,
  globalError: null,
}

export const appReducer = (state = initialState, action) => {
  switch(action.type) {
    case SET_INITIALIZED: {
      return {
        ...state,
        initialized: true
      }
    }
    default: return state;
  }
}