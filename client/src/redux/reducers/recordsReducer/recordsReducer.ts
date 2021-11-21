import {SET_UPCOMING_RECORDS} from '../../types';
import {upcomingRecType, finishedRecType} from '../commonTypes';

const initialState = {
  upcomingRecords: [] as Array<upcomingRecType>,
  finishedRecords: [] as Array<finishedRecType>,
}
export type initialStateType = typeof initialState;

export const recordsReducer = (state = initialState, action: any): initialStateType => {
  switch(action.type) {
    case SET_UPCOMING_RECORDS : {
      return {
        ...state,
        ...action.payload,
      }
    }
    default: return state;
  }
}