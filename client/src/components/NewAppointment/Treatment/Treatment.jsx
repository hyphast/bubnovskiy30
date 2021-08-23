import React from 'react';
import {Badge, Button, DatePicker, Image, List, PageHeader} from 'antd';
import TreatmentStyles from './Treatment.module.scss';
import Avatar from 'antd/es/avatar/avatar';
import locale from '../locale.json';
import './Treatment.scss';
import {UserOutlined} from '@ant-design/icons';

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
  {
    title: 'Минин Владилен Пожарский',
  },
  {
    title: 'Егоров Егор Егорьевич',
  },
  {
    title: 'Ant Design Title 4',
  },
  {
    title: 'Ant Design Title 4',
  },
  {
    title: 'Ant Design Title 4',
  },
];

const Treatment = () => {
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

          <DatePicker locale={locale} size="large"/>
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
                <Button type="primary" shape="round" size={20} >
                  11:00
                </Button>
                <Button type="primary" shape="round" size={20} >
                  12:00
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