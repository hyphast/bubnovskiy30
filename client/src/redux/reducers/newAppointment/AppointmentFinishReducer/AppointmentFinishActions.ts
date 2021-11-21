import {SET_APPOINTMENT_FINISH_DATA, SET_APPOINTMENT_TYPE} from '../../../types';
import {newAppointmentAPI} from '../../../../API/api';

type setAppointmentFinishDataPayloadType = {
  date: Date,
  time: Date,
  isSelected: boolean,
}
type setAppointmentFinishDataType = {
  type: typeof SET_APPOINTMENT_FINISH_DATA,
  payload: setAppointmentFinishDataPayloadType,
}
export const setAppointmentFinishData = (date: Date, time: Date, isSelected: boolean): setAppointmentFinishDataType => {
  return {type: SET_APPOINTMENT_FINISH_DATA, payload: {date, time, isSelected}}
}

type setAppointmentTypeType = {
  type: typeof SET_APPOINTMENT_TYPE,
  payload: {appointmentType: string}
}
export const setAppointmentType = (appointmentType: string): setAppointmentTypeType => {
  return {type: SET_APPOINTMENT_TYPE, payload: {appointmentType}}
}

export const addPatient = (date: Date, time: Date, appointmentType: string) => {
  return async (dispatch: any, getState: any) => {
    try {
      const userId = getState().auth.userId;

      const data = await newAppointmentAPI.addPatient(date, time, appointmentType, userId);

    } catch(e: any) {
      console.log(e.response?.data?.message);
    }
  }
}