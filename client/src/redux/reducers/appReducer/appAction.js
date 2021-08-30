import {isAuth} from '../authReducer/authActions';
import {getUserProfile} from '../profileReducer/profileActions';
import {APP_IS_READY, APP_SET_INITIALIZED} from '../../types';

export const setInitialized = () => {
  return {type: APP_SET_INITIALIZED}
}

export const setIsReady = (isReady) => {
  return {type: APP_IS_READY, payload: {isReady}}
}

export const initializeApp = () => {
  return async (dispatch) => {
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