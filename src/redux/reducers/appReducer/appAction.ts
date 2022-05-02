import { isAuth } from '../authReducer/authActions'
import { getUserProfile } from '../profileReducer/profileActions'
import {
  APP_IS_READY,
  APP_SET_INITIALIZED,
  CLEAR_MESSAGE,
  SET_MESSAGE,
} from '../../types'

type SetInitializedType = {
  type: typeof APP_SET_INITIALIZED
}
export const setInitialized = (): SetInitializedType => {
  return { type: APP_SET_INITIALIZED }
}

type SetIsReadyType = {
  type: typeof APP_IS_READY
  payload: { isReady: boolean }
}
export const setIsReady = (isReady: boolean): SetIsReadyType => {
  return { type: APP_IS_READY, payload: { isReady } }
}

type MessageType = {
  type?: 'success' | 'error' | 'warning' | 'info'
  message: string
  redirect?: string
}
type SetMessageType = {
  type: typeof SET_MESSAGE
  payload: { message: MessageType }
}
export const setMessage = (message: MessageType): SetMessageType => {
  return { type: SET_MESSAGE, payload: { message } }
}

type ClearMessageType = {
  type: typeof CLEAR_MESSAGE
}
export const clearMessage = (): ClearMessageType => {
  return { type: CLEAR_MESSAGE }
}

export const initializeApp = () => {
  return async (dispatch: any) => {
    const isAuthPromise = dispatch(isAuth())
    const getUserProfilePromise = dispatch(getUserProfile())

    Promise.all([isAuthPromise, getUserProfilePromise])
      .then(() => {
        dispatch(setInitialized())
        dispatch(setIsReady(true))
      })
      .finally(() => {
        dispatch(setIsReady(true))
      })
  }
}
