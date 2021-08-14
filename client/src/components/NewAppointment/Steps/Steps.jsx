import React from 'react';
import {Steps} from 'antd';

const { Step } = Steps;

const StepsNav = ({current}) => {
  return (
    <Steps current={current}>
      <Step title='Тип занятия'/>
      <Step title='Дата'/>
      <Step title='Подтверждение'/>
    </Steps>
  );
};

export default StepsNav;