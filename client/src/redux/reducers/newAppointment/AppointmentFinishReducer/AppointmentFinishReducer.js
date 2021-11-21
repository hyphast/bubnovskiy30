import {SET_APPOINTMENT_FINISH_DATA, SET_APPOINTMENT_TYPE} from '../../../types';

const initialState = {
  appointmentType: '',
  date: null,
  time: null,
  isSelected: false,
}

export const AppointmentFinishReducer = (state = initialState, action) => {
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