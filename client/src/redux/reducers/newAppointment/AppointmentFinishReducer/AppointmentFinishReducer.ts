import {SET_APPOINTMENT_FINISH_DATA, SET_APPOINTMENT_TYPE} from '../../../types';

const initialState = {
  appointmentType: '',
  date: null as Date | null,
  time: null as Date | null,
  isSelected: false,
}
export type initialStateType = typeof initialState;

export const AppointmentFinishReducer = (state = initialState, action: any): initialStateType => {
  switch(action.type) {
    case SET_APPOINTMENT_FINISH_DATA:
    case SET_APPOINTMENT_TYPE: {
      return {
        ...state,
        ...action.payload
      }
    }
    default: return state;
  }
}