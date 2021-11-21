import {SET_APPOINTMENT_FINISH_DATA, SET_APPOINTMENT_TYPE} from '../../../types';
import {newAppointmentAPI} from '../../../../API/api';

export const setAppointmentFinishData = (date, time, isSelected) => {
  return {type: SET_APPOINTMENT_FINISH_DATA, payload: {date, time, isSelected}}
}

export const setAppointmentType = (appointmentType) => {
  return {type: SET_APPOINTMENT_TYPE, payload: {appointmentType}}
}

export const addPatient = (date, time, appointmentType) => {
  return async (dispatch, getState) => {
    try {
      const userId = getState().auth.userId;

      const data = await newAppointmentAPI.addPatient(date, time, appointmentType, userId);

    } catch(e) {
      console.log(e.response?.data?.message);
    }
  }
}