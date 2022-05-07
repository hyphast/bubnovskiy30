import { SET_APPOINTMENT_FINISH_DATA } from '../../../types'
import { newAppointmentAPI } from '../../../../API/api'
import { setMessage } from '../../appReducer/appAction'
import { getUpcomingRecords } from '../../recordsReducer/recordsActions'

type SetAppointmentFinishDataPayloadType = {
  appointmentType: string | null
  date: Date
  time: Date
  isSelected: boolean
}
type SetAppointmentFinishDataType = {
  type: typeof SET_APPOINTMENT_FINISH_DATA
  payload: SetAppointmentFinishDataPayloadType
}
export const setAppointmentFinishData = (
  date: Date,
  time: Date,
  isSelected: boolean,
): SetAppointmentFinishDataType => {
  const appointmentType = localStorage.getItem('appointmentType')
  return {
    type: SET_APPOINTMENT_FINISH_DATA,
    payload: { appointmentType, date, time, isSelected },
  }
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
      const userId = getState().auth.userId

      const data = await newAppointmentAPI.addPatient(
        date,
        time,
        appointmentType,
        userId,
      )

      dispatch(getUpcomingRecords())

      dispatch(setMessage(data))
    } catch (e: any) {
      console.log(e.response?.data)
      dispatch(setMessage(e.response?.data))
    }
  }
}
