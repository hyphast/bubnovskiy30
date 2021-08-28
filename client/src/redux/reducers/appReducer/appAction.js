import {isAuth} from '../authReducer/authActions';
import {SET_INITIALIZED} from '../../types';

export const setInitialized = () => {
  return {type: SET_INITIALIZED}
}

export const initializeApp = () => {
  return async (dispatch) => {
    const promise = dispatch(isAuth());

    Promise.all([promise]).then(() => {
      dispatch(setInitialized());
    })
  }
}