import {SET_TREATMENT_APPOINTMENTS_DATA, NEW_APPOINTMENT_LOADING} from '../../../types';
import {newAppointmentAPI} from '../../../../API/api';

export const setTreatmentAppointmentsData = (appointments) => {
  return {type: SET_TREATMENT_APPOINTMENTS_DATA, payload: {appointments}}
}

export const setIsLoading = (isLoading) => {
  return {type: NEW_APPOINTMENT_LOADING, payload: {isLoading}}
}

export const getAppointments = (date) => {
  return async dispatch => {
    try {
      console.log(typeof date)
      dispatch(setIsLoading(true));
      const appointments = await newAppointmentAPI.getAppointments(date);
      console.log(appointments);

      dispatch(setTreatmentAppointmentsData(appointments));
      dispatch(setIsLoading(false));
    } catch(e) {
      dispatch(setIsLoading(false));
      console.log(e.response?.data?.message);
    }
  }
}