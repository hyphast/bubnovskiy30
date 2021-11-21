import {combineReducers} from 'redux';
import {authReducer} from './authReducer/authReducer';
import {appReducer} from './appReducer/appReducer';
import {treatmentReducer} from './newAppointment/treatmentReducer/treatmentReducer';
import {profileReducer} from './profileReducer/profileReducer';
import {recordsReducer} from "./recordsReducer/recordsReducer";
import {AppointmentFinishReducer} from '../reducers/newAppointment/AppointmentFinishReducer/AppointmentFinishReducer'

export const rootReducer = combineReducers({
  app: appReducer,
  auth: authReducer,
  treatment: treatmentReducer,
  newAppointmentFinish: AppointmentFinishReducer,
  profile: profileReducer,
  records: recordsReducer,
});
