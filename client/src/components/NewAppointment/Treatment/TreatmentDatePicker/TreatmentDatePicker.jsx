import React from 'react';
import {ConfigProvider, DatePicker} from 'antd';
import ruRU from 'antd/lib/locale/ru_RU';
import 'moment/locale/ru';

const TreatmentDatePicker = ({disabledDate, onChange, size}) => {
  return (
    <>
      <ConfigProvider locale={ruRU}>
        <DatePicker disabledDate={disabledDate} onChange={onChange} size={size}/>
      </ConfigProvider>
    </>);
};

export default TreatmentDatePicker;