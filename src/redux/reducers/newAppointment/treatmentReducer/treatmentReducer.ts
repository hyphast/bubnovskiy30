import {CLEAR_APPOINTMENTS, NEW_APPOINTMENT_LOADING, SET_TREATMENT_APPOINTMENTS_DATA} from '../../../types';
import {appointmentsType} from "../../commonTypes";

const initialState = {
  appointments: null as Array<appointmentsType> | null,
  isLoading: false,
}
export type initialStateType = typeof initialState;

export const treatmentReducer = (state = initialState, action: any): initialStateType => {
  switch(action.type) {
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
    default: return state;
  }
}