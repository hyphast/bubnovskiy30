import {
  AUTH_ERROR,
  AUTH_LOADING,
  CLEAR_AUTH_ERROR,
  SET_AUTH_USER_DATA,
} from '../../types'

const initialState = {
  userId: null as string | null,
  email: null as string | null,
  isAuth: false,
  errors: [] as Array<any>,
  isLoading: false,
}
export type InitialStateType = typeof initialState

export const authReducer = (
  state = initialState,
  action: any,
): InitialStateType => {
  switch (action.type) {
    case SET_AUTH_USER_DATA:
    case AUTH_LOADING: {
      return {
        ...state,
        ...action.payload,
      }
    }
    case AUTH_ERROR: {
      return {
        ...state,
        errors: [...action.errors],
      }
    }
    case CLEAR_AUTH_ERROR: {
      return {
        ...state,
        errors: [],
      }
    }
    default:
      return state
  }
}
