import {SET_UPCOMING_RECORDS} from '../../types';
import {recordsAPI} from '../../../API/api';

export const setUpcomingRecords = (records) => {
  const recs = {...records};
  return {type: SET_UPCOMING_RECORDS, payload: {...records}}
}

export const getUpcomingRecords = () => {
  return async (dispatch, getState) => {
    try {
      const userId = getState().auth.userId;
      const data = await recordsAPI.getUpcomingRecords(userId);

      dispatch(setUpcomingRecords(data.records));
    } catch (e) {
      console.log(e.response?.data?.message);
    }
  }
}
