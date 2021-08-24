import React from 'react';
import AppointmentType from './AppointmentType/AppointmentType';
import NewAppointmentStyles from './NewAppointment.module.scss';


const NewAppointment = () => {

  return (
    <div className={NewAppointmentStyles.type}>
      <h2>Выберите тип занятия</h2>
      <AppointmentType/>
    </div>
  );
};

export default NewAppointment;