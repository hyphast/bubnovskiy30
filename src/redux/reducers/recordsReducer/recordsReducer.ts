import {SET_DELETE_RECORD_LOADING, SET_UPCOMING_RECORDS} from '../../types';
import {upcomingRecType, finishedRecType} from '../commonTypes';

const initialState = {
  upcomingRecords: [] as Array<upcomingRecType>,
  finishedRecords: [] as Array<finishedRecType>,
  recordsIds: [] as Array<string>,
}
export type initialStateType = typeof initialState;

export const recordsReducer = (state = initialState, action: any): initialStateType => {
  switch(action.type) {
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
            ?
            [...state.recordsIds, action.payload.recordId]
            :
            state.recordsIds.filter(id => id !== action.payload.recordId)
      }
    }
    default: return state;
  }
}