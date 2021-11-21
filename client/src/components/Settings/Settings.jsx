import React from 'react';
import {Checkbox} from "antd";

const Settings = () => {
  const onChange = e => {
    console.log(`checked = ${e.target.checked}`);
  };

  return (
    <div>
      <h2>Настройки</h2>
      <Checkbox onChange={onChange}>Уведомлять об предстоящих занятиях</Checkbox>
    </div>
  );
};

export default Settings;