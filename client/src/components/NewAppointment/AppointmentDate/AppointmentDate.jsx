import React, {useState} from 'react';
import {Alert, Calendar} from 'antd';


const AppointmentDate = () => {
  // const [value, setValue] = useState('2017-01-25');
  // const [selectedValue, setSelectedValue] = useState('2017-01-25');
  //
  // const onSelect = value => {
  //   setValue({value});
  // }
  //
  // const onPanelChange = value => {
  //   setSelectedValue({ value });
  // }

  return (
    <>
      {/*<Alert*/}
      {/*  message={`You selected date: ${selectedValue && selectedValue.format('YYYY-MM-DD')}`}*/}
      {/*/>*/}
      {/*<RecordsCalendar value={value} onSelect={onSelect} onPanelChange={onPanelChange} />*/}
      <Calendar  />
    </>
  );
}

export default AppointmentDate;