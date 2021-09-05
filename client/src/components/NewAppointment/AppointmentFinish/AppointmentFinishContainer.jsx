import React from 'react';
import AppointmentFinish from './AppointmentFinish';
import {connect} from 'react-redux';
import {addPatient} from '../../../redux/reducers/newAppointment/AppointmentFinishReducer/AppointmentFinishActions';

const AppointmentFinishContainer = (props) => {
  return (
   <AppointmentFinish {...props}/>
  );
};

const mapStateToProps = state => {
  return {
    appointmentType: state.newAppointmentFinish.appointmentType,
    date: state.newAppointmentFinish.date,
    time: state.newAppointmentFinish.time,
  }
}

export default connect(mapStateToProps, {addPatient})(AppointmentFinishContainer);