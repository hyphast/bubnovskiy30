import {
  APP_IS_READY,
  APP_SET_INITIALIZED,
  CLEAR_MESSAGE,
  SET_MESSAGE,
} from '../../types'

const initialState = {
  initialized: false,
  isReady: false,
  globalMessage: {
    type: 'info' as 'success' | 'error' | 'warning' | 'info',
    message: '' as string,
    redirect: '/profile' as string,
  },
}
export type InitialStateType = typeof initialState

export const appReducer = (
  state = initialState,
  action: any,
): InitialStateType => {
  switch (action.type) {
    case SET_MESSAGE: {
      return {
        ...state,
        globalMessage: { ...state.globalMessage, ...action.payload.message },
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
          type: 'info',
          message: '',
          redirect: '/profile',
        },
      }
    }
    default:
      return state
  }
}
