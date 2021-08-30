import {APP_IS_READY, APP_SET_INITIALIZED} from '../../types';

const initialState = {
  initialized: false,
  isReady: false,
  globalError: null,
}

export const appReducer = (state = initialState, action) => {
  switch(action.type) {
    case APP_SET_INITIALIZED: {
      return {
        ...state,
        initialized: true,
      }
    }
    case APP_IS_READY: {
      return {
        ...state,
        isReady: action.payload.isReady,
      }
    }
    default: return state;
  }
}