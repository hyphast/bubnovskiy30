import {isAuth} from '../authReducer/authActions';
import {SET_INITIALIZED, SET_IS_NAVBAR_CLOSED} from '../../types';

export const setInitialized = () => {
  return {type: SET_INITIALIZED}
}

export const setIsNavbarClosed = (isNavbarClosed) => {
  return {type: SET_IS_NAVBAR_CLOSED, payload: {isNavbarClosed}}
}

export const initializeApp = () => {
  return async (dispatch) => {
    const promise = dispatch(isAuth());

    Promise.all([promise]).then(() => {
      dispatch(setInitialized());
    })
  }
}