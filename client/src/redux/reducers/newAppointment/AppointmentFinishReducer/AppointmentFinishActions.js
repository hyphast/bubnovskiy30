import {SET_APPOINTMENT_FINISH_DATA} from '../../../types';
import {newAppointmentAPI} from '../../../../API/api';

export const setAppointmentFinishData = (date, time) => {
  return {type: SET_APPOINTMENT_FINISH_DATA, payload: {date, time}}
}

export const addPatient = (date, time) => {
  return async (dispatch,  getState) => {
    try {
      const userId = getState().auth.userId;
      const firstName = getState().profile.firstName;
      const lastName = getState().profile.lastName;

      debugger
      const data = await newAppointmentAPI.addPatient(date, time, userId, firstName, lastName);

      debugger
    } catch(e) {
      console.log(e.response?.data?.message);
    }
  }
}