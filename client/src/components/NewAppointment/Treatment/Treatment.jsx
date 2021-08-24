import React, {useEffect, useState} from 'react';
import {Button, ConfigProvider, DatePicker, List, PageHeader} from 'antd';
import TreatmentStyles from './Treatment.module.scss';
import Avatar from 'antd/es/avatar/avatar';
import 'moment/locale/ru';
import ruRU from 'antd/lib/locale/ru_RU';
import './Treatment.scss';
import classnames from 'classnames';

const data = [
  {
    title: 'Петров Петр Петрович',
  },
  {
    title: 'Иванов Иван Иванович',
  },
  {
    title: 'Сергеев Никита Никитович',
  },
];

const Treatment = ({appointments, isLoading, getAppointments}) => {

  const onChange = (date) => {
    console.log(new Date(date._d));
    getAppointments(+new Date(date._d));
  };

  return (
    <>
      <div className={TreatmentStyles.container}>
        <div className={TreatmentStyles.header}>
          <PageHeader
            onBack={() => window.history.back()}
            title="НАЗАД"
          />
        </div>
        <div className={TreatmentStyles.subtitle}>
          <h2>Лечебные занятия</h2>
        </div>
        <div className={TreatmentStyles.calendar}>
          <h3>Календарь</h3>
          <ConfigProvider locale={ruRU}>
              <DatePicker onChange={onChange} className={'date_picker'} size="large"/>
          </ConfigProvider>;
        </div>
        <div className={TreatmentStyles.content}>
          <List
            itemLayout="vertical"
            dataSource={data}
            renderItem={item => (
              <List.Item className={TreatmentStyles.instructor}
                           style={{border: '1px solid red'}}>
                <List.Item.Meta
                  avatar={ <Avatar size={64} src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" /> }
                  title={<a href="https://ant.design">{item.title}</a>}
                  description="Инструктор"
                />
                <div className={TreatmentStyles.times}>
                <Button type="primary" shape="round" size={20} >
                  9:00
                </Button>
                </div>
              </List.Item>
            )}
          />
        </div>
      </div>
    </>
  )
};

export default Treatment;