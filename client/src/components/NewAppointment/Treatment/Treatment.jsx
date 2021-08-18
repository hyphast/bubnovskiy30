import React from 'react';
import {DatePicker, Descriptions, PageHeader} from 'antd';
import TreatmentStyles from './Treatment.module.scss';
import {UserOutlined} from '@ant-design/icons';
import Avatar from 'antd/es/avatar/avatar';
import locale from '../locale.json';
import './Treatment.scss';

const Treatment = () => {
  return (
    <>
      <PageHeader
        className={TreatmentStyles.backBtn}
        onBack={() => window.history.back()}
        title="НАЗАД"
      />
      <h2>Лечебные занятия</h2>
      <div className={TreatmentStyles.container}>
        <div>
          <div>
            <h3>Календарь</h3>
            <DatePicker locale={locale} className={TreatmentStyles.datePick} size="large"/>
          </div>
        </div>
        <div className={TreatmentStyles.instructors}>
          <h3>Инстукторы</h3>
          <div>
            <div>
              <Avatar size="large" icon={<UserOutlined/>}/>
              <span>Петров Иван Иванович</span>
            </div>
            <div>
              <Avatar size="large" icon={<UserOutlined/>}/>
              <span>Никитин Петр Николаевич</span>
            </div>
            <div>
              <Avatar size="large" icon={<UserOutlined/>}/>
              <span>Степанов Алексей Геннадьевич</span>
            </div>
            <div>
              <Avatar size="large" icon={<UserOutlined/>}/>
              <span>Власов Игорь Петрович</span>
            </div>
            <div>
              Time
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Treatment;