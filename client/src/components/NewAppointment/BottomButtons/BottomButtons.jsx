import React from 'react';
import classnames from 'classnames';
import NewAppointmentStyles from '../NewAppointment.module.scss';
import {Button, message} from 'antd';

const BottomButtons = ({steps, current, next, prev}) => {
  return (
    <div className={classnames('steps-action',NewAppointmentStyles.btns)}>
      {current < steps - 1 && (
        <Button type="primary" onClick={() => next()}>
          Далее
        </Button>
      )}
      {current === steps - 1 && (
        <Button type="primary" onClick={() => message.success('Processing complete!')}>
          Записаться
        </Button>
      )}
      {current > 0 && (
        <Button style={{ margin: '0 8px' }} onClick={() => prev()}>
          Назад
        </Button>
      )}
    </div>
  );
};

export default BottomButtons;