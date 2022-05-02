import { SET_DELETE_RECORD_LOADING, SET_UPCOMING_RECORDS } from '../../types'
import { recordsAPI } from '../../../API/api'
import { RecordsType } from '../commonTypes'
import { setMessage } from '../appReducer/appAction'

type SetUpcomingRecordsType = {
  type: typeof SET_UPCOMING_RECORDS
  payload: RecordsType
}
export const setUpcomingRecords = (
  records: RecordsType,
): SetUpcomingRecordsType => {
  return { type: SET_UPCOMING_RECORDS, payload: { ...records } }
}

type DeleteRecordLoadingType = {
  type: typeof SET_DELETE_RECORD_LOADING
  payload: { isFetch: boolean; recordId: string }
}

export const deleteInProgress = (
  isFetch: boolean,
  recordId: string,
): DeleteRecordLoadingType => {
  return { type: SET_DELETE_RECORD_LOADING, payload: { isFetch, recordId } }
}

export const getUpcomingRecords = () => {
  return async (dispatch: any) => {
    try {
      const data = await recordsAPI.getUpcomingRecords()

      dispatch(setUpcomingRecords(data.records))
    } catch (e: any) {
      console.log(e.response?.data?.message)
    }
  }
}

export const deleteRecord = (id: string) => {
  return async (dispatch: any) => {
    try {
      dispatch(deleteInProgress(true, id))
      const data = await recordsAPI.deleteRecord(id)

      const getRecords = dispatch(getUpcomingRecords())
      Promise.all([getRecords])
        .then(() => {
          dispatch(setMessage(data))
        })
        .finally(() => {
          dispatch(deleteInProgress(false, id))
        })
    } catch (e: any) {
      console.log(e.response?.data?.message)
      dispatch(setMessage(e.response?.data))
      dispatch(deleteInProgress(false, id))
    }
  }
}
