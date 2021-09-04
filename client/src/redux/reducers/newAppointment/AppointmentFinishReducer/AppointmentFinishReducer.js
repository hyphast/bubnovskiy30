import {SET_APPOINTMENT_FINISH_DATA} from '../../../types';

const initialState = {
  date: null,
  time: null,
}

export const AppointmentFinishReducer = (state = initialState, action) => {
  switch(action.type) {
    case SET_APPOINTMENT_FINISH_DATA: {
      return {
        ...state,
        ...action.payload
      }
    }
    default: return state;
  }
}