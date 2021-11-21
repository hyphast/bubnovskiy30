import React from 'react';
import AppointmentType from './AppointmentType/AppointmentType';
import NewAppointmentStyles from './NewAppointment.module.scss';
import {connect} from "react-redux";
import {setAppointmentType} from "../../redux/reducers/newAppointment/AppointmentFinishReducer/AppointmentFinishActions";


const NewAppointment = (props) => {

  return (
    <div className={NewAppointmentStyles.type}>
      <h2>Выберите тип занятия</h2>
      <AppointmentType {...props}/>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    //photoUrl: state.profile.photoUrl,
  }
}

export default connect(mapStateToProps, {setAppointmentType})(NewAppointment);



