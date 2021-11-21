import {isAuth} from '../authReducer/authActions';
import {getUserProfile} from '../profileReducer/profileActions';
import {APP_IS_READY, APP_SET_INITIALIZED} from '../../types';

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