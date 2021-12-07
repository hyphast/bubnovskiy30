import {SET_APPOINTMENT_FINISH_DATA} from '../../../types';
import {newAppointmentAPI} from '../../../../API/api';
import {setMessage} from '../../appReducer/appAction';

type setAppointmentFinishDataPayloadType = {
  appointmentType: string | null
  date: Date,
  time: Date,
  isSelected: boolean,
}
type setAppointmentFinishDataType = {
  type: typeof SET_APPOINTMENT_FINISH_DATA,
  payload: setAppointmentFinishDataPayloadType,
}
export const setAppointmentFinishData = (date: Date, time: Date, isSelected: boolean): setAppointmentFinishDataType => {
  const appointmentType = localStorage.getItem('appointmentType');
  console.log('appointmentType', appointmentType);
  return {type: SET_APPOINTMENT_FINISH_DATA, payload: {appointmentType, date, time, isSelected}}
}

// type setAppointmentType = {
//   type: typeof SET_APPOINTMENT_TYPE,
//   payload: {appointmentType: string}
// }
// export const setAppointmentType = (appointmentType: string): setAppointmentType => {
//   return {type: SET_APPOINTMENT_TYPE, payload: {appointmentType}}
// }

export const addPatient = (date: Date, time: Date, appointmentType: string) => {
  return async (dispatch: any, getState: any) => {
    try {
      const userId = getState().auth.userId;

      const data = await newAppointmentAPI.addPatient(date, time, appointmentType, userId);

      dispatch(setMessage(data));
    } catch(e: any) {
      console.log(e.response?.data);
      dispatch(setMessage(e.response?.data));
    }
  }
}