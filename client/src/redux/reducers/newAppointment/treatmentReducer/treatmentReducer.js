import {NEW_APPOINTMENT_LOADING, SET_TREATMENT_APPOINTMENTS_DATA} from '../../../types';

const initialState = {
  appointments: [],
  isLoading: false,
}

export const treatmentReducer = (state = initialState, action) => {
  switch(action.type) {
    case SET_TREATMENT_APPOINTMENTS_DATA:
    case NEW_APPOINTMENT_LOADING: {
      return {
        ...state,
        ...action.payload
      }
    }
    default: return state;
  }
}