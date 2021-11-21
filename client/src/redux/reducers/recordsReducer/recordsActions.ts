import {SET_UPCOMING_RECORDS} from '../../types';
import {recordsAPI} from '../../../API/api';
import {recordsType} from '../commonTypes';

type setUpcomingRecordsType = {
  type: typeof SET_UPCOMING_RECORDS,
  payload: recordsType,
}
export const setUpcomingRecords = (records: recordsType): setUpcomingRecordsType => {
  return {type: SET_UPCOMING_RECORDS, payload: {...records}}
}

export const getUpcomingRecords = () => {
  return async (dispatch: any, getState: any) => {
    try {
      const userId = getState().auth.userId;
      const data = await recordsAPI.getUpcomingRecords(userId);

      dispatch(setUpcomingRecords(data.records));
    } catch (e: any) {
      console.log(e.response?.data?.message);
    }
  }
}
