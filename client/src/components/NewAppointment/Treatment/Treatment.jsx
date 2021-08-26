import React from 'react';
import TreatmentStyles from './Treatment.module.scss';
import PageHeaderBack from '../../common/PageHeader/PageHeader';
import TreatmentDatePicker from './TreatmentDatePicker/TreatmentDatePicker';
import './Treatment.scss';
import TreatmentList from './TreatmentList/TreatmentList';


const Treatment = ({appointments, isLoading, getAppointments}) => {
  return (
    <>
      <div className={TreatmentStyles.container}>
        <div className={TreatmentStyles.header}>
          <PageHeaderBack title='НАЗАД'/>
        </div>
        <div className={TreatmentStyles.subtitle}>
          <h2>Лечебные занятия</h2>
        </div>
        <div className={TreatmentStyles.calendar}>
          <h3>Календарь</h3>
          <TreatmentDatePicker getAppointments={getAppointments}/>
        </div>
        <div className={TreatmentStyles.content}>
          <TreatmentList appointments={appointments} isLoading={isLoading}/>
        </div>
      </div>
    </>
  )
};

export default Treatment;