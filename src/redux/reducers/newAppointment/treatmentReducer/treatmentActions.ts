import {
  SET_TREATMENT_APPOINTMENTS_DATA,
  NEW_APPOINTMENT_LOADING,
  CLEAR_APPOINTMENTS,
} from '../../../types'
import { newAppointmentAPI } from '../../../../API/api'
import { AppointmentsType } from '../../commonTypes'

type SetTreatmentAppointmentsDataType = {
  type: typeof SET_TREATMENT_APPOINTMENTS_DATA
  payload: { appointments: AppointmentsType }
}
export const setTreatmentAppointmentsData = (
  appointments: AppointmentsType,
): SetTreatmentAppointmentsDataType => {
  return { type: SET_TREATMENT_APPOINTMENTS_DATA, payload: { appointments } }
}

type SetIsLoadingType = {
  type: typeof NEW_APPOINTMENT_LOADING
  payload: { isLoading: boolean }
}
export const setIsLoading = (isLoading: boolean): SetIsLoadingType => {
  return { type: NEW_APPOINTMENT_LOADING, payload: { isLoading } }
}

type ClearAppointmentsType = {
  type: typeof CLEAR_APPOINTMENTS
}
export const clearAppointments = (): ClearAppointmentsType => {
  return { type: CLEAR_APPOINTMENTS }
}

export const getAppointments = (date: Date) => {
  return async (dispatch: any) => {
    try {
      dispatch(setIsLoading(true))
      const appointments = await newAppointmentAPI.getAppointments(date)

      dispatch(setTreatmentAppointmentsData(appointments))
      dispatch(setIsLoading(false))
    } catch (e: any) {
      dispatch(setIsLoading(false))
      console.log(e.response?.data?.message)
    }
  }
}
