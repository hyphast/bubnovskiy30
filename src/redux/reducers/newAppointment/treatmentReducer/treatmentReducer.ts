import {
  CLEAR_APPOINTMENTS,
  NEW_APPOINTMENT_LOADING,
  SET_TREATMENT_APPOINTMENTS_DATA,
} from '../../../types'
import { AppointmentsType } from '../../commonTypes'

const initialState = {
  appointments: null as Array<AppointmentsType> | null,
  isLoading: false,
}
export type InitialStateType = typeof initialState

export const treatmentReducer = (
  state = initialState,
  action: any,
): InitialStateType => {
  switch (action.type) {
    case SET_TREATMENT_APPOINTMENTS_DATA:
    case NEW_APPOINTMENT_LOADING: {
      return {
        ...state,
        ...action.payload,
      }
    }
    case CLEAR_APPOINTMENTS: {
      return {
        ...state,
        appointments: null,
      }
    }
    default:
      return state
  }
}
