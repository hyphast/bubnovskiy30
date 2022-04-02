import {isAuth} from '../authReducer/authActions';
import {getUserProfile} from '../profileReducer/profileActions';
import {APP_IS_READY, APP_SET_INITIALIZED, CLEAR_MESSAGE, SET_MESSAGE} from '../../types';

type setInitializedType = {
  type: typeof APP_SET_INITIALIZED,
}
export const setInitialized = (): setInitializedType => {
  return {type: APP_SET_INITIALIZED}
}

type setIsReadyType = {
  type: typeof APP_IS_READY,
  payload: {isReady: boolean},
}
export const setIsReady = (isReady: boolean): setIsReadyType => {
  return {type: APP_IS_READY, payload: {isReady}}
}

type messageType = {
  type?: 'success'| 'error'| 'warning' | 'info',
  message: string,
  redirect?: string,
}
type setMessageType = {
  type: typeof SET_MESSAGE,
  payload: {message:  messageType}
}
export const setMessage = (message: messageType): setMessageType => {
  return {type: SET_MESSAGE, payload: {message}}
}

type clearMessageType = {
  type: typeof CLEAR_MESSAGE,
}
export const clearMessage = (): clearMessageType => {
  return {type: CLEAR_MESSAGE}
}

export const initializeApp = () => {
  return async (dispatch: any) => {
    const isAuthPromise = dispatch(isAuth());
    const getUserProfilePromise = dispatch(getUserProfile())

    Promise.all([isAuthPromise, getUserProfilePromise]).then(() => {
      dispatch(setInitialized());
      dispatch(setIsReady(true));
    }).finally(() => {
      dispatch(setIsReady(true));
    })
  }
}