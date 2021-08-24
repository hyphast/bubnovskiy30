import {combineReducers} from 'redux';
import {authReducer} from './authReducer/authReducer';
import {appReducer} from './appReducer/appReducer';
import {treatmentReducer} from './newAppointment/treatmentReducer/treatmentReducer';

export const rootReducer = combineReducers({
  app: appReducer,
  auth: authReducer,
  treatment: treatmentReducer
});
