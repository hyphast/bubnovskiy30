import {APP_IS_READY, APP_SET_INITIALIZED, CLEAR_MESSAGE, SET_MESSAGE} from '../../types';

const initialState = {
  initialized: false,
  isReady: false,
  globalMessage: {
    type: 'info' as 'success'| 'error'| 'warning' | 'info',
    message: '' as string,
    redirect: '/profile' as string,
  },
}
export type initialStateType = typeof initialState;

export const appReducer = (state = initialState, action: any): initialStateType => {
  switch(action.type) {
    case SET_MESSAGE: {
      return {
        ...state,
        globalMessage: {
          type: action.payload.message.type,
          message: action.payload.message.message,
          redirect: action.payload.message.redirect,
        }
      }
    }
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
    case CLEAR_MESSAGE: {
      return {
        ...state,
        globalMessage: {
          type: 'info' ,
          message: '',
          redirect: '/profile',
        }
      }
    }
    default: return state;
  }
}