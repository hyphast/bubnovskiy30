import {SET_APPOINTMENT_FINISH_DATA} from '../../../types';
import {newAppointmentAPI} from '../../../../API/api';

export const setAppointmentFinishData = (date, time, appointmentType) => {
  return {type: SET_APPOINTMENT_FINISH_DATA, payload: {date, time, appointmentType}}
}

export const addPatient = (date, time) => {
  return async (dispatch,  getState) => {
    try {
      const userId = getState().auth.userId;

      const data = await newAppointmentAPI.addPatient(date, time, userId);
    } catch(e) {
      console.log(e.response?.data?.message);
    }
  }
}