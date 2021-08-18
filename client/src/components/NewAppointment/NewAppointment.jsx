import React from 'react';
import StepsNav from './Steps/Steps';
import AppointmentType from './AppointmentType/AppointmentType';
import BottomButtons from './BottomButtons/BottomButtons';
import NewAppointmentStyles from './NewAppointment.module.scss';
import AppointmentDate from './AppointmentDate/AppointmentDate';
import AppointmentFinish from './AppointmentFinish/AppointmentFinish';


const NewAppointment = () => {
  // const [current, setCurrent] = React.useState(0);
  // const steps = 3;
  //
  // const next = () => {
  //   setCurrent(current + 1);
  // }
  //
  // const prev = () => {
  //   setCurrent(current - 1);
  // };

  return (
    // <div>
    //   <StepsNav current={current}/>
    //
    //   {current === 0 && <AppointmentType/>}
    //   {current === 1 && <AppointmentDate/>}
    //   {current === 2 && <AppointmentFinish/>}
    //
    //   <BottomButtons current={current} steps={steps} next={next} prev={prev}/>
    // </div>
    <div className={NewAppointmentStyles.type}>
      <h2>Выберите тип занятия</h2>
      <AppointmentType/>
    </div>
  );
};

export default NewAppointment;