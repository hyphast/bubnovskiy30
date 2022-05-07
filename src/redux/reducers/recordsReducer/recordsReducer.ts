import { SET_DELETE_RECORD_LOADING, SET_UPCOMING_RECORDS } from '../../types'
import { RecType } from '../commonTypes'

const initialState = {
  upcomingRecords: [] as Array<RecType>,
  finishedRecords: [] as Array<RecType>,
  recordsIds: [] as Array<string>,
  modifiedNumber: 0,
}
export type InitialStateType = typeof initialState

export const recordsReducer = (
  state = initialState,
  action: any,
): InitialStateType => {
  switch (action.type) {
    case SET_UPCOMING_RECORDS: {
      return {
        ...state,
        ...action.payload,
      }
    }
    case SET_DELETE_RECORD_LOADING: {
      return {
        ...state,
        recordsIds: action.payload.isFetch
          ? [...state.recordsIds, action.payload.recordId]
          : state.recordsIds.filter((id) => id !== action.payload.recordId),
      }
    }
    default:
      return state
  }
}
