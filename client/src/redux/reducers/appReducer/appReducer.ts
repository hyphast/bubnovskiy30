import {APP_IS_READY, APP_SET_INITIALIZED} from '../../types';

const initialState = {
  initialized: false,
  isReady: false,
  globalError: null as string | null,
}
export type initialStateType = typeof initialState;

export const appReducer = (state = initialState, action: any): initialStateType => {
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