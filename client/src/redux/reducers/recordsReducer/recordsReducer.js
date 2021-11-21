import {SET_UPCOMING_RECORDS} from '../../types';

const initialState = {
  upcomingRecords: [],
  finishedRecords: [],
}

export const recordsReducer = (state = initialState, action) => {
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